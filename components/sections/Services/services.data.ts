import { navigationLinks } from "@/lib/navigation";
import {
  Code,
  Palette,
  TrendingUp,
  Zap,
  Users,
  Search,
  MessageSquare,
  BarChart,
  Database,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

export type Service = NavLink & {
  icon: LucideIcon;
};

const iconMap: Record<string, LucideIcon> = {
  "desenvolvimento-web": Code,
  "design-ux-ui": Palette,
  "marketing-digital": TrendingUp,
  "seo-performance": Search,
  "apis-integracoes": Database,
  "seguranca-digital": Shield,
  "analytics-bi": BarChart,
  "consultoria-tech": Users,
  automacoes: Zap,
  "suporte-manutencao": MessageSquare,
};

export const services: Service[] =
  navigationLinks
    .find((l) => l.name === "Serviços")
    ?.children?.map((item) => {
      const slug = item.href.split("/").pop() ?? "";

      return {
        ...item,
        icon: iconMap[slug] ?? Code,
      };
    }) ?? [];
