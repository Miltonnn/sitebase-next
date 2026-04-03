import { Button } from "@/components/ui/button";
import { services } from "./services.data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-right">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500 flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={28}
                  />
                </div>

                <h3 className="mb-3 font-semibold text-lg">{service.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  className="px-0 hover:bg-transparent hover:text-primary mt-auto text-md"
                >
                  Saiba mais
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            );
          })}
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
