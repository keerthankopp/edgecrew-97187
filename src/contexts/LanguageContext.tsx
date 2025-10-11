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
    'hero.title': 'Das Ende der',
    'hero.titleAccent': 'Protokoll-Pflicht',
    'hero.titleEnd': ': EdgeCrew protokolliert Ihre Bau-Anrufe automatisch',
    'hero.subtitle': 'Wir sparen Bauleitern 1 Stunde täglich. Ihre Anrufe werden transkribiert und als fertiges Protokoll per E-Mail versendet – sicher und 100% DSGVO-konform.',
    'hero.cta': 'Jetzt 1 Stunde täglich sparen: Pilotprojekt starten',
    'hero.trust1': '100% DSGVO-konform',
    'hero.trust2': 'Lokale Datenverarbeitung',
    'hero.trust3': 'Sofort einsatzbereit',
    
    // Problem Section
    'problem.title': 'Das',
    'problem.titleAccent': 'Problem',
    'problem.titleEnd': 'kennen Sie',
    'problem.subtitle': 'Jeder Anruf auf der Baustelle muss dokumentiert werden. Aber wer hat schon Zeit für manuelle Protokolle?',
    'problem.time.title': 'Zeit-Verschwendung',
    'problem.time.desc': '5 Minuten Protokollierung pro Anruf × 12 Anrufe täglich = 1 Stunde täglich verloren',
    'problem.error.title': 'Fehleranfälligkeit',
    'problem.error.desc': 'Manuelle Notizen führen zu vergessenen Details und Missverständnissen',
    'problem.inefficiency.title': 'Ineffizienz',
    'problem.inefficiency.desc': 'Bauleiter verbringen mehr Zeit mit Papierkram als auf der Baustelle',
    'problem.stats': '1 Stunde täglich = 250 Stunden pro Jahr verschwendet',
    
    // Solution Section
    'solution.badge': 'Voice First',
    'solution.title': 'So einfach geht\'s',
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
    'team.title': 'Team &',
    'team.titleAccent': 'Traction',
    'team.subtitle': 'Erfahrenes Team mit klarer Vision für die Zukunft der Bau-Kommunikation',
    'team.members.title': 'Unser Team',
    'team.traction.title': 'Aktueller Status',
    'team.status1': 'Prototyp fertiggestellt',
    'team.status2': 'Pilotprojekte in Akquise',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Testimonials
    'testimonials.title': 'Stimmen unserer Pilotpartner',
    'testimonials.subtitle': 'Erfahren Sie, wie EdgeCrew bereits Bauleitern Zeit spart',
    'testimonials.person1.name': 'Max Müller',
    'testimonials.person1.role': 'Bauleiter',
    'testimonials.person1.company': 'Bauunternehmen Dresden GmbH',
    'testimonials.person1.quote': 'EdgeCrew hat unsere Protokollierung revolutioniert. Wir sparen täglich über eine Stunde und haben endlich fehlerfreie Dokumentation.',
    'testimonials.person2.name': 'Sarah Schmidt',
    'testimonials.person2.role': 'Projektleiterin',
    'testimonials.person2.company': 'Ingenieurbüro Schmidt & Partner',
    'testimonials.person2.quote': 'Die automatische Transkription ist beeindruckend genau. Endlich können wir uns auf das Wesentliche konzentrieren.',
    'testimonials.person3.name': 'Thomas Weber',
    'testimonials.person3.role': 'Oberbauleiter',
    'testimonials.person3.company': 'Weber Bau AG',
    'testimonials.person3.quote': 'DSGVO-konform und effizient – genau das, was wir gesucht haben. Die Implementierung war unkompliziert.',
    'testimonials.person4.name': 'Julia Fischer',
    'testimonials.person4.role': 'Technische Leiterin',
    'testimonials.person4.company': 'Fischer Engineering',
    'testimonials.person4.quote': 'Die Zeitersparnis ist enorm. EdgeCrew ist ein Game-Changer für unsere tägliche Arbeit auf der Baustelle.',
    'testimonials.keyStat.number': '1 Stunde',
    'testimonials.keyStat.text': 'Täglich eingesparte Zeit pro Bauleiter',
    
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
    'hero.title': 'The End of',
    'hero.titleAccent': 'Manual Protocols',
    'hero.titleEnd': ': EdgeCrew automatically logs your construction calls',
    'hero.subtitle': 'We save construction managers 1 hour daily. Your calls are transcribed and sent as a finished protocol via email – secure and 100% GDPR compliant.',
    'hero.cta': 'Save 1 Hour Daily Now: Start Pilot Project',
    'hero.trust1': '100% GDPR Compliant',
    'hero.trust2': 'Local Data Processing',
    'hero.trust3': 'Ready to Use',
    
    // Problem Section
    'problem.title': 'You Know the',
    'problem.titleAccent': 'Problem',
    'problem.titleEnd': '',
    'problem.subtitle': 'Every call on the construction site must be documented. But who has time for manual protocols?',
    'problem.time.title': 'Time Waste',
    'problem.time.desc': '5 minutes logging per call × 12 calls daily = 1 hour lost daily',
    'problem.error.title': 'Error-Prone',
    'problem.error.desc': 'Manual notes lead to forgotten details and misunderstandings',
    'problem.inefficiency.title': 'Inefficiency',
    'problem.inefficiency.desc': 'Construction managers spend more time on paperwork than on site',
    'problem.stats': '1 hour daily = 250 hours wasted per year',
    
    // Solution Section
    'solution.badge': 'Voice First',
    'solution.title': 'How It Works',
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
    'team.title': 'Team &',
    'team.titleAccent': 'Traction',
    'team.subtitle': 'Experienced team with a clear vision for the future of construction communication',
    'team.members.title': 'Our Team',
    'team.traction.title': 'Current Status',
    'team.status1': 'Prototype completed',
    'team.status2': 'Pilot projects in acquisition',
    'team.status3': 'YETI Dresden Pre-Incubator',
    
    // Testimonials
    'testimonials.title': 'Voices from Our Pilot Partners',
    'testimonials.subtitle': 'Discover how EdgeCrew is already saving time for construction managers',
    'testimonials.person1.name': 'Max Müller',
    'testimonials.person1.role': 'Construction Manager',
    'testimonials.person1.company': 'Bauunternehmen Dresden GmbH',
    'testimonials.person1.quote': 'EdgeCrew has revolutionized our documentation. We save over an hour daily and finally have error-free records.',
    'testimonials.person2.name': 'Sarah Schmidt',
    'testimonials.person2.role': 'Project Manager',
    'testimonials.person2.company': 'Schmidt & Partner Engineering',
    'testimonials.person2.quote': 'The automatic transcription is impressively accurate. Finally, we can focus on what really matters.',
    'testimonials.person3.name': 'Thomas Weber',
    'testimonials.person3.role': 'Senior Construction Manager',
    'testimonials.person3.company': 'Weber Bau AG',
    'testimonials.person3.quote': 'GDPR-compliant and efficient – exactly what we were looking for. Implementation was straightforward.',
    'testimonials.person4.name': 'Julia Fischer',
    'testimonials.person4.role': 'Technical Director',
    'testimonials.person4.company': 'Fischer Engineering',
    'testimonials.person4.quote': 'The time savings are enormous. EdgeCrew is a game-changer for our daily work on construction sites.',
    'testimonials.keyStat.number': '1 Hour',
    'testimonials.keyStat.text': 'Daily time saved per construction manager',
    
    // Voice First Section
    'voiceFirst.badge': 'Voice First',
    'voiceFirst.title': 'We Are',
    'voiceFirst.titleAccent': 'Voice-First',
    'voiceFirst.subtitle': 'On construction sites, you have no hands free for forms and notes. That\'s why we built EdgeCrew from the ground up as a voice-first solution – intuitive, fast, and perfect for the demanding construction environment.',
    'voiceFirst.handsfree.title': 'Hands Free for Work',
    'voiceFirst.handsfree.desc': 'Hard hat on, tools in hand – no distraction from paperwork. Just speak, done.',
    'voiceFirst.instant.title': 'Instantly Documented',
    'voiceFirst.instant.desc': 'No more wasted time. The protocol is created before you hang up the phone.',
    'voiceFirst.natural.title': 'As Natural as a Phone Call',
    'voiceFirst.natural.desc': 'You call as usual. EdgeCrew does the work in the background – no changes needed.',
    'voiceFirst.design.title': 'Intuitive Design Meets AI',
    'voiceFirst.design.desc': 'Our app shows you all conversations at a glance. Clear, modern, and optimized specifically for construction site work.',
    'voiceFirst.design.feature1': 'Clear overview of all calls and protocols',
    'voiceFirst.design.feature2': 'Instant access to all conversation details',
    'voiceFirst.design.feature3': 'Send directly via email to all participants',
    
    // Future Vision
    'future.badge': 'Roadmap',
    'future.title': 'Next Steps',
    'future.subtitle': 'EdgeCrew is continuously evolving. Our goal: Control complete construction communication via voice.',
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
