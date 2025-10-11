const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 gradient-accent bg-clip-text text-transparent">
              EdgeCrew
            </h3>
            <p className="text-muted-foreground text-sm">
              Voice-First-Protokollierung für die Baubranche
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 pilot@edgecrew.de</p>
              <p>📞 +49 351 123 456 7</p>
              <p>📍 Dresden, Deutschland</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Unternehmen</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🏢 YETI Dresden Pre-Incubator</p>
              <p>🇩🇪 Made & Hosted in Germany</p>
              <p>🔒 100% DSGVO-konform</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 EdgeCrew. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-smooth">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-smooth">Datenschutz</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-smooth">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
