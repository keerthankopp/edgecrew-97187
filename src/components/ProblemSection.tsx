import { Clock, FileStack, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    {
      icon: Clock,
      titleKey: "problem.time.title",
      descKey: "problem.time.desc"
    },
    {
      icon: FileStack,
      titleKey: "problem.error.title",
      descKey: "problem.error.desc"
    },
    {
      icon: TrendingDown,
      titleKey: "problem.inefficiency.title",
      descKey: "problem.inefficiency.desc"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30" id="problem">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            {t('problem.title')} <span className="text-primary">{t('problem.titleAccent')}</span> {t('problem.titleEnd')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('problem.subtitle')}
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
              <h3 className="mb-4 text-foreground">{t(problem.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(problem.descKey)}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-lg bg-destructive/10 border border-destructive/30">
            <p className="text-2xl font-bold text-destructive">
              {t('problem.stats')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
