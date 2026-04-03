import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Mvv } from "@/components/sections/Mvv";
import Image from "next/image";

export default function QuemSomosPage() {
  return (
    <section>
      <Breadcrumb />
      <div className="container py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-20 justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-primary uppercase font-semibold">
              Nossa História
            </span>
            <h2 className="mb-3 text-2xl font-semibold">Uma trajetória de crescimento e inovação</h2>
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
            <p className="text-muted-foreground">
              Trabalhamos lado a lado com nossos clientes, entendendo suas
              necessidades e desafios para criar estratégias personalizadas que
              geram resultados reais e sustentáveis.
            </p>
            <p className="text-muted-foreground">
              Trabalhamos lado a lado com nossos clientes, entendendo suas
              necessidades e desafios para criar estratégias personalizadas que
              geram resultados reais e sustentáveis.
            </p>
            <p className="text-muted-foreground">
              Trabalhamos lado a lado com nossos clientes, entendendo suas
              necessidades e desafios para criar estratégias personalizadas que
              geram resultados reais e sustentáveis.
            </p>
          </div>
          <div>
            <Image
              src="/assets/empresa/empresa.jpg"
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa"
              width={300}
              height={300}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <Diferenciais />
      <Mvv />
    </section>
  );
}
