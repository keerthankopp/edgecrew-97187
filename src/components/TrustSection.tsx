import { Shield, Server, Lock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% DSGVO-konform",
      description: "Alle Daten bleiben in Deutschland. Keine US-Cloud, keine Datenschutz-Risiken."
    },
    {
      icon: Server,
      title: "Lokale Edge-Server",
      description: "Ihre Daten werden lokal auf deutschen Servern verarbeitet und gespeichert."
    },
    {
      icon: Lock,
      title: "Ende-zu-Ende verschlüsselt",
      description: "Ihre Gespräche sind während der Übertragung und Speicherung vollständig verschlüsselt."
    },
    {
      icon: CheckCircle,
      title: "Keine Drittanbieter",
      description: "Ihre Daten werden nicht an Dritte weitergegeben oder für Training verwendet."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-primary">Vertrauen</span> & Datenschutz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ihre sensiblen Baudaten verdienen höchsten Schutz. Mit EdgeCrew behalten Sie die volle Kontrolle – ohne Kompromisse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="p-8 rounded-xl bg-primary/5 border-2 border-primary/30 shadow-glow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Made in Germany – Hosted in Germany
                </h3>
                <p className="text-muted-foreground">
                  Keine Angst vor US-Clouds: Ihre Daten bleiben in Deutschland
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 rounded-lg gradient-accent font-bold text-accent-foreground">
                🇩🇪 DSGVO-zertifiziert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
