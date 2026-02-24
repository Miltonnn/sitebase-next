import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/banner/banner-01.png"
        alt="Desenvolvimento de soluções digitais modernas"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="container absolute z-30">
        <div className="px-4 flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-gray-100">
            Desenvolvemos soluções
            <span className="block ">digitais modernas</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Criamos sites rápidos, responsivos e otimizados para gerar
            resultados reais para o seu negócio.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contato" title="Contato">
                Fale Conosco
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-gray-200 hover:bg-black hover:text-gray-100 hover:border-black transition
               duration-400"
            >
              <Link href="/servicos" title="Serviços">
                Nossos Serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
