import { Globe, Mic, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FutureVision = () => {
  const { t } = useLanguage();
  
  const futureFeatures = [
    {
      icon: Globe,
      titleKey: "future.translation.title",
      descKey: "future.translation.desc"
    },
    {
      icon: Mic,
      titleKey: "future.voice.title",
      descKey: "future.voice.desc"
    },
    {
      icon: Database,
      titleKey: "future.search.title",
      descKey: "future.search.desc"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30" id="future">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">{t('future.badge')}</span>
          </div>
          <h2 className="mb-4">
            {t('future.title')} <span className="text-primary">{t('future.titleAccent')}</span> {t('future.titleEnd')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('future.subtitle')}
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
                {t('future.roadmap')}
              </div>

              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mb-4 text-foreground">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t('future.feedback')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
