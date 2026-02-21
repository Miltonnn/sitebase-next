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