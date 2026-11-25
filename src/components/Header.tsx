import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppAction } from './WhatsAppAction';

interface HeaderProps {
  onWhatsAppAction: (message: string, contextTitle: string) => void;
}

export function Header({ onWhatsAppAction }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenModalFromMenu = (message: string, contextTitle: string) => {
    setMobileMenuOpen(false);
    onWhatsAppAction(message, contextTitle);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200/80 bg-cream-50/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand */}
        <a
          href="#inicio"
          className="flex flex-col leading-none whitespace-nowrap shrink-0"
        >
          <span className="font-display text-lg font-bold tracking-tight text-coffee-900 sm:text-xl">
            {siteConfig.brand.name}
          </span>
          <span className="mt-0.5 text-[11px] font-medium tracking-wide text-coffee-700">
            {siteConfig.brand.subtitle}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-coffee-700 lg:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors duration-150 hover:text-coffee-900 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-terracotta-600 after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <WhatsAppAction
            message={siteConfig.messages.general}
            contextTitle="Faça seu pedido"
            onOpenDemoModal={onWhatsAppAction}
            className="hidden min-h-[42px] items-center gap-2 rounded-xl bg-terracotta-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-terracotta-700 sm:inline-flex whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Faça seu pedido
          </WhatsAppAction>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cream-200 bg-cream-100/70 text-coffee-900 transition-colors hover:bg-cream-200/70 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-cream-200 bg-cream-50 px-4 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Menu móvel" className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-coffee-900 transition-colors hover:bg-cream-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-cream-200 pt-4">
            <WhatsAppAction
              message={siteConfig.messages.general}
              contextTitle="Faça seu pedido"
              onOpenDemoModal={handleOpenModalFromMenu}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Faça seu pedido
            </WhatsAppAction>
          </div>
        </div>
      )}
    </header>
  );
}
