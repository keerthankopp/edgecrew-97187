import { Clock, FileStack, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Zeit-Verschwendung",
      description: "5 Minuten Protokollierung pro Anruf × 12 Anrufe täglich = 1 Stunde täglich verloren"
    },
    {
      icon: FileStack,
      title: "Fehleranfälligkeit",
      description: "Manuelle Notizen führen zu vergessenen Details und Missverständnissen"
    },
    {
      icon: TrendingDown,
      title: "Ineffizienz",
      description: "Bauleiter verbringen mehr Zeit mit Papierkram als auf der Baustelle"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Das <span className="text-primary">Problem</span> kennen Sie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jeder Anruf auf der Baustelle muss dokumentiert werden. Aber wer hat schon Zeit für manuelle Protokolle?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth group hover:shadow-glow"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-4 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-lg bg-destructive/10 border border-destructive/30">
            <p className="text-2xl font-bold text-destructive">
              1 Stunde täglich = 250 Stunden pro Jahr verschwendet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
