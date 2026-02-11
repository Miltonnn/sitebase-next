export interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const navigationLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];
