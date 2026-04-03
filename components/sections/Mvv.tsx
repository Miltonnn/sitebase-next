import { Rocket, Eye, Gem } from "lucide-react";

export function Mvv() {
  const mvvData = [
    {
      titulo: "Missão",
      descricao:
        "Transformar ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.",
      icon: <Rocket size={35} />,
    },
    {
      titulo: "Visão",
      descricao:
        "Ser referência em excelência tecnológica e parceria estratégica para empresas que buscam crescimento.",
      icon: <Eye size={35} />,
    },
    {
      titulo: "Valores",
      descricao:
        "Inovação, transparência, compromisso com qualidade e foco em resultados excepcionais.",
      icon: <Gem size={35} />,
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <span className="text-primary uppercase mb-4 block font-medium text-lg">
          Nossos Valores
        </span>
        <h2 className="mb-4 text-dark font-semibold text-lg">O que nos move</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Princípios que guiam nosso trabalho e relacionamento com clientes e
          parceiros.
        </p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {mvvData.map((item, index) => (
          <div
            key={index}
            className="card-mvv text-center flex flex-col items-center gap-2  p-10 shadow-md border rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <span className="mb-4 inline-flex items-center justify-center p-4 rounded-xl bg-linear-to-r from-primary to-blue-400 text-white">
              {item.icon}
            </span>
            <h3 className="text-2xl font-semibold text-dark mb-3">
              {item.titulo}
            </h3>
            <p className="text-muted-foreground">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
