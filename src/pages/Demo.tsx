import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mic, MicOff, Loader2, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Demo = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await processAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setTranscript("");
      setResult("");
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Error",
        description: "Could not access microphone. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    try {
      // Convert blob to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = reader.result?.toString().split(",")[1];

        // Step 1: Transcribe audio
        const { data: transcribeData, error: transcribeError } = await supabase.functions.invoke(
          "transcribe-audio",
          {
            body: { audio: base64Audio },
          }
        );

        if (transcribeError) {
          throw new Error(transcribeError.message);
        }

        const transcribedText = transcribeData.text;
        setTranscript(transcribedText);

        // Step 2: Process command and send email
        const { data: processData, error: processError } = await supabase.functions.invoke(
          "process-voice-command",
          {
            body: { command: transcribedText },
          }
        );

        if (processError) {
          throw new Error(processError.message);
        }

        setResult(processData.message);
        toast({
          title: "Success!",
          description: processData.message,
        });
      };
    } catch (error: any) {
      console.error("Error processing audio:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to process audio",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('demo.back')}
        </Button>

        <Card className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{t('demo.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('demo.description')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('demo.example')}
            </p>
          </div>

          <div className="flex justify-center py-8">
            {!isRecording && !isProcessing && (
              <Button
                variant="cta"
                size="xl"
                onClick={startRecording}
                className="gap-2"
              >
                <Mic className="h-6 w-6" />
                {t('demo.startRecording')}
              </Button>
            )}

            {isRecording && (
              <Button
                variant="destructive"
                size="xl"
                onClick={stopRecording}
                className="gap-2 animate-pulse"
              >
                <MicOff className="h-6 w-6" />
                {t('demo.stopRecording')}
              </Button>
            )}

            {isProcessing && (
              <Button
                variant="secondary"
                size="xl"
                disabled
                className="gap-2"
              >
                <Loader2 className="h-6 w-6 animate-spin" />
                {t('demo.processing')}
              </Button>
            )}
          </div>

          {transcript && (
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Mic className="h-4 w-4" />
                {t('demo.transcript')}
              </h3>
              <Card className="p-4 bg-muted">
                <p className="text-sm">{transcript}</p>
              </Card>
            </div>
          )}

          {result && (
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                {t('demo.result')}
              </h3>
              <Card className="p-4 bg-accent/10 border-accent">
                <p className="text-sm">{result}</p>
              </Card>
            </div>
          )}
        </Card>

        {/* CTA Section */}
        {result && (
          <Card className="p-8 mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Like What You Experienced?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This is just a glimpse of EdgeCrew's capabilities. Sign up for our pilot program 
                to unlock the full suite of features and revolutionize your construction site management.
              </p>
              <Button
                variant="cta"
                size="xl"
                onClick={() => navigate("/#contact")}
                className="mt-4"
              >
                Join the Pilot Program
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Demo;
