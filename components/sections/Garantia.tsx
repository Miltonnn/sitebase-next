import { CheckCircle2, Globe, Shield, Zap } from "lucide-react";

export default function Garantia() {
  const garantia = [
    {
      icon: CheckCircle2,
      title: "Primeira Página em 90 dias",
      description:
        "Ou continuamos trabalhando sem custo adicional até alcançar.",
    },
    {
      icon: Globe,
      title: "Site 100% Responsivo",
      description:
        "Perfeito em qualquer dispositivo: desktop, tablet e smartphone.",
    },
    {
      icon: Zap,
      title: "Performance de Ponta",
      description: "Score acima de 90 no Google PageSpeed Insights garantido.",
    },
    {
      icon: Shield,
      title: "Segurança SSL",
      description:
        "Certificado de segurança incluso e proteções contra ataques.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 space-y-2" data-aos="fade-right">
          <span className="text-primary uppercase font-medium text-lg block">
            Nossas Garantias
          </span>
          <h2 className="text-dark font-semibold text-lg">Compromisso com seu sucesso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com garantias sólidas porque confiamos no nosso
            trabalho.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {garantia.map((garantia, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary transition-all"
              data-aos="fade-down"
            >
              <div className="w-16 h-16 bg-linear-to-r from-primary to-blue-400 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <garantia.icon className="w-8 h-8" />
              </div>
              <h4 className="mb-3">{garantia.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {garantia.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
