import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-8">{t('impressum.title')}</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('impressum.company')}</h2>
            <p className="text-muted-foreground">
              EdgeCrew GmbH<br />
              Dresden, Deutschland<br />
              E-Mail: info@edgecrew.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('impressum.represented')}</h2>
            <p className="text-muted-foreground">
              Geschäftsführer
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('impressum.register')}</h2>
            <p className="text-muted-foreground">
              Handelsregister: [Registernummer]<br />
              Registergericht: [Ort]<br />
              USt-IdNr.: [Umsatzsteuer-ID]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('impressum.responsible')}</h2>
            <p className="text-muted-foreground">
              {t('impressum.responsibleContent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('impressum.dispute')}</h2>
            <p className="text-muted-foreground">
              {t('impressum.disputeContent')}
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">
            {t('impressum.backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
