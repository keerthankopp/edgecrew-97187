import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mic, MicOff, Loader2, Mail, ArrowLeft, CheckCircle, XCircle, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Demo = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [emailData, setEmailData] = useState<{ recipient: string; subject: string; body: string } | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [result, setResult] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
      }
    };
  }, []);

  const startCountdown = (data: { recipient: string; subject: string; body: string }) => {
    setCountdown(8);
    let timeLeft = 8;

    countdownTimerRef.current = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);

      if (timeLeft === 0) {
        if (countdownTimerRef.current) {
          clearInterval(countdownTimerRef.current);
        }
        // Only auto-send if not in editing mode
        if (!isEditing) {
          sendEmail(data);
        }
      }
    }, 1000);
  };

  const cancelSend = () => {
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }
    setCountdown(null);
    setIsEditing(true);
  };

  const handleEdit = () => {
    // Stop countdown when user clicks edit
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }
    setCountdown(null);
    setIsEditing(true);
  };

  const sendEmail = async (data: { recipient: string; subject: string; body: string }) => {
    setIsProcessing(true);
    setCountdown(null);

    try {
      const { data: sendData, error: sendError } = await supabase.functions.invoke("send-email", {
        body: data,
      });

      if (sendError) {
        throw new Error(sendError.message);
      }

      setResult(sendData.message);
      toast({
        title: "Success!",
        description: sendData.message,
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

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
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setTranscript("");
      setEmailData(null);
      setResult("");
      setCountdown(null);
      setIsEditing(false);
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
      }
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
        const { data: transcribeData, error: transcribeError } = await supabase.functions.invoke("transcribe-audio", {
          body: { audio: base64Audio },
        });

        if (transcribeError) {
          throw new Error(transcribeError.message);
        }

        const transcribedText = transcribeData.text;
        setTranscript(transcribedText);

        // Step 2: Extract email details
        const { data: processData, error: processError } = await supabase.functions.invoke("process-voice-command", {
          body: { command: transcribedText },
        });

        if (processError) {
          throw new Error(processError.message);
        }

        setEmailData(processData.emailData);
        startCountdown(processData.emailData);
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
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("demo.back")}
        </Button>

        <Card className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{t("demo.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("demo.description")}</p>
            <p className="text-sm text-muted-foreground">{t("demo.example")}</p>
          </div>

          <div className="flex justify-center py-8">
            {!isRecording && !isProcessing && (
              <Button variant="cta" size="xl" onClick={startRecording} className="gap-2">
                <Mic className="h-6 w-6" />
                {t("demo.startRecording")}
              </Button>
            )}

            {isRecording && (
              <Button variant="destructive" size="xl" onClick={stopRecording} className="gap-2 animate-pulse">
                <MicOff className="h-6 w-6" />
                {t("demo.stopRecording")}
              </Button>
            )}

            {isProcessing && (
              <Button variant="secondary" size="xl" disabled className="gap-2">
                <Loader2 className="h-6 w-6 animate-spin" />
                {t("demo.processing")}
              </Button>
            )}
          </div>

          {transcript && (
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Mic className="h-4 w-4" />
                {t("demo.transcript")}
              </h3>
              <Card className="p-4 bg-muted">
                <p className="text-sm">{transcript}</p>
              </Card>
            </div>
          )}

          {emailData && !result && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Message Preview
                </h3>
                {countdown !== null && !isEditing && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sending in {countdown}s</span>
                    <Button variant="outline" size="sm" onClick={cancelSend}>
                      <XCircle className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <Card className="p-4 bg-accent/10 border-accent space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-1 block">To:</label>
                      <Input
                        value={emailData.recipient}
                        onChange={(e) => setEmailData({ ...emailData, recipient: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Subject:</label>
                      <Input
                        value={emailData.subject}
                        onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message:</label>
                      <Textarea
                        value={emailData.body}
                        onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                        className="bg-background min-h-[120px]"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="cta"
                        onClick={() => {
                          setIsEditing(false);
                          sendEmail(emailData);
                        }}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Confirm & Send
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEmailData(null);
                          setIsEditing(false);
                        }}
                        disabled={isProcessing}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <strong>To:</strong> {emailData.recipient}
                      </p>
                      <p className="text-sm">
                        <strong>Subject:</strong> {emailData.subject}
                      </p>
                      <p className="text-sm">
                        <strong>Message:</strong>
                      </p>
                      <p className="text-sm whitespace-pre-wrap">{emailData.body}</p>
                    </div>
                    {countdown !== null && (
                      <Button variant="outline" size="sm" onClick={handleEdit}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </>
                )}
              </Card>
            </div>
          )}

          {result && (
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2 text-primary">
                <CheckCircle className="h-4 w-4" />
                {t("demo.result")}
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
              <h2 className="text-2xl md:text-3xl font-bold">Like What You Experienced?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This is just a glimpse of EdgeCrew's capabilities. Sign up for our pilot program to unlock the full
                suite of features and revolutionize your construction site management.
              </p>
              <Button variant="cta" size="xl" onClick={() => navigate("/#contact")} className="mt-4">
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
