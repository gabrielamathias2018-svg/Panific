import { ReactNode } from 'react';
import { buildWhatsappUrl, sanitizeWhatsappNumber, siteConfig } from '../config/siteConfig';

interface WhatsAppActionProps {
  message: string;
  contextTitle: string;
  onOpenDemoModal: (message: string, contextTitle: string) => void;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function WhatsAppAction({
  message,
  contextTitle,
  onOpenDemoModal,
  className = '',
  children,
  ariaLabel,
}: WhatsAppActionProps) {
  const configuredDigits = sanitizeWhatsappNumber(siteConfig.whatsappNumber);

  if (configuredDigits.length >= 10) {
    return (
      <a
        href={buildWhatsappUrl(configuredDigits, message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpenDemoModal(message, contextTitle)}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
