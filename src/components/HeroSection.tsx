import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { WhatsAppAction } from './WhatsAppAction';

interface HeroSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

export function HeroSection({ onOpenDemoModal }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-coffee-950"
    >
      {/* Background Breakfast Table Photography */}
      <div className="absolute inset-0 -z-10">
        <ResilientImage
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-coffee-950/90 via-coffee-950/65 to-coffee-950/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-coffee-950/20"
        />
      </div>

      <div className="mx-auto flex min-h-[540px] max-w-6xl items-center px-4 py-20 sm:min-h-[620px] sm:px-6 lg:min-h-[680px] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel-400 sm:text-sm">
            {siteConfig.brand.name} · {siteConfig.brand.subtitle}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-cream-50 text-balance">
            {siteConfig.hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg">
            {siteConfig.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#cardapio"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-terracotta-700 whitespace-nowrap shrink-0"
            >
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <WhatsAppAction
              message={siteConfig.messages.general}
              contextTitle="Fale pelo WhatsApp"
              onOpenDemoModal={onOpenDemoModal}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-cream-100/40 bg-coffee-950/45 px-6 py-3 text-sm font-semibold text-cream-50 backdrop-blur-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-cream-50/70 hover:bg-coffee-900/65 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="h-4 w-4 text-caramel-400" aria-hidden="true" />
              {siteConfig.hero.secondaryCta}
            </WhatsAppAction>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
