import { Formulario } from "@/components/forms/Formulario";

export default function ContatoPage() {
  return (
    <section className="container">
      <div className="grid grid-cols-12 items-center py-10">
        <div className="col-span-12 xl:col-span-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Entre em contato conosco
          </h2>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <Formulario />
        </div>
      </div>
    </section>
  );
}
