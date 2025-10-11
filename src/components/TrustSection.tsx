import { Shield, Server, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();
  
  const trustPoints = [
    {
      icon: Shield,
      titleKey: "trust.gdpr.title",
      descKey: "trust.gdpr.desc"
    },
    {
      icon: Server,
      titleKey: "trust.edge.title",
      descKey: "trust.edge.desc"
    },
    {
      icon: Lock,
      titleKey: "trust.encryption.title",
      descKey: "trust.encryption.desc"
    }
  ];

  return (
    <section className="py-20 px-4" id="trust">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">{t('trust.badge')}</span>
          </div>
          <h2 className="mb-4">
            {t('trust.title')} <span className="text-primary">{t('trust.titleAccent')}</span> {t('trust.titleEnd')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-smooth group"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                <point.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mb-4 text-foreground">{t(point.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(point.descKey)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
