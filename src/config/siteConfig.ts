export type CategoryId = 'paes' | 'confeitaria' | 'salgados' | 'cafeteria';

export interface ProductItem {
  id: string;
  category: CategoryId;
  name: string;
  description: string;
  /** Deixe como null para exibir "Consulte o valor" ou preencha com o preço real (ex.: "R$ 18,90"). */
  price: string | null;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface HighlightItem {
  id: string;
  slotLabel: 'Produto mais vendido' | 'Especialidade da casa' | 'Lançamento da semana' | 'Oferta especial';
  title: string;
  description: string;
  /** Deixe como null para exibir "Consulte o valor" ou informe um valor real/ilustrativo. */
  price: string | null;
  image: string;
  imageAlt: string;
}

export interface OrderCategoryItem {
  id: string;
  name: string;
  description: string;
}

export const IMAGES = {
  heroBreakfast: '/src/assets/images/hero_bakery_breakfast_1795618865785.jpg',
  breadFrenchRolls: '/src/assets/images/bread_french_rolls_1795618867371.jpg',
  breadCheeseSpecials: '/src/assets/images/bread_cheese_specials_1795618867828.jpg',
  pastryCakesTarts: '/src/assets/images/pastry_cakes_tarts_1795618868146.jpg',
  pastrySonhosSweets: '/src/assets/images/pastry_sonhos_sweets_1795618868503.jpg',
  savorySnacks: '/src/assets/images/savory_brazilian_snacks_1795618870269.jpg',
  coffeeEspressoCappuccino: '/src/assets/images/coffee_espresso_cappuccino_1795618869585.jpg',
  coffeeHotChocolateIced: '/src/assets/images/coffee_hot_chocolate_iced_1795618870711.jpg',
  highlightSourdough: '/src/assets/images/highlight_sourdough_craft_1795618871648.jpg',
  breakfastSpread: '/src/assets/images/breakfast_spread_morning_1795618871821.jpg',
  ordersCelebrationCake: '/src/assets/images/orders_celebration_cake_1795618872236.jpg',
  aboutBakeryOven: '/src/assets/images/about_bakery_oven_1795618873571.jpg',
} as const;

export const siteConfig = {
  /**
   * CONFIGURAÇÃO CENTRALIZADA DE WHATSAPP
   * Insira apenas dígitos com DDI e DDD (ex.: "5511999999999").
   * Enquanto permanecer vazio (""), os botões abrem um painel demonstrativo
   * com a mensagem pronta e orientações de configuração, sem direcionar para números fictícios.
   */
  whatsappNumber: '',

  brand: {
    name: 'PÃO & PROSA',
    subtitle: 'Panificadora e Confeitaria',
    tagline: 'Feito com carinho para fazer parte dos seus melhores momentos.',
    demoNotice: 'Projeto demonstrativo desenvolvido para apresentação comercial',
  },

  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Nosso Cardápio', href: '#cardapio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    headline: 'O cheirinho de pão quentinho que transforma seu dia.',
    subtitle:
      'Produtos fresquinhos, preparados com carinho para acompanhar seus melhores momentos.',
    primaryCta: 'Conheça nosso cardápio',
    secondaryCta: 'Fale pelo WhatsApp',
    image: IMAGES.heroBreakfast,
    imageAlt:
      'Mesa de café da manhã com pão francês crocante, croissants, bolo caseiro fatiado, pães artesanais e xícara de café quente.',
  },

  categories: [
    { id: 'paes', label: 'Pães' },
    { id: 'confeitaria', label: 'Confeitaria' },
    { id: 'salgados', label: 'Salgados' },
    { id: 'cafeteria', label: 'Cafeteria' },
  ] as const,

