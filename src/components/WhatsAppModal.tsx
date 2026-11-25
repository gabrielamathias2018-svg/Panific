import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, X } from 'lucide-react';
import { buildWhatsappUrl, sanitizeWhatsappNumber, siteConfig } from '../config/siteConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  message: string;
  contextTitle?: string;
  onClose: () => void;
}

export function WhatsAppModal({
  isOpen,
  message,
  contextTitle = 'Atendimento via WhatsApp',
  onClose,
}: WhatsAppModalProps) {
  const [copied, setCopied] = useState(false);
  const [testPhone, setTestPhone] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setCopied(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanTestDigits = sanitizeWhatsappNumber(testPhone);
  const hasValidTestDigits = cleanTestDigits.length >= 10;
  const previewUrl = hasValidTestDigits
    ? buildWhatsappUrl(cleanTestDigits, message)
    : undefined;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-coffee-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de WhatsApp"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-coffee-700 transition-colors hover:bg-cream-100 hover:text-coffee-900"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-600">
            {siteConfig.brand.name} · Modo Demonstrativo
          </p>
          <h3
            id="whatsapp-modal-title"
            className="mt-1.5 font-display text-2xl font-semibold text-coffee-900"
          >
            {contextTitle}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-coffee-700">
          Este minisite está em modo de demonstração comercial sem número real vinculado. Para ativar o direcionamento automático em produção, informe o WhatsApp oficial na variável{' '}
          <code className="rounded bg-cream-100 px-1.5 py-0.5 font-mono text-xs text-coffee-900">
            whatsappNumber
          </code>{' '}
          em{' '}
          <code className="rounded bg-cream-100 px-1.5 py-0.5 font-mono text-xs text-coffee-900">
            src/config/siteConfig.ts
          </code>
          .
        </p>

        <div className="mt-5 rounded-xl border border-cream-200 bg-cream-100/70 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-coffee-700">
              Mensagem automática preparada
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium text-coffee-900 transition-colors hover:bg-cream-200/70 whitespace-nowrap shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-terracotta-600" />
                  Copiada
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copiar mensagem
                </>
              )}
            </button>
          </div>
          <p className="mt-2 text-sm font-medium leading-relaxed text-coffee-900">
            “{message}”
          </p>
        </div>

        <div className="mt-5 border-t border-cream-200 pt-5">
          <label
            htmlFor="demo-whatsapp-input"
            className="block text-xs font-semibold uppercase tracking-wider text-coffee-700"
          >
            Testar envio agora (opcional para apresentação)
          </label>
          <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
            <input
              id="demo-whatsapp-input"
              type="tel"
              inputMode="numeric"
              value={testPhone}
              onChange={(e) => setTestPhone(e.target.value)}
              placeholder="Ex.: 5511999999999 (DDI + DDD + número)"
              className="min-h-[44px] flex-1 rounded-xl border border-cream-200 bg-white px-3.5 py-2 text-sm text-coffee-900 placeholder:text-coffee-500/70 focus:border-terracotta-600 focus:outline-none"
            />
            {previewUrl ? (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                Abrir WhatsApp
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-cream-200 bg-cream-100 px-4 py-2.5 text-xs font-medium text-coffee-500 whitespace-nowrap shrink-0">
                Digite um número válido
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
