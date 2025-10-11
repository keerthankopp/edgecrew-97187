import { Phone, Bot, Send, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const SolutionFlow = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Sprechen",
      description: "Bauleiter telefoniert ganz normal über das EdgeCrew-System. Keine App, keine Umstellung."
    },
    {
      icon: Bot,
      number: "02",
      title: "K.I. Protokoll",
      description: "Unsere Edge-AI transkribiert und fasst automatisch zusammen: Aktionen, Entscheidungen, Teilnehmer."
    },
    {
      icon: Send,
      number: "03",
      title: "Versand",
      description: "Fertiges, formatiertes Protokoll wird sofort per E-Mail an alle Teilnehmer versendet."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">Voice First</span>
          </div>
          <h2 className="mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von Ihrem Anruf zum fertigen Protokoll – vollautomatisch in Sekunden
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-smooth group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-accent flex items-center justify-center font-bold text-accent-foreground shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth group-hover:scale-110">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Screenshot Placeholder */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/30 border-2 border-dashed border-primary/30">
          <div className="text-center text-muted-foreground">
            <p className="text-lg mb-2">📧 Beispiel-Protokoll E-Mail</p>
            <p className="text-sm">[Screenshot-Platzhalter: Formatiertes Protokoll in E-Mail-Ansicht]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFlow;
