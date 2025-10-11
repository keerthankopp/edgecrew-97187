import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      nameKey: "testimonials.person1.name",
      roleKey: "testimonials.person1.role",
      companyKey: "testimonials.person1.company",
      quoteKey: "testimonials.person1.quote",
      rating: 5
    },
    {
      nameKey: "testimonials.person2.name",
      roleKey: "testimonials.person2.role",
      companyKey: "testimonials.person2.company",
      quoteKey: "testimonials.person2.quote",
      rating: 5
    },
    {
      nameKey: "testimonials.person3.name",
      roleKey: "testimonials.person3.role",
      companyKey: "testimonials.person3.company",
      quoteKey: "testimonials.person3.quote",
      rating: 5
    },
    {
      nameKey: "testimonials.person4.name",
      roleKey: "testimonials.person4.role",
      companyKey: "testimonials.person4.company",
      quoteKey: "testimonials.person4.quote",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="testimonials">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-glow transition-smooth flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 flex-grow leading-relaxed">
                "{t(testimonial.quoteKey)}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t(testimonial.nameKey)}</p>
                <p className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</p>
                <p className="text-sm text-muted-foreground">{t(testimonial.companyKey)}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Stat Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-6 rounded-xl bg-primary/5 border-2 border-primary/20">
            <p className="text-4xl font-bold text-primary mb-2">
              {t('testimonials.keyStat.number')}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t('testimonials.keyStat.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
