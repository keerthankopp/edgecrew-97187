import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-8">{t('privacy.title')}</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.overview')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.overviewContent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataCollection')}</h2>
            <h3 className="text-xl font-semibold mb-3 mt-4">{t('privacy.contactForm')}</h3>
            <p className="text-muted-foreground">
              {t('privacy.contactFormContent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.cookies')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.cookiesContent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.rights')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.rightsContent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact')}</h2>
            <p className="text-muted-foreground">
              EdgeCrew GmbH<br />
              Dresden, Deutschland<br />
              E-Mail: info@edgecrew.de
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">
            {t('privacy.backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
