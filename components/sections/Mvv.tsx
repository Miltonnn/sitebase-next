import { Rocket, Eye, Gem } from "lucide-react";

export function Mvv() {
  const mvvData = [
    {
      titulo: "Missão",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam, impedit aliquid iure obcaecati repellendus quas illum rerum fuga.",
      icon: <Rocket size={35} />,
    },
    {
      titulo: "Visão",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam, impedit aliquid iure obcaecati repellendus quas illum rerum fuga.",
      icon: <Eye size={35} />,
    },
    {
      titulo: "Valores",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam, impedit aliquid iure obcaecati repellendus quas illum rerum fuga.",
      icon: <Gem size={35} />,
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <span className="text-primary uppercase mb-4 block font-normal text-lg">
          Nossos Valores
        </span>
        <h2 className="mb-4 text-dark font-semibold text-lg">O que nos move</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Princípios que guiam nosso trabalho e relacionamento com clientes e
          parceiros.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {mvvData.map((item, index) => (
          <div
            key={index}
            className="card-mvv text-center flex flex-col items-center gap-2"
          >
            <span className="mb-4 inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white">
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
