export interface NavLink {
  name: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

export const navigationLinks: NavLink[] = [
  { name: "Home", href: "/" },

  { name: "Quem Somos", href: "/quem-somos" },

  {
    name: "Serviços",
    href: "/servicos",
    children: [
      {
        name: "Criação de Sites",
        href: "/servicos/criacao-de-sites",
        description: "Desenvolvemos sites modernos e performáticos.",
      },
      {
        name: "SEO",
        href: "/servicos/seo",
        description: "Posicionamento estratégico no Google.",
      },
      {
        name: "Landing Pages",
        href: "/servicos/landing-pages",
        description: "Páginas focadas em conversão.",
      },
      {
        name: "Posicionamento",
        href: "/servicos/posicionamento",
        description: "Páginas focadas em conversão.",
      },
      {
        name: "Google meu negocio",
        href: "/servicos/google-meu-negocio",
        description: "Páginas focadas em conversão.",
      },
      {
        name: "Testando",
        href: "/servicos/testando",
        description: "Páginas focadas em conversão.",
      },
      {
        name: "Valores",
        href: "/servicos/valores",
        description: "Páginas focadas em conversão.",
      },
      {
        name: "Perspectiva",
        href: "/servicos/perspectiva",
        description: "Páginas focadas em conversão.",
      },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    children: [
      {
        name: "Blog 1",
        href: "/blog/blog-1",
        description: "Desenvolvemos sites modernos e performáticos.",
      },
    ],
  },

  { name: "Contato", href: "/contato" },
];

export const services =
  navigationLinks.find((l) => l.name === "Serviços")?.children ?? [];