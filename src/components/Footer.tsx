import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppAction } from './WhatsAppAction';

interface FooterProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function Footer({ onOpenDemoModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Phrase */}
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight text-cream-50">
                {siteConfig.brand.name}
              </span>
              <span className="mt-0.5 block text-xs font-medium tracking-wide text-caramel-400">
                {siteConfig.brand.subtitle}
              </span>
            </a>

            <p className="mt-4 max-w-sm font-display text-base italic leading-relaxed text-cream-100/90">
              “{siteConfig.brand.tagline}”
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-100/70">
              Panificação artesanal, confeitaria afetiva, salgados dourados e cafés selecionados para o seu dia a dia.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-caramel-400">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream-100/80 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#encomendas"
                  className="text-cream-100/80 transition-colors hover:text-cream-50"
                >
                  Encomendas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-caramel-400">
              Atendimento e Endereço
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400" aria-hidden="true" />
                <span>{siteConfig.contact.addressLabel}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400" aria-hidden="true" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </li>
            </ul>

            <div className="mt-5">
              <WhatsAppAction
                message={siteConfig.messages.general}
                contextTitle="Fale com a Pão & Prosa"
                onOpenDemoModal={onOpenDemoModal}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-cream-100/20 bg-cream-50/5 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:border-caramel-400 hover:bg-cream-50/10 whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 text-caramel-400" aria-hidden="true" />
                Atendimento pelo WhatsApp
              </WhatsAppAction>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-100/15 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.brand.name} – {siteConfig.brand.subtitle}. Todos os direitos reservados.
          </p>
          <p className="text-cream-100/55">
            {siteConfig.brand.demoNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
