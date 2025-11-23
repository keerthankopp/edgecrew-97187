import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Validate API keys are present
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      throw new Error('Email service not configured. Please add RESEND_API_KEY secret.');
    }
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not set');
      throw new Error('AI service not configured. Please add LOVABLE_API_KEY secret.');
    }

    const resend = new Resend(RESEND_API_KEY);
    const { command } = await req.json();
    
    if (!command) {
      throw new Error('No command provided');
    }

    console.log('Processing command:', command);

    // Contact mappings for quick access
    const contactMappings: Record<string, string> = {
      'aboud': 'Aboud.Mouakket@yeti-leipzig.org',
      'abood': 'Aboud.Mouakket@yeti-leipzig.org',
      'aboodh': 'Aboud.Mouakket@yeti-leipzig.org',
      'keerthan': 'keerthankr@gmail.com',
      'kirtan': 'keerthankr@gmail.com',
    };

    // Use Lovable AI to extract email details from the command
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant that extracts email information from voice commands.
Extract the following information from the user's command:
1. Recipient email address
2. Subject
3. Body content

CRITICAL EMAIL EXTRACTION RULES:
- If the user says "at" (e.g., "john at gmail.com"), convert it to "@" (john@gmail.com)
- If the user says "dot" (e.g., "gmail dot com"), convert it to "." (gmail.com)
- The email MUST be in valid format: username@domain.com
- Always ensure the @ symbol is present in the email address

Return ONLY a JSON object with these fields: { "email": "string", "subject": "string", "body": "string" }.
If any information is missing, use reasonable defaults.
For example, if the user says "Send an email to john at example dot com about meeting tomorrow", 
extract: { "email": "john@example.com", "subject": "Meeting Tomorrow", "body": "Hello,\n\nI wanted to reach out regarding our meeting scheduled for tomorrow.\n\nBest regards" }`
          },
          {
            role: 'user',
            content: command
          }
        ],
        temperature: 0.3,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('Lovable AI error:', errorText);
      throw new Error(`AI processing failed: ${errorText}`);
    }

    const aiData = await aiResponse.json();
    let content = aiData.choices[0].message.content;
    console.log('AI response:', content);

    // Strip markdown code blocks if present
    content = content.trim();
    if (content.startsWith('```json')) {
      content = content.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    } else if (content.startsWith('```')) {
      content = content.replace(/^```\n?/, '').replace(/\n?```$/, '');
    }

    // Parse the JSON response
    const emailData = JSON.parse(content.trim());
    
    if (!emailData.email) {
      throw new Error('Could not extract email address from command');
    }

    // Check if the extracted email matches any contact names
    const emailLower = emailData.email.toLowerCase();
    for (const [name, email] of Object.entries(contactMappings)) {
      if (emailLower.includes(name)) {
        console.log(`Mapped contact "${name}" to ${email}`);
        emailData.email = email;
        break;
      }
    }

    console.log('Extracted email data:', emailData);

    // Return extracted data without sending
    return new Response(
      JSON.stringify({ 
        emailData: {
          recipient: emailData.email,
          subject: emailData.subject || 'Message from Voice Assistant',
          body: emailData.body
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in process-voice-command:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
