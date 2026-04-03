import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen md:h-[90vh] flex items-center justify-center md:bg-gray-50">
      <div className="container absolute z-30">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-20">
          <div
            className="flex flex-col items-center xl:items-start text-center xl:text-left"
            data-aos="fade-right"
          >

            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 mt-20 md:mt-0">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Seu site na primeira página do Google
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-medium md:leading-18 max-w-3xl text-dark">
              <span className="block">Transforme seu</span>
              <span className="block">negócio com</span>
              <span className="block text-primary">soluções digitais</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Desenvolvemos experiências digitais modernas que conectam sua
              marca aos clientes, gerando resultados reais e mensuráveis para o
              seu negócio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="p-7 text-lg">
                <Link href="/contato" title="Contato">
                  Começar projeto
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="p-7 text-lg"
              >
                <Link href="/servicos" title="Serviços">
                  Nossos Serviços
                </Link>
              </Button>

            </div>
            <div className="flex justify-center xl:justify-start gap-8 mt-12 pt-8 border-t border-border w-full">
              <div>
                <div className="text-3xl text-primary mb-1">500+</div>
                <div className="text-muted-foreground">Projetos</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-1">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-1">3+</div>
                <div className="text-muted-foreground">Anos</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end" data-aos="fade-left">
            <Image
              src="/assets/banner/img-banner.png"
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa"
              width={600}
              height={600}
              className="hidden xl:block float drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
