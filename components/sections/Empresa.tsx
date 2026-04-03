import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Empresa() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2  items-center gap-20 justify-between">
        <div className="order-2 xl:order-1" data-aos="fade-down-right">
          <Image
            src="/assets/empresa/empresa.jpg"
            alt="Imagem ilustrativa"
            title="Imagem ilustrativa"
            width={300}
            height={300}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3 order-1 xl:order-2" data-aos="fade-down-left">
          <h2 className="text-4xl font-bold text-primary">
            {siteConfig.name}
            <span className="text-sm font-semibold block text-gray-600 tracking-widest">
              {siteConfig.description}
            </span>
          </h2>
          <p className="text-muted-foreground">
            Há mais de 10 anos no mercado, somos especialistas em transformar
            ideias em realidade digital. Nossa equipe multidisciplinar combina
            expertise técnica com criatividade para entregar soluções que
            realmente fazem a diferença.
          </p>
          <p className="text-muted-foreground">
            Trabalhamos lado a lado com nossos clientes, entendendo suas
            necessidades e desafios para criar estratégias personalizadas que
            geram resultados reais e sustentáveis.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="p-6 w-fit mt-4"
          >
            <Link href="\quem-somos" title="Empresa">
              Conheça nossa história
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
