import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CategoryId, ProductItem, siteConfig } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';
import { WhatsAppAction } from './WhatsAppAction';

interface MenuSectionProps {
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

type FilterOption = 'todos' | CategoryId;

export function MenuSection({ onOpenDemoModal }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>('todos');

  const visibleCategories =
    selectedCategory === 'todos'
      ? siteConfig.categories
      : siteConfig.categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="cardapio" className="border-b border-cream-200 bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              Nossas Delícias
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-coffee-900 sm:text-4xl text-balance">
              Feito com carinho, servido com sabor.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-coffee-700">
              Explore nossas fornadas diárias, doces artesanais, salgados crocantes e cafés preparados na hora.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filtrar cardápio por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-cream-200 bg-cream-100/80 p-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'todos'}
              onClick={() => setSelectedCategory('todos')}
              className={`min-h-[40px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 sm:text-sm ${
                selectedCategory === 'todos'
                  ? 'bg-coffee-900 text-cream-50 shadow-xs'
                  : 'text-coffee-700 hover:text-coffee-900'
              }`}
            >
              Todos
            </button>
            {siteConfig.categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 sm:text-sm ${
                    isActive
                      ? 'bg-coffee-900 text-cream-50 shadow-xs'
                      : 'text-coffee-700 hover:text-coffee-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-14">
          {visibleCategories.map((category) => {
            const items = siteConfig.products.filter(
              (product) => product.category === category.id,
            );
            return (
              <div key={category.id} aria-labelledby={`cat-heading-${category.id}`}>
                <div className="flex items-baseline justify-between border-b border-cream-200 pb-3">
                  <h3
                    id={`cat-heading-${category.id}`}
                    className="font-display text-2xl font-semibold text-coffee-900"
                  >
                    {category.label}
                  </h3>
                  <span className="text-xs font-medium text-coffee-500 tabular-nums">
                    {items.length} opções
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      categoryLabel={category.label}
                      product={product}
                      onOpenDemoModal={onOpenDemoModal}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  categoryLabel: string;
  product: ProductItem;
  onOpenDemoModal: (message: string, contextTitle: string) => void;
}

function ProductCard({ categoryLabel, product, onOpenDemoModal }: ProductCardProps) {
  const displayPrice = product.price ?? 'Consulte o valor';
  const whatsappMessage = siteConfig.messages.product(product.name);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden bg-cream-100">
        <ResilientImage
          src={product.image}
          alt={product.imageAlt}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
            product.imagePosition ?? 'object-center'
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coffee-500">
          {categoryLabel}
        </p>

        <h4 className="mt-1 font-display text-xl font-semibold text-coffee-900">
          {product.name}
        </h4>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-coffee-700">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-cream-100 pt-4">
          <div className="min-w-0">
            <span className="block text-[11px] font-medium uppercase tracking-wider text-coffee-500">
              Valor
            </span>
            <span className="block truncate text-sm font-semibold text-coffee-900 tabular-nums">
              {displayPrice}
            </span>
          </div>

          <WhatsAppAction
            message={whatsappMessage}
            contextTitle={`Consultar: ${product.name}`}
            onOpenDemoModal={onOpenDemoModal}
            ariaLabel={`Solicitar ${product.name} pelo WhatsApp`}
            className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl bg-terracotta-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-terracotta-700 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Pedir no WhatsApp
          </WhatsAppAction>
        </div>
      </div>
    </article>
  );
}