  products: [
    // PÃES
    {
      id: 'pao-frances',
      category: 'paes',
      name: 'Pão francês',
      description: 'Casca fina e crocante com miolo macio, assado em fornadas ao longo de todo o dia.',
      price: null,
      image: IMAGES.breadFrenchRolls,
      imageAlt: 'Cesta artesanal com pães franceses recém-saídos do forno.',
      imagePosition: 'object-center',
    },
    {
      id: 'pao-caseiro',
      category: 'paes',
      name: 'Pão caseiro',
      description: 'Receita tradicional de massa leve e levemente adocicada, ideal para acompanhar café e manteiga.',
      price: null,
      image: IMAGES.highlightSourdough,
      imageAlt: 'Pão caseiro artesanal de crosta dourada sobre mesa de madeira.',
      imagePosition: 'object-center',
    },
    {
      id: 'pao-de-queijo',
      category: 'paes',
      name: 'Pão de queijo',
      description: 'Assado na hora com queijo curado selecionado, crocante por fora e elástico por dentro.',
      price: null,
      image: IMAGES.breadCheeseSpecials,
      imageAlt: 'Porção de pães de queijo dourados servidos em prato de cerâmica.',
      imagePosition: 'object-left',
    },
    {
      id: 'paes-integrais',
      category: 'paes',
      name: 'Pães integrais',
      description: 'Massa rica em fibras com mix de sementes, aveia e linhaça dourada para uma rotina equilibrada.',
      price: null,
      image: IMAGES.breadCheeseSpecials,
      imageAlt: 'Pão integral fatiado com sementes sobre tábua rústica.',
      imagePosition: 'object-right',
    },
    {
      id: 'paes-especiais',
      category: 'paes',
      name: 'Pães especiais',
      description: 'Fornadas de fermentação lenta, brioches amanteigados e receitas sazonais do nosso padeiro.',
      price: null,
      image: IMAGES.aboutBakeryOven,
      imageAlt: 'Pães especiais artesanais saindo do forno de pedra.',
      imagePosition: 'object-bottom',
    },

    // CONFEITARIA
    {
      id: 'bolos-caseiros',
      category: 'confeitaria',
      name: 'Bolos caseiros',
      description: 'Fofinhos e perfumados, com sabores clássicos como cenoura com chocolate, laranja e fubá cremoso.',
      price: null,
      image: IMAGES.pastryCakesTarts,
      imageAlt: 'Bolo caseiro com cobertura cremosa de chocolate em boleira.',
      imagePosition: 'object-left',
    },
    {
      id: 'bolos-decorados',
      category: 'confeitaria',
      name: 'Bolos decorados',
      description: 'Camadas delicadas com recheios artesanais e acabamento elegante para celebrar datas especiais.',
      price: null,
      image: IMAGES.ordersCelebrationCake,
      imageAlt: 'Bolo decorado com frutas vermelhas e amêndoas laminadas.',
      imagePosition: 'object-center',
    },
    {
      id: 'tortas-doces',
      category: 'confeitaria',
      name: 'Tortas doces',
      description: 'Massa sablée crocante combinada com cremes leves, frutas frescas da estação e ganache.',
      price: null,
      image: IMAGES.pastryCakesTarts,
      imageAlt: 'Torta doce artesanal decorada com frutas frescas.',
      imagePosition: 'object-right',
    },
    {
      id: 'sonhos',
      category: 'confeitaria',
      name: 'Sonhos',
      description: 'Massa aerada e dourada, polvilhada com açúcar fino e generoso recheio de creme de baunilha ou doce de leite.',
      price: null,
      image: IMAGES.pastrySonhosSweets,
      imageAlt: 'Sonhos recheados com creme polvilhados com açúcar.',
      imagePosition: 'object-left',
    },
    {
      id: 'doces-variados',
      category: 'confeitaria',
      name: 'Doces variados',
      description: 'Seleção diária de tarteletes, mil-folhas, bombas de chocolate e docinhos preparados na casa.',
      price: null,
      image: IMAGES.pastrySonhosSweets,
      imageAlt: 'Variedade de doces finos artesanais de confeitaria.',
      imagePosition: 'object-right',
    },

    // SALGADOS
    {
      id: 'coxinhas',
      category: 'salgados',
      name: 'Coxinhas',
      description: 'Massa cremosa de batata com casquinha sequinha e recheio bem temperado de frango desfiado.',
      price: null,
      image: IMAGES.savorySnacks,
      imageAlt: 'Coxinhas douradas e crocantes servidas em travessa artesanal.',
      imagePosition: 'object-left',
    },
    {
      id: 'empadas',
      category: 'salgados',
      name: 'Empadas',
      description: 'Massa podre que derrete na boca, com recheios cremosos de palmito, frango ou camarão.',
      price: null,
      image: IMAGES.savorySnacks,
      imageAlt: 'Empadas assadas de massa folhada dourada.',
      imagePosition: 'object-center',
    },
    {
      id: 'pasteis',
      category: 'salgados',
      name: 'Pastéis',
      description: 'Opções de massa crocante assada ou frita na hora, perfeitas para o lanche da tarde.',
      price: null,
      image: IMAGES.savorySnacks,
      imageAlt: 'Salgados variados dourados em prato de cerâmica.',
      imagePosition: 'object-center',
    },
    {
      id: 'enroladinhos',
      category: 'salgados',
      name: 'Enroladinhos',
      description: 'Massa macia assada no ponto certo com presunto, queijo derretido e toque de orégano.',
      price: null,
      image: IMAGES.breadFrenchRolls,
      imageAlt: 'Salgados assados dourados recém-saídos do forno.',
      imagePosition: 'object-right',
    },
    {
      id: 'esfihas',
      category: 'salgados',
      name: 'Esfihas',
      description: 'Esfihas abertas e fechadas de massa leve com recheios suculentos de carne temperada, queijo ou frango.',
      price: null,
      image: IMAGES.savorySnacks,
      imageAlt: 'Esfihas abertas assadas com carne temperada e ervas frescas.',
      imagePosition: 'object-right',
    },

    // CAFETERIA
    {
      id: 'cafe-expresso',
      category: 'cafeteria',
      name: 'Café expresso',
      description: 'Extração encorpada de grãos selecionados com crema aveludada e notas de chocolate e caramelo.',
      price: null,
      image: IMAGES.coffeeEspressoCappuccino,
      imageAlt: 'Xícara de café expresso recém-extraído sobre mesa de madeira.',
      imagePosition: 'object-left',
    },
    {
      id: 'cappuccino',
      category: 'cafeteria',
      name: 'Cappuccino',
      description: 'Expresso equilibrado com leite vaporizado cremoso e um toque sutil de cacau em pó.',
      price: null,
      image: IMAGES.coffeeEspressoCappuccino,
      imageAlt: 'Xícara de cappuccino com latte art ao lado de croissant.',
      imagePosition: 'object-center',
    },
    {
      id: 'cafe-com-leite',
      category: 'cafeteria',
      name: 'Café com leite',
      description: 'O clássico pingado ou média da padaria, servido bem quente com espuma macia de leite fresco.',
      price: null,
      image: IMAGES.breakfastSpread,
      imageAlt: 'Café passado e xícaras para café com leite em mesa de manhã.',
      imagePosition: 'object-right',
    },
    {
      id: 'chocolate-quente',
      category: 'cafeteria',
      name: 'Chocolate quente',
      description: 'Bebida espessa e reconfortante preparada com chocolate meio amargo derretido no leite cremoso.',
      price: null,
      image: IMAGES.coffeeHotChocolateIced,
      imageAlt: 'Caneca de chocolate quente cremoso polvilhado com cacau.',
      imagePosition: 'object-left',
    },
    {
      id: 'bebidas-geladas',
      category: 'cafeteria',
      name: 'Bebidas geladas',
      description: 'Café gelado cremoso, frappés artesanais e sucos naturais espremidos na hora para refrescar seu dia.',
      price: null,
      image: IMAGES.coffeeHotChocolateIced,
      imageAlt: 'Copo alto de café gelado com leite cremoso.',
      imagePosition: 'object-right',
    },
  ] as ProductItem[],

