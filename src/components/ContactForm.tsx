import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building2, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Vielen Dank!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });

    // Reset form
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Werden Sie unser <span className="text-primary">Pilotpartner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Speziell für Bauunternehmen in der Region Dresden
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Max Mustermann"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Firma *
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Bauunternehmen GmbH"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-Mail *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="max@bauunternehmen.de"
                className="bg-background/50 border-border focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Nachricht (optional)
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Erzählen Sie uns von Ihren Herausforderungen bei der Protokollierung..."
                className="bg-background/50 border-border focus:border-primary min-h-32"
                rows={5}
              />
            </div>

            <Button 
              type="submit" 
              variant="cta" 
              size="lg"
              className="w-full"
            >
              Pilotprojekt anfragen
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Wir antworten innerhalb von 24 Stunden. Keine Kosten, keine Verpflichtungen.
            </p>
          </form>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Oder kontaktieren Sie uns direkt:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-foreground">
            <a href="mailto:pilot@edgecrew.de" className="hover:text-primary transition-smooth">
              📧 pilot@edgecrew.de
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="tel:+493511234567" className="hover:text-primary transition-smooth">
              📞 +49 351 123 456 7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
