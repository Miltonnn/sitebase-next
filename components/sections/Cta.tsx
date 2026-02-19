import Link from "next/link";
import { Button } from "../ui/button";

export function Cta() {
  return (
    <section className="bg-zinc-800 py-20">
      <div className="container flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl font-bold text-gray-200">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-lg text-gray-300">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
          impulsionar sua presença online.
        </p>
        <Button asChild size="lg" className="text-md w-fit">
          <Link href="/contato" title="Contato">
            Entre em Contato
          </Link>
        </Button>
      </div>
    </section>
  );
}
