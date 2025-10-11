import { Globe, Mic, Database, Phone, HardHat, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import appScreenshot from "@/assets/app-screenshot-calls.png";

const FutureVision = () => {
  const { t } = useLanguage();
  
  const voiceFirstBenefits = [
    {
      icon: HardHat,
      titleKey: "voiceFirst.handsfree.title",
      descKey: "voiceFirst.handsfree.desc"
    },
    {
      icon: Zap,
      titleKey: "voiceFirst.instant.title",
      descKey: "voiceFirst.instant.desc"
    },
    {
      icon: Phone,
      titleKey: "voiceFirst.natural.title",
      descKey: "voiceFirst.natural.desc"
    }
  ];

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
        {/* Voice First Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">{t('voiceFirst.badge')}</span>
          </div>
          <h2 className="mb-6">
            {t('voiceFirst.title')} <span className="text-primary">{t('voiceFirst.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('voiceFirst.subtitle')}
          </p>
        </div>

        {/* Voice First Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {voiceFirstBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-border">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">{t(benefit.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(benefit.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App Screenshot & Design Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('voiceFirst.design.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('voiceFirst.design.desc')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{t('voiceFirst.design.feature1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{t('voiceFirst.design.feature2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{t('voiceFirst.design.feature3')}</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative max-w-xs">
              <img 
                src={appScreenshot} 
                alt="EdgeCrew Mobile App - Voice-First Interface" 
                className="rounded-2xl shadow-2xl border-4 border-border"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('future.title')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('future.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {futureFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-smooth group relative"
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  {t('future.roadmap')}
                </div>

                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{t(feature.titleKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
