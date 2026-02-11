import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Desenvolvemos soluções digitais modernas
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Criamos sites rápidos, responsivos e otimizados para gerar resultados reais para o seu negócio.
        </p>

        {/* Botões */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contato" title="Contato">Fale Conosco</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/servicos" title="Serviços">Nossos Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
