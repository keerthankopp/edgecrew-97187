import { Users, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamTraction = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    { name: "Gründer 1", role: "CEO & Tech Lead" },
    { name: "Gründer 2", role: "CTO" },
    { name: "Gründer 3", role: "Business Development" },
    { name: "Gründer 4", role: "AI Engineer" },
    { name: "Gründer 5", role: "Sales & Marketing" }
  ];

  const tractionPoints = [
    { icon: Award, key: "team.status1" },
    { icon: TrendingUp, key: "team.status2" },
    { icon: Users, key: "team.status3" }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30" id="team">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            {t('team.title')} <span className="text-primary">{t('team.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Team Section */}
          <div>
            <h3 className="mb-8 text-foreground flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              {t('team.members.title')}
            </h3>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Traction Section */}
          <div>
            <h3 className="mb-8 text-foreground flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              {t('team.traction.title')}
            </h3>
            <div className="space-y-6">
              {tractionPoints.map((point, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-foreground font-medium">{t(point.key)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTraction;