  highlights: [
    {
      id: 'destaque-mais-vendido',
      slotLabel: 'Produto mais vendido',
      title: 'Combo Pão Francês & Pão de Queijo da Fornada',
      description:
        'A combinação que conquista todas as manhãs: pães franceses crocantes recém-assados junto com nossa porção de pães de queijo quentinhos.',
      price: null,
      image: IMAGES.breadFrenchRolls,
      imageAlt: 'Cesta de pão francês quentinho acabado de assar.',
    },
    {
      id: 'destaque-especialidade',
      slotLabel: 'Especialidade da casa',
      title: 'Pão Rústico de Fermentação Natural',
      description:
        'Preparado com levain cultivado na casa e 24 horas de descanso lento para uma casca caramelizada e miolo úmido e aromático.',
      price: null,
      image: IMAGES.highlightSourdough,
      imageAlt: 'Pão rústico artesanal polvilhado com farinha em tábua de madeira.',
    },
    {
      id: 'destaque-lancamento',
      slotLabel: 'Lançamento da semana',
      title: 'Sonho Artesanal com Creme de Baunilha',
      description:
        'Massa leve e macia recheada na hora com creme pâtissier preparado com fava de baunilha e finalizado com açúcar delicado.',
      price: null,
      image: IMAGES.pastrySonhosSweets,
      imageAlt: 'Sonhos artesanais recheados com creme de baunilha.',
    },
    {
      id: 'destaque-oferta',
      slotLabel: 'Oferta especial',
      title: 'Tarde na Prosa: Cappuccino + Croissant na Manteiga',
      description:
        'Nosso cappuccino cremoso acompanhado de croissant folhado na manteiga para deixar sua pausa da tarde muito mais gostosa.',
      price: null,
      image: IMAGES.coffeeEspressoCappuccino,
      imageAlt: 'Xícara de cappuccino com latte art e croissant folhado dourado.',
    },
  ] as HighlightItem[],

