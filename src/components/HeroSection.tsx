import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/20 border-2 border-primary glow-accent">
              <Phone className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-foreground leading-tight">
            Das Ende der <span className="text-primary">Protokoll-Pflicht</span>: EdgeCrew protokolliert Ihre Bau-Anrufe automatisch
          </h1>

          {/* Sub-Headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir sparen Bauleitern 1 Stunde täglich. Ihre Anrufe werden transkribiert und als fertiges Protokoll per E-Mail versendet – sicher und 100% DSGVO-konform.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToContact}
              className="animate-pulse hover:animate-none"
            >
              Jetzt 1 Stunde täglich sparen: Pilotprojekt starten
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>100% DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Lokale Datenverarbeitung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Sofort einsatzbereit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
