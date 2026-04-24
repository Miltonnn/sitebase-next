import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "./services.data";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500 flex flex-col items-start">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        {Icon && (
          <Icon
            className="text-primary group-hover:scale-110 transition-transform"
            size={28}
          />
        )}
      </div>

      <h3 className="mb-3 font-semibold text-lg">{service.name}</h3>

      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
        {service.description}
      </p>

      <Button
        asChild
        variant="ghost"
        className="px-0 hover:bg-transparent hover:text-primary mt-auto text-md"
        title={`Saiba mais sobre ${service.name}`}
      >
        <Link href={service.href}>
          Saiba mais
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </Button>
    </div>
  );
}
