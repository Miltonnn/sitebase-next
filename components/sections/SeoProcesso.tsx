import {
  CheckCircle2,
  Code,
  Globe,
  LineChart,
  Rocket,
  Search,
  Shield,
  Target,
  Zap,
} from "lucide-react";

export function SeoProcesso() {
  const seoProcess = [
    {
      number: "01",
      title: "Análise Profunda",
      description:
        "Auditoria completa do seu site atual, concorrência e palavras-chave estratégicas.",
      icon: Search,
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description:
        "Criamos um plano de ação customizado baseado nos seus objetivos e mercado.",
      icon: Target,
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description:
        "Site otimizado, rápido, responsivo e preparado para ranquear no Google.",
      icon: Code,
    },
    {
      number: "04",
      title: "Otimização SEO",
      description:
        "Implementação de todas as técnicas on-page e off-page para máximo resultado.",
      icon: LineChart,
    },
    {
      number: "05",
      title: "Lançamento e Monitoramento",
      description:
        "Acompanhamento constante com relatórios semanais de performance e ajustes.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 container">
      <div className="text-center mb-16">
        <span className="text-primary uppercase mb-4 block font-medium text-lg">
          Como Funciona
        </span>
        <h2 className="text-dark font-semibold text-lg mb-4">
          Nosso processo de SEO em 5 etapas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Metodologia testada e aprovada que já levou centenas de sites ao topo
          do Google.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {seoProcess.map((step, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all text-center"
          >
            <div className="w-16 h-16 bg-linear-to-r from-primary to-blue-400 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">{step.number}</span>
            </div>
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-6 h-6" />
            </div>
            <h4 className="mb-3">{step.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