  breakfast: {
    title: 'Seu momento especial começa aqui.',
    text: 'Um bom café, pão fresquinho e aquele sabor que faz qualquer manhã ficar melhor. Encontre aqui tudo para começar o dia com mais sabor.',
    ctaLabel: 'Consultar opções pelo WhatsApp',
    image: IMAGES.breakfastSpread,
    imageAlt:
      'Mesa completa de café da manhã com suco natural, frutas frescas, pães variados, pão de queijo e café passado.',
    highlights: [
      'Fornadas contínuas desde as primeiras horas da manhã',
      'Cafés especiais moídos na hora e bebidas cremosas',
      'Opções individuais ou mesas completas para compartilhar',
    ],
  },

  orders: {
    title: 'Tem uma comemoração chegando?',
    subtitle:
      'Faça sua encomenda e conte com nossas delícias para deixar esse momento ainda mais especial.',
    ctaLabel: 'Solicitar orçamento',
    image: IMAGES.ordersCelebrationCake,
    imageAlt:
      'Bolo artesanal de aniversário decorado com frutas vermelhas e amêndoas acompanhado de doces para festa.',
    items: [
      {
        id: 'bolos-aniversario',
        name: 'Bolos de aniversário',
        description: 'Massas fofinhas, recheios artesanais e decoração personalizada para sua festa.',
      },
      {
        id: 'tortas-encomenda',
        name: 'Tortas',
        description: 'Tortas doces e salgadas preparadas sob encomenda no tamanho ideal para seus convidados.',
      },
      {
        id: 'kits-cafe',
        name: 'Kits de café da manhã',
        description: 'Cestas e caixas completas para presentear ou começar reuniões corporativas com sabor.',
      },
      {
        id: 'centos-salgados',
        name: 'Centos de salgados',
        description: 'Coxinhas, empadas, esfihas e mini salgados assados ou fritos na medida para o evento.',
      },
      {
        id: 'doces-eventos',
        name: 'Doces para eventos',
        description: 'Brigadeiros gourmet, tarteletes e docinhos finos montados com cuidado para sua mesa.',
      },
    ] as OrderCategoryItem[],
  },

  about: {
    title: 'Mais que uma panificadora, parte dos seus momentos.',
    text: 'Acreditamos que os melhores momentos também acontecem ao redor da mesa. Por isso, trabalhamos para oferecer produtos saborosos, fresquinhos e preparados com dedicação, para fazer parte da rotina e das celebrações de nossos clientes.',
    pillars: [
      {
        title: 'Ingredientes selecionados',
        description: 'Farinhas nobres, manteiga de verdade e frutas frescas em cada receita.',
      },
      {
        title: 'Fornadas ao longo do dia',
        description: 'Pães e salgados sempre quentinhos, respeitando o tempo de cada massa.',
      },
      {
        title: 'Atendimento acolhedor',
        description: 'Um espaço pensado para receber vizinhos, famílias e boas conversas.',
      },
    ],
    image: IMAGES.aboutBakeryOven,
    imageAlt: 'Padeiro retirando pães dourados e fumegantes do forno artesanal.',
  },

  contact: {
    sectionTitle: 'Venha tomar um café com a gente',
    sectionSubtitle:
      'Campos demonstrativos editáveis em src/config/siteConfig.ts para personalização com os dados reais da panificadora.',
    addressLabel: 'Rua Exemplo, 123 – Bairro Centro, Sua Cidade – UF (Endereço demonstrativo)',
    hoursLabel: 'Segunda a Sábado: 06h00 às 20h00 · Domingos e Feriados: 07h00 às 13h00 (Horário ilustrativo)',
    phoneLabel: 'Telefone / WhatsApp demonstrativo (configure em siteConfig.ts)',
    instagramHandle: '@paoeprosa.demo',
    instagramNote: 'Perfil ilustrativo para apresentação comercial',
    instagramUrl: '',
    /**
     * Cole aqui a URL de incorporação (iframe src) do Google Maps da loja real.
     * Enquanto vazio, será exibida uma visualização demonstrativa com instruções claras.
     */
    googleMapsEmbedUrl: '',
  },

  messages: {
    general: 'Olá! Gostaria de conhecer melhor os produtos da Pão & Prosa.',
    product: (productName: string) =>
      `Olá! Gostaria de saber mais sobre o produto ${productName}.`,
    order: (itemName?: string) =>
      itemName
        ? `Olá! Gostaria de solicitar um orçamento para encomenda de ${itemName}.`
        : 'Olá! Gostaria de solicitar um orçamento para uma encomenda.',
    breakfast:
      'Olá! Gostaria de consultar as opções de café da manhã da Pão & Prosa.',
  },
};

export function sanitizeWhatsappNumber(raw: string): string {
  return raw.replace(/\D/g, '');
}

export function buildWhatsappUrl(phoneDigits: string, message: string): string {
  const clean = sanitizeWhatsappNumber(phoneDigits);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${clean}?text=${encoded}`;
}
