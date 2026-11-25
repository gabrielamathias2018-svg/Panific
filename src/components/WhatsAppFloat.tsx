import { MessageCircle } from 'lucide-react';
import { buildWhatsappUrl, sanitizeWhatsappNumber, siteConfig } from '../config/siteConfig';

interface WhatsAppFloatProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function WhatsAppFloat({ onOpenDemoModal }: WhatsAppFloatProps) {
  const configuredDigits = sanitizeWhatsappNumber(siteConfig.whatsappNumber);
  const defaultMessage = siteConfig.messages.general;

  if (configuredDigits.length >= 10) {
    return (
      <a
        href={buildWhatsappUrl(configuredDigits, defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Pão & Prosa pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-13 items-center gap-2.5 rounded-full bg-terracotta-600 px-5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-terracotta-700 focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpenDemoModal(defaultMessage, 'Falar pelo WhatsApp')}
      aria-label="Falar com a Pão & Prosa pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-13 items-center gap-2.5 rounded-full bg-terracotta-600 px-4.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-terracotta-700 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">Fale pelo WhatsApp</span>
    </button>
  );
}
