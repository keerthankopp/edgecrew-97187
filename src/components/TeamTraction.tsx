import { Users, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamTraction = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    { name: "Aboud Mouakket", role: "CEO, Strategie & Vision", linkedin: "#" },
    { name: "Julio Bernal", role: "Sales & Bau-Expertise", linkedin: "#" },
    { name: "Malte Karitzky", role: "Produkt & Hardware", linkedin: "#" },
    { name: "Hannes Szeski", role: "Software & Marketing", linkedin: "#" },
    { name: "Keerthan K. Radhakrishna", role: "Backend & AI Development", linkedin: "#" }
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
          <h2 className="mb-4 text-foreground">
            {t('team.title')}
          </h2>
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
                <a
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card 
                    className="p-4 bg-card border-border hover:border-primary/50 transition-smooth cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold group-hover:bg-primary/30 transition-smooth">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-smooth">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <Users className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </div>
                  </Card>
                </a>
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
