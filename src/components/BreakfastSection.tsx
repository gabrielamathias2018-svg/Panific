import { Check, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { WhatsAppAction } from './WhatsAppAction';

interface BreakfastSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function BreakfastSection({ onOpenDemoModal }: BreakfastSectionProps) {
  return (
    <section className="border-b border-cream-200 bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-2xl border border-cream-200 bg-cream-100/60 lg:grid-cols-12">
          <div className="relative min-h-[280px] overflow-hidden bg-cream-200 lg:col-span-7 lg:min-h-[440px]">
            <ResilientImage
              src={siteConfig.breakfast.image}
              alt={siteConfig.breakfast.imageAlt}
              className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              Café da Manhã
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-coffee-900 sm:text-4xl text-balance">
              {siteConfig.breakfast.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-coffee-700">
              {siteConfig.breakfast.text}
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-cream-200 pt-5">
              {siteConfig.breakfast.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm leading-snug text-coffee-900"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppAction
                message={siteConfig.messages.breakfast}
                contextTitle="Opções de Café da Manhã"
                onOpenDemoModal={onOpenDemoModal}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-terracotta-700 sm:w-auto whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.breakfast.ctaLabel}
              </WhatsAppAction>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
