
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      value: "3+",
      labelKey: "problem.stat2"
    },
    {
      value: "< 30%",
      labelKey: "problem.stat3"
    },
    {
      value: "47 Mrd. €",
      labelKey: "problem.stat1"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30" id="problem">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">
            {t('problem.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth group hover:shadow-glow text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-smooth">
                {stat.value}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(stat.labelKey)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
