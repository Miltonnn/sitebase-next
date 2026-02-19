import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-muted">
      <div className=" px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-primary">
          Desenvolvemos soluções{" "}
          <span className="text-black">digitais modernas</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Criamos sites rápidos, responsivos e otimizados para gerar resultados
          reais para o seu negócio.
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
            className="hover:bg-black hover:text-white transition duration-300"
          >
            <Link href="/servicos" title="Serviços">
              Nossos Serviços
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
