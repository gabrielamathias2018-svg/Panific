import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { WhatsAppAction } from './WhatsAppAction';

interface OrdersSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function OrdersSection({ onOpenDemoModal }: OrdersSectionProps) {
  return (
    <section
      id="encomendas"
      className="border-b border-cream-200 bg-coffee-900 py-16 text-cream-50 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel-400">
                Encomendas &amp; Eventos
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-cream-50 sm:text-4xl text-balance">
                {siteConfig.orders.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-cream-100/85">
                {siteConfig.orders.subtitle}
              </p>

              <div className="mt-8 divide-y divide-cream-100/15 border-y border-cream-100/15">
                {siteConfig.orders.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 py-4"
                  >
                    <div>
                      <h3 className="font-display text-lg font-medium text-cream-50">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-cream-100/75">
                        {item.description}
                      </p>
                    </div>
                    <WhatsAppAction
                      message={siteConfig.messages.order(item.name)}
                      contextTitle={`Orçamento: ${item.name}`}
                      onOpenDemoModal={onOpenDemoModal}
                      ariaLabel={`Solicitar orçamento para ${item.name}`}
                      className="mt-0.5 inline-flex min-h-[38px] items-center rounded-lg border border-cream-100/25 px-3 py-1.5 text-xs font-semibold text-caramel-400 transition-colors hover:border-caramel-400 hover:bg-cream-50/10 whitespace-nowrap shrink-0"
                    >
                      Orçar
                    </WhatsAppAction>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppAction
                message={siteConfig.messages.order()}
                contextTitle="Solicitar orçamento de encomenda"
                onOpenDemoModal={onOpenDemoModal}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-terracotta-700 sm:w-auto whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.orders.ctaLabel}
              </WhatsAppAction>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-cream-100/15 bg-coffee-950 lg:col-span-6 lg:min-h-[540px]">
            <ResilientImage
              src={siteConfig.orders.image}
              alt={siteConfig.orders.imageAlt}
              className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
