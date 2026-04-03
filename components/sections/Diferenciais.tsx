import { CheckCircle } from "lucide-react";

export function Diferenciais() {
  const diferencial = [
    "Equipe multidisciplinar altamente qualificada",
    "Metodologia ágil e entregas incrementais",
    "Foco total em resultados mensuráveis",
    "Suporte técnico contínuo e proativo",
    "Tecnologias de ponta e melhores práticas",
    "Parceria estratégica de longo prazo",
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-4">
              {diferencial.map((dif, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <CheckCircle
                    className="text-primary shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-foreground">{dif}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary uppercase font-semibold tracking-wider mb-4 block">
              Diferenciais
            </span>
            <h2 className="mb-6 text-dark font-semibold text-lg">Por que escolher a gente?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Mais do que fornecedores, somos parceiros estratégicos
              comprometidos com o sucesso dos nossos clientes. Nossa abordagem
              combina expertise técnica, criatividade e foco em resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com as tecnologias mais modernas do mercado e mantemos
              nossa equipe sempre atualizada através de treinamentos contínuos e
              certificações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
