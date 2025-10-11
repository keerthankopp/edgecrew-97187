import { Users, Rocket, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const TeamTraction = () => {
  const teamMembers = [
    { name: "Team Member 1", role: "CEO & Founder" },
    { name: "Team Member 2", role: "CTO" },
    { name: "Team Member 3", role: "Lead AI Engineer" },
    { name: "Team Member 4", role: "Product Manager" },
    { name: "Team Member 5", role: "Business Development" }
  ];

  const achievements = [
    {
      icon: Rocket,
      title: "Prototyp fertiggestellt",
      description: "Vollständig funktionsfähige Voice-AI-Lösung entwickelt und getestet"
    },
    {
      icon: Users,
      title: "Pilotprojekte in Akquise",
      description: "Aktive Gespräche mit führenden Bauunternehmen in Dresden"
    },
    {
      icon: Award,
      title: "YETI Dresden Pre-Incubator",
      description: "Mitglied im renommierten Pre-Incubator-Programm"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Unser <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Erfahrene Experten aus KI, Software-Entwicklung und Baubranche
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth text-center group"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Traction Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Unsere <span className="text-primary">Traction</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Von der Idee zur Marktreife – wir sind bereit für Pilotpartner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth group"
              >
                <div className="mb-6 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth group-hover:scale-110 mx-auto">
                  <achievement.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="mb-4 text-foreground text-center">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center text-sm">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTraction;
