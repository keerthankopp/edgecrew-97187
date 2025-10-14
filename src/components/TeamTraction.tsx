import { Users, TrendingUp, Award, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import aboudImage from "@/assets/aboud.jpeg";
import julioImage from "@/assets/julio.jpeg";
import malteImage from "@/assets/malte.jpeg";
import hannesImage from "@/assets/hannes.jpeg";
import keerthanImage from "@/assets/keerthan.jpeg";

const TeamTraction = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    { name: "Aboud Mouakket", role: "CEO, Strategie & Vision", linkedin: "https://www.linkedin.com/in/aboudmouakket/", image: aboudImage },
    { name: "Julio Bernal", role: "Sales & Bau-Expertise", linkedin: "https://www.linkedin.com/in/julio-bernal-078722218/", image: julioImage },
    { name: "Malte Karitzky", role: "Produkt & Hardware", linkedin: "https://www.linkedin.com/in/karitzky/", image: malteImage },
    { name: "Hannes Szeski", role: "Software & Marketing", linkedin: "https://www.linkedin.com/in/hannes-szeski-a35aa0276/", image: hannesImage },
    { name: "Keerthan K. Radhakrishna", role: "Backend & AI Development", linkedin: "https://www.linkedin.com/in/keerthankopparam/", image: keerthanImage }
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
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-smooth"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-smooth">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
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
