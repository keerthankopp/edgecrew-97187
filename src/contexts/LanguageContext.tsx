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
    'hero.title': 'Edge-AI: Die Zukunft der Baudokumentation ist sprachgesteuert.',
    'hero.subtitle': 'Sparen Sie 3+ Stunden täglich. EdgeCrew ist der DSGVO-konforme, sprachgesteuerte KI-Assistent, der jedes Bau-Telefonat automatisch dokumentiert.',
    'hero.cta': 'Werden Sie Pilotpartner & Jetzt Zeit sparen',
    'hero.trust1': '100% DSGVO-konform',
    'hero.trust2': 'Lokale Datenverarbeitung',
    'hero.trust3': 'Sofort einsatzbereit',
    
    // Problem Section
    'problem.title': '47 Milliarden Euro verschwendet: Der verborgene Kostenfaktor auf dem Bau.',
    'problem.stat1': 'Verlust p.a. in der Bauindustrie',
    'problem.stat2': 'Stunden Zeitverlust pro Team/Tag für Dokumentation',
    'problem.stat3': 'der KMUs lehnen US-Clouds ab (DSGVO-Sorgen)',
    
    // Solution Section
    'solution.title': 'Aktueller Status: Wir liefern AI-gestützte Effizienz schon heute.',
    'solution.subtitle': 'Von Ihrem Anruf zum fertigen Protokoll – vollautomatisch in Sekunden',
    'solution.step1.title': 'Sprechen',
    'solution.step1.desc': 'Bauleiter telefoniert ganz normal über das EdgeCrew-System. Keine App, keine Umstellung.',
    'solution.step2.title': 'K.I. Protokoll',
    'solution.step2.desc': 'Unsere Edge-AI transkribiert und fasst automatisch zusammen: Aktionen, Entscheidungen, Teilnehmer.',
    'solution.step3.title': 'Versand',
    'solution.step3.desc': 'Fertiges, formatiertes Protokoll wird sofort per E-Mail an alle Teilnehmer versendet.',
    'solution.demo': '📧 Beispiel-Protokoll E-Mail',
    'solution.demoPlaceholder': '[Screenshot-Platzhalter: Formatiertes Protokoll in E-Mail-Ansicht]',
    
    // Trust Section
    'trust.badge': 'DSGVO & Datenschutz',
    'trust.title': '100%',
    'trust.titleAccent': 'DSGVO-konform',
    'trust.titleEnd': '– Made in Germany',
    'trust.subtitle': 'Ihre Daten bleiben in Deutschland. EdgeCrew nutzt Edge-Server vor Ort – keine US-Cloud, maximale Kontrolle.',
    'trust.gdpr.title': 'DSGVO-Compliance',
    'trust.gdpr.desc': 'Vollständige Einhaltung aller deutschen und europäischen Datenschutzrichtlinien.',
    'trust.edge.title': 'Edge-Server',
    'trust.edge.desc': 'Datenverarbeitung erfolgt lokal auf Ihren Servern – maximale Sicherheit und Kontrolle.',
    'trust.encryption.title': 'Ende-zu-Ende-Verschlüsselung',
    'trust.encryption.desc': 'Alle Gespräche und Protokolle sind durchgehend verschlüsselt.',
    
    // Team & Traction
    'team.title': 'Die perfekte End-to-End-Lösung: Geboren aus Bau-Expertise und KI-Technologie.',
    'team.members.title': 'Unser Team',
    'team.traction.title': 'Aktueller Status',
    'team.status1': 'Prototyp fertiggestellt',
    'team.status2': 'Pilotprojekte in Akquise',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Future Vision
    'future.badge': 'Coming Soon',
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
    'contact.titleEnd': 'in der Region Dresden',
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
    'footer.terms': 'AGB',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  en: {
    // Header
    'nav.function': 'Features',
    'nav.privacy': 'Privacy',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Edge-AI: The Future of Construction Documentation is Voice-Controlled.',
    'hero.subtitle': 'Save 3+ hours daily. EdgeCrew is the GDPR-compliant, voice-controlled AI assistant that automatically documents every construction call.',
    'hero.cta': 'Become a Pilot Partner & Save Time Now',
    'hero.trust1': '100% GDPR Compliant',
    'hero.trust2': 'Local Data Processing',
    'hero.trust3': 'Ready to Use',
    
    // Problem Section
    'problem.title': '47 Billion Euros Wasted: The Hidden Cost Factor in Construction.',
    'problem.stat1': 'Loss p.a. in the construction industry',
    'problem.stat2': 'Hours of time lost per team/day on documentation',
    'problem.stat3': 'of SMEs reject US clouds (GDPR concerns)',
    
    // Solution Section
    'solution.title': 'Current Status: We Deliver AI-Powered Efficiency Today.',
    'solution.subtitle': 'From your call to the finished protocol – fully automated in seconds',
    'solution.step1.title': 'Speak',
    'solution.step1.desc': 'Construction manager calls normally via the EdgeCrew system. No app, no changes.',
    'solution.step2.title': 'AI Protocol',
    'solution.step2.desc': 'Our Edge-AI transcribes and automatically summarizes: Actions, decisions, participants.',
    'solution.step3.title': 'Send',
    'solution.step3.desc': 'Finished, formatted protocol is immediately sent via email to all participants.',
    'solution.demo': '📧 Sample Protocol Email',
    'solution.demoPlaceholder': '[Screenshot Placeholder: Formatted Protocol in Email View]',
    
    // Trust Section
    'trust.badge': 'GDPR & Privacy',
    'trust.title': '100%',
    'trust.titleAccent': 'GDPR Compliant',
    'trust.titleEnd': '– Made in Germany',
    'trust.subtitle': 'Your data stays in Germany. EdgeCrew uses on-site edge servers – no US cloud, maximum control.',
    'trust.gdpr.title': 'GDPR Compliance',
    'trust.gdpr.desc': 'Full compliance with all German and European data protection regulations.',
    'trust.edge.title': 'Edge Servers',
    'trust.edge.desc': 'Data processing happens locally on your servers – maximum security and control.',
    'trust.encryption.title': 'End-to-End Encryption',
    'trust.encryption.desc': 'All conversations and protocols are fully encrypted.',
    
    // Team & Traction
    'team.title': 'The Perfect End-to-End Solution: Born from Construction Expertise and AI Technology.',
    'team.members.title': 'Our Team',
    'team.traction.title': 'Current Status',
    'team.status1': 'Prototype completed',
    'team.status2': 'Pilot projects in acquisition',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Future Vision
    'future.badge': 'Coming Soon',
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
    'contact.titleEnd': 'in the Dresden Region',
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
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',
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
