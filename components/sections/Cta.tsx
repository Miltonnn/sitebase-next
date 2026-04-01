import Link from "next/link";
import { Button } from "../ui/button";

export function Cta() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center justify-center gap-5 text-center bg-gradient-to-r from-primary to-purple-500 py-20 rounded-4xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-lg text-gray-300">
          Entre em contato conosco hoje e descubra como podemos ajudar sua
          empresa a alcançar <br /> novos patamares no mundo digital.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="p-7 text-lg bg-white text-dark  duration-400 hover:bg-secondary hover:text-white">
            <Link href="/contato" title="Contato">
              Falar com especialista
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-lg p-7 bg-outline text-white border-white hover:bg-black hover:text-gray-100 hover:border-black  duration-400"
          >
            <Link href="/contato" title="Contato">
              Agendar demonstração
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
