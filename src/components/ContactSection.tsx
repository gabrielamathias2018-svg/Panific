import { Clock, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { sanitizeWhatsappNumber, siteConfig } from '../config/siteConfig';
import { WhatsAppAction } from './WhatsAppAction';

interface ContactSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function ContactSection({ onOpenDemoModal }: ContactSectionProps) {
  const configuredDigits = sanitizeWhatsappNumber(siteConfig.whatsappNumber);
  const hasRealMap = siteConfig.contact.googleMapsEmbedUrl.trim().length > 0;
  const hasInstagramUrl = siteConfig.contact.instagramUrl.trim().length > 0;

  return (
    <section
      id="contato"
      className="border-b border-cream-200 bg-cream-100/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            Localização e Contato
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-coffee-900 sm:text-4xl text-balance">
            {siteConfig.contact.sectionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-coffee-700 sm:text-base">
            {siteConfig.contact.sectionSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Editable Business Info */}
          <div className="flex flex-col justify-between rounded-2xl border border-cream-200 bg-cream-50 p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-coffee-900">
                    Endereço
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-coffee-700">
                    {siteConfig.contact.addressLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-cream-200 pt-5">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-coffee-900">
                    Horários de funcionamento
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-coffee-700">
                    {siteConfig.contact.hoursLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-cream-200 pt-5">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-coffee-900">
                    Telefone e WhatsApp
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-coffee-700 tabular-nums">
                    {configuredDigits.length >= 10
                      ? `+${configuredDigits}`
                      : siteConfig.contact.phoneLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-cream-200 pt-5">
                <Instagram
                  className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-coffee-900">
                    Instagram
                  </h3>
                  {hasInstagramUrl ? (
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-terracotta-600 underline-offset-4 hover:underline"
                    >
                      {siteConfig.contact.instagramHandle}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-coffee-700">
                      {siteConfig.contact.instagramHandle}{' '}
                      <span className="text-coffee-500">
                        ({siteConfig.contact.instagramNote})
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-cream-200 pt-6">
              <WhatsAppAction
                message={siteConfig.messages.general}
                contextTitle="Contato via WhatsApp"
                onOpenDemoModal={onOpenDemoModal}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-terracotta-700 whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Conversar pelo WhatsApp
              </WhatsAppAction>
            </div>
          </div>

          {/* Configurable Google Maps Area */}
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 lg:col-span-7 lg:min-h-[440px]">
            {hasRealMap ? (
              <iframe
                title={`Mapa de localização — ${siteConfig.brand.name}`}
                src={siteConfig.contact.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full border-0 lg:min-h-[440px]"
              />
            ) : (
              <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200/70 p-8 text-center lg:min-h-[440px]">
                {/* Stylized subtle street grid SVG for clean demo map preview */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
                  viewBox="0 0 600 400"
                  fill="none"
                >
                  <path
                    d="M0 90 H600 M0 200 H600 M0 310 H600 M120 0 V400 M300 0 V400 M470 0 V400"
                    stroke="#C88A3B"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M60 400 L260 0 M340 400 L540 0"
                    stroke="#B55336"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                  />
                </svg>

                <div className="relative z-10 max-w-md rounded-2xl border border-cream-200 bg-cream-50/95 p-6 shadow-sm backdrop-blur-xs">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-600/10 text-terracotta-600">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-coffee-900">
                    Espaço para Mapa do Google Maps
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-coffee-700">
                    Área preparada para exibir a localização exata da panificadora. Basta colar o link de incorporação do Google Maps em{' '}
                    <code className="rounded bg-cream-100 px-1.5 py-0.5 font-mono text-xs text-coffee-900">
                      googleMapsEmbedUrl
                    </code>{' '}
                    no arquivo de configuração.
                  </p>

                  <p className="mt-3 text-xs font-medium text-coffee-500">
                    Endereço exibido atualmente: {siteConfig.contact.addressLabel}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
