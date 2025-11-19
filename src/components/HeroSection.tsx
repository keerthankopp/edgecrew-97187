import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.2
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-foreground leading-tight">
            {t('hero.title')}
          </h1>

          {/* Sub-Headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => navigate('/demo')}
              className="animate-pulse hover:animate-none md:text-lg md:px-8 md:py-6 whitespace-normal md:whitespace-nowrap my-0 py-[32px]"
            >
              {t('hero.tryNow')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="md:text-lg md:px-8 md:py-6 whitespace-normal md:whitespace-nowrap my-0 py-[32px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{t('hero.trust1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{t('hero.trust2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{t('hero.trust3')}</span>
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
    </section>;
};
export default HeroSection;