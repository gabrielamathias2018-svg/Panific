import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { WhatsAppAction } from './WhatsAppAction';

interface HighlightsSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function HighlightsSection({ onOpenDemoModal }: HighlightsSectionProps) {
  return (
    <section
      id="especialidades"
      className="border-b border-cream-200 bg-cream-100/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            Nossos Destaques
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-coffee-900 sm:text-4xl text-balance">
            Os queridinhos da casa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-coffee-700">
            Seleção especial com os itens mais pedidos no balcão, receitas autorais e novidades da semana.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {siteConfig.highlights.map((item) => {
            const displayPrice = item.price ?? 'Consulte o valor';
            return (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-cream-200">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-600">
                    {item.slotLabel}
                  </p>

                  <h3 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-coffee-900">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-coffee-700 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-cream-200 pt-4">
                    <div>
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-coffee-500">
                        Valor
                      </span>
                      <span className="text-base font-semibold text-coffee-900 tabular-nums">
                        {displayPrice}
                      </span>
                    </div>

                    <WhatsAppAction
                      message={siteConfig.messages.product(item.title)}
                      contextTitle={item.slotLabel}
                      onOpenDemoModal={onOpenDemoModal}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-coffee-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors duration-150 hover:bg-terracotta-600 whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Pedir pelo WhatsApp
                    </WhatsAppAction>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
