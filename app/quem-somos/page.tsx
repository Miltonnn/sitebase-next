import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function QuemSomosPage() {
  return (
    <section>
      <Breadcrumb />
      <div className="container py-15">
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Somos uma empresa especializada em desenvolvimento de soluções
          digitais, focada em performance, design moderno e resultados reais
          para nossos clientes.
        </p>
      </div>
    </section>
  );
}
