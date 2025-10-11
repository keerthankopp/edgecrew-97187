import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Edge<span className="text-primary">Crew</span>
            </h3>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('footer.contact')}</h4>
            <p className="text-muted-foreground">
              Dresden, Deutschland<br />
              info@edgecrew.de
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">{t('footer.imprint')}</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} EdgeCrew. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
