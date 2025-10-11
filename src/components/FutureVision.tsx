import { Globe, Mic, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const FutureVision = () => {
  const futureFeatures = [
    {
      icon: Globe,
      title: "Live-Übersetzung",
      description: "Internationale Bauprojekte? Kein Problem. Echtzeit-Übersetzung für mehrsprachige Teams."
    },
    {
      icon: Mic,
      title: "Voice-Interface",
      description: "Datenabfragen per Sprache: 'Wann war das letzte Gespräch mit Architekt Meyer?'"
    },
    {
      icon: Database,
      title: "Intelligente Suche",
      description: "Durchsuchen Sie alle Ihre Protokolle nach Stichworten, Personen oder Projekten."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">Coming Soon</span>
          </div>
          <h2 className="mb-4">
            Die <span className="text-primary">Zukunft</span> ist Voice-First
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EdgeCrew entwickelt sich stetig weiter. Unser Ziel: Die komplette Bau-Kommunikation per Sprache steuern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {futureFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth group relative overflow-hidden"
            >
              {/* Future Label */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                Roadmap
              </div>

              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Haben Sie Feature-Wünsche? Als Pilotpartner gestalten Sie die Zukunft von EdgeCrew mit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
