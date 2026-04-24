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
        name: "Desenvolvimento Web",
        href: "/servicos/desenvolvimento-web",
        description:
          "Sites e aplicações web responsivas, modernas e otimizadas com React, Next.js e Node.js.",
      },
      {
        name: "Design UX/UI",
        href: "/servicos/design-ux-ui",
        description:
          "Interfaces intuitivas e focadas na experiência do usuário, aumentando conversão e engajamento.",
      },
      {
        name: "Marketing Digital",
        href: "/servicos/marketing-digital",
        description:
          "Estratégias completas de marketing digital com SEO, tráfego pago e redes sociais.",
      },
      {
        name: "SEO & Performance",
        href: "/servicos/seo-performance",
        description:
          "Otimização para mecanismos de busca e melhoria de performance para ranquear melhor no Google.",
      },
      {
        name: "APIs & Integrações",
        href: "/servicos/apis-integracoes",
        description:
          "Criação de APIs e integração com sistemas externos para automação de processos.",
      },
      {
        name: "Segurança Digital",
        href: "/servicos/seguranca-digital",
        description:
          "Proteção de dados, auditorias de segurança e implementação de boas práticas.",
      },
      {
        name: "Analytics & BI",
        href: "/servicos/analytics-bi",
        description:
          "Dashboards e análise de dados para tomada de decisão estratégica.",
      },
      {
        name: "Consultoria Tech",
        href: "/servicos/consultoria-tech",
        description:
          "Consultoria especializada para evolução tecnológica do seu negócio.",
      },
      {
        name: "Automações",
        href: "/servicos/automacoes",
        description:
          "Automatização de processos com integrações inteligentes e aumento de produtividade.",
      },
      {
        name: "Suporte & Manutenção",
        href: "/servicos/suporte-manutencao",
        description:
          "Manutenção contínua e suporte técnico para garantir estabilidade e segurança.",
      },
    ],
  },

  {
    name: "Blog",
    href: "/blog",
  },

  { name: "Contato", href: "/contato" },
];

export const services =
  navigationLinks.find((l) => l.name === "Serviços")?.children ?? [];