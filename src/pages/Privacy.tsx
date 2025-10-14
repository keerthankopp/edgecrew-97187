import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-8">Impressum</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground">
              Stiftung Thomas Kirchner Bildungsförderungs gGmbH<br />
              Zennerstr. 1<br />
              c/o Thomas Kirchner<br />
              81379 München
            </p>
            <p className="text-muted-foreground mt-4">
              Handelsregister: HRB 281372<br />
              Registergericht: Amtsgericht 80333 München
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
            <p className="text-muted-foreground">
              Thomas Kirchner
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-muted-foreground">
              Telefon: 0351 79606878<br />
              E-Mail: info@yeti-dresden.org
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p className="text-muted-foreground">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
