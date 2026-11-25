import { siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="sobre" className="border-b border-cream-200 bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-cream-200 bg-cream-100 lg:col-span-6 lg:min-h-[460px]">
            <ResilientImage
              src={siteConfig.about.image}
              alt={siteConfig.about.imageAlt}
              className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              Sobre Nós
            </p>

            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-coffee-900 sm:text-4xl text-balance">
              {siteConfig.about.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-coffee-700 sm:text-lg">
              {siteConfig.about.text}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-cream-200 pt-7 sm:grid-cols-3">
              {siteConfig.about.pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-display text-base font-semibold text-coffee-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-coffee-700">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
