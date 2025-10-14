import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Header
    'nav.function': 'Funktion',
    'nav.privacy': 'Datenschutz',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'EdgeCrew ist der sprachgesteuerte KI-Assistent, der Echtzeit-Klarheit auf Baustellen bringt.',
    'hero.subtitle': 'Sparen Sie 3+ Stunden täglich. EdgeCrew ist der DSGVO-konforme, sprachgesteuerte KI-Assistent, der jedes Bau-Telefonat automatisch dokumentiert.',
    'hero.cta': 'Werden Sie Pilotpartner & Jetzt Zeit sparen',
    'hero.trust1': '100% DSGVO-konform',
    'hero.trust2': 'Lokale Datenverarbeitung',
    'hero.trust3': 'Sofort einsatzbereit',
    
    // Problem Section
    'problem.title': '47 Milliarden Euro verschwendet: Der verborgene Kostenfaktor auf dem Bau.',
    'problem.stat1': 'Verlust pro Jahr in der deutschen Bauindustrie',
    'problem.stat2': 'Stunden Zeitverlust pro Team/Tag für Dokumentation',
    'problem.stat3': 'weniger als 30% der Unternehmen im Baugewerbe nutzen moderne Cloudlösungen',
    
    // Solution Section
    'solution.title': 'Aktueller Status: Wir liefern AI-gestützte Effizienz schon heute.',
    'solution.subtitle': 'Von Ihrem Anruf zum fertigen Protokoll – vollautomatisch in Sekunden',
    'solution.step1.title': 'Mündlich erfassen',
    'solution.step1.desc': 'Bauleiter telefoniert ganz normal über das EdgeCrew-System. Keine App, keine Umstellung.',
    'solution.step2.title': 'KI identifiziert',
    'solution.step2.desc': 'Die KI filtert Kerninhalte, ordnet sie zu (Wer macht Was bis Wann?) und erstellt eine strukturierte Basis.',
    'solution.step3.title': 'Automatischer Versand',
    'solution.step3.desc': 'Das System formatiert, benennt und sendet das Dokument blitzschnell an den Verteiler.',
    'solution.demo': '📧 Beispiel-Protokoll E-Mail',
    'solution.demoPlaceholder': '[Screenshot-Platzhalter: Formatiertes Protokoll in E-Mail-Ansicht]',
    
    // Trust Section
    'trust.badge': 'DSGVO & Datenschutz',
    'trust.title': '100%',
    'trust.titleAccent': 'DSGVO-konform',
    'trust.titleEnd': '– Made in Germany',
    'trust.subtitle': 'Ihre Daten bleiben in Deutschland – keine US-Cloud, maximale Kontrolle.',
    'trust.gdpr.title': 'DSGVO-Compliance',
    'trust.gdpr.desc': 'Vollständige Einhaltung aller deutschen und europäischen Datenschutzrichtlinien.',
    'trust.edge.title': 'Keine US-Cloud',
    'trust.edge.desc': 'Ihre Daten bleiben in Deutschland und unterliegen ausschließlich deutscher Rechtsprechung.',
    'trust.encryption.title': 'Ende-zu-Ende-Verschlüsselung',
    'trust.encryption.desc': 'Alle Gespräche und Protokolle sind durchgehend verschlüsselt.',
    
    // Team & Traction
    'team.title': 'Die perfekte End-to-End-Lösung: Geboren aus Bau-Expertise und KI-Technologie.',
    'team.members.title': 'Unser Team',
    'team.traction.title': 'Aktueller Status',
    'team.status1': 'MVP entwickelt',
    'team.status2': 'Pilotprojekte in Akquise',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Future Vision
    'future.badge': 'Vision',
    'future.title': 'Die',
    'future.titleAccent': 'Zukunft',
    'future.titleEnd': 'ist Voice-First',
    'future.subtitle': 'EdgeCrew entwickelt sich stetig weiter. Unser Ziel: Die komplette Bau-Kommunikation per Sprache steuern.',
    'future.translation.title': 'Live-Übersetzung',
    'future.translation.desc': 'Internationale Bauprojekte? Kein Problem. Echtzeit-Übersetzung für mehrsprachige Teams.',
    'future.voice.title': 'Voice-Interface',
    'future.voice.desc': 'Datenabfragen per Sprache: "Wann war das letzte Gespräch mit Architekt Meyer?"',
    'future.search.title': 'Intelligente Suche',
    'future.search.desc': 'Durchsuchen Sie alle Ihre Protokolle nach Stichworten, Personen oder Projekten.',
    'future.roadmap': 'Roadmap',
    'future.feedback': 'Haben Sie Feature-Wünsche? Als Pilotpartner gestalten Sie die Zukunft von EdgeCrew mit.',
    
    // Contact Form
    'contact.title': 'Werden Sie unser',
    'contact.titleAccent': 'Pilotpartner',
    'contact.titleEnd': 'in Sachsen',
    'contact.subtitle': 'Starten Sie jetzt Ihr Pilotprojekt und sparen Sie ab sofort 1 Stunde täglich. Kein Risiko, keine Verpflichtung.',
    'contact.name': 'Ihr Name',
    'contact.company': 'Firma',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.submit': 'Pilotprojekt anfragen',
    'contact.success': 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    
    // Footer
    'footer.tagline': 'Voice-First Kommunikation für die Baubranche',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Impressum
    'impressum.title': 'Impressum',
    'impressum.company': 'Angaben gemäß § 5 TMG',
    'impressum.represented': 'Vertreten durch',
    'impressum.register': 'Registereintrag',
    'impressum.responsible': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    'impressum.responsibleContent': 'EdgeCrew GmbH, Dresden',
    'impressum.dispute': 'Streitschlichtung',
    'impressum.disputeContent': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    'impressum.backToHome': '← Zurück zur Startseite',
    
    // Privacy
    'privacy.title': 'Datenschutzerklärung',
    'privacy.overview': 'Allgemeine Hinweise',
    'privacy.overviewContent': 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
    'privacy.dataCollection': 'Datenerfassung auf dieser Website',
    'privacy.contactForm': 'Kontaktformular',
    'privacy.contactFormContent': 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
    'privacy.cookies': 'Cookies',
    'privacy.cookiesContent': 'Diese Website verwendet keine Cookies für Tracking oder Werbezwecke.',
    'privacy.rights': 'Ihre Rechte',
    'privacy.rightsContent': 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.',
    'privacy.contact': 'Kontakt',
    'privacy.backToHome': '← Zurück zur Startseite',
  },
  en: {
    // Header
    'nav.function': 'Features',
    'nav.privacy': 'Privacy',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'EdgeCrew is the voice-first AI assistant that brings real-time clarity to construction sites.',
    'hero.subtitle': 'Save 3+ hours daily. EdgeCrew is the GDPR-compliant, voice-controlled AI assistant that automatically documents every construction call.',
    'hero.cta': 'Become a Pilot Partner & Save Time Now',
    'hero.trust1': '100% GDPR Compliant',
    'hero.trust2': 'Local Data Processing',
    'hero.trust3': 'Ready to Use',
    
    // Problem Section
    'problem.title': '47 Billion Euros Wasted: The Hidden Cost Factor in Construction.',
    'problem.stat1': 'Loss per year in the German construction industry',
    'problem.stat2': 'Hours of time lost per team/day on documentation',
    'problem.stat3': 'less than 30% of construction companies use modern cloud solutions',
    
    // Solution Section
    'solution.title': 'Current Status: We Deliver AI-Powered Efficiency Today.',
    'solution.subtitle': 'From your call to the finished protocol – fully automated in seconds',
    'solution.step1.title': 'Record Verbally',
    'solution.step1.desc': 'Construction manager calls normally via the EdgeCrew system. No app, no changes.',
    'solution.step2.title': 'AI Identifies',
    'solution.step2.desc': 'AI filters key content, organizes it (Who does What by When?) and creates a structured foundation.',
    'solution.step3.title': 'Automatic Dispatch',
    'solution.step3.desc': 'The system formats, names and sends the document instantly to the distribution list.',
    'solution.demo': '📧 Sample Protocol Email',
    'solution.demoPlaceholder': '[Screenshot Placeholder: Formatted Protocol in Email View]',
    
    // Trust Section
    'trust.badge': 'GDPR & Privacy',
    'trust.title': '100%',
    'trust.titleAccent': 'GDPR Compliant',
    'trust.titleEnd': '– Made in Germany',
    'trust.subtitle': 'Your data stays in Germany – no US cloud, maximum control.',
    'trust.gdpr.title': 'GDPR Compliance',
    'trust.gdpr.desc': 'Full compliance with all German and European data protection regulations.',
    'trust.edge.title': 'No US Cloud',
    'trust.edge.desc': 'Your data stays in Germany and is subject exclusively to German jurisdiction.',
    'trust.encryption.title': 'End-to-End Encryption',
    'trust.encryption.desc': 'All conversations and protocols are fully encrypted.',
    
    // Team & Traction
    'team.title': 'The Perfect End-to-End Solution: Born from Construction Expertise and AI Technology.',
    'team.members.title': 'Our Team',
    'team.traction.title': 'Current Status',
    'team.status1': 'MVP developed',
    'team.status2': 'Pilot projects in acquisition',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Future Vision
    'future.badge': 'Vision',
    'future.title': 'The',
    'future.titleAccent': 'Future',
    'future.titleEnd': 'is Voice-First',
    'future.subtitle': 'EdgeCrew is constantly evolving. Our goal: Control complete construction communication via voice.',
    'future.translation.title': 'Live Translation',
    'future.translation.desc': 'International construction projects? No problem. Real-time translation for multilingual teams.',
    'future.voice.title': 'Voice Interface',
    'future.voice.desc': 'Query data by voice: "When was the last conversation with Architect Meyer?"',
    'future.search.title': 'Intelligent Search',
    'future.search.desc': 'Search all your protocols by keywords, people, or projects.',
    'future.roadmap': 'Roadmap',
    'future.feedback': 'Have feature requests? As a pilot partner, you shape the future of EdgeCrew.',
    
    // Contact Form
    'contact.title': 'Become Our',
    'contact.titleAccent': 'Pilot Partner',
    'contact.titleEnd': 'in Saxony',
    'contact.subtitle': 'Start your pilot project now and save 1 hour daily immediately. No risk, no obligation.',
    'contact.name': 'Your Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Request Pilot Project',
    'contact.success': 'Thank you! We will contact you within 24 hours.',
    
    // Footer
    'footer.tagline': 'Voice-First Communication for the Construction Industry',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.imprint': 'Imprint',
    'footer.rights': 'All rights reserved.',
    
    // Impressum
    'impressum.title': 'Legal Notice',
    'impressum.company': 'Information according to § 5 TMG',
    'impressum.represented': 'Represented by',
    'impressum.register': 'Register Entry',
    'impressum.responsible': 'Responsible for content according to § 55 Abs. 2 RStV',
    'impressum.responsibleContent': 'EdgeCrew GmbH, Dresden',
    'impressum.dispute': 'Dispute Resolution',
    'impressum.disputeContent': 'The European Commission provides a platform for online dispute resolution (OS). We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    'impressum.backToHome': '← Back to Home',
    
    // Privacy
    'privacy.title': 'Privacy Policy',
    'privacy.overview': 'General Information',
    'privacy.overviewContent': 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.',
    'privacy.dataCollection': 'Data Collection on This Website',
    'privacy.contactForm': 'Contact Form',
    'privacy.contactFormContent': 'If you send us inquiries via the contact form, your data from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.',
    'privacy.cookies': 'Cookies',
    'privacy.cookiesContent': 'This website does not use cookies for tracking or advertising purposes.',
    'privacy.rights': 'Your Rights',
    'privacy.rightsContent': 'You have the right at any time to receive free information about your stored personal data, its origin and recipients, and the purpose of data processing, as well as the right to correct or delete this data.',
    'privacy.contact': 'Contact',
    'privacy.backToHome': '← Back to Home',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
