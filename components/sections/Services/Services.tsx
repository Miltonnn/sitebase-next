import { Button } from "@/components/ui/button";
import { services } from "./services.data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-left">
          <span className="text-primary uppercase mb-4 block font-medium text-lg">
            Serviços
          </span>
          <h2 className="mb-4 text-dark font-semibold text-lg">
            Soluções completas para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços digitais para atender
            todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="flex justify-center mt-9">
          <Button asChild size="lg" className="p-7 text-lg">
            <Link href="/servicos" title="Serviços">
              Ver todos os serviços
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
