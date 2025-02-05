
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Automação Inteligente",
      description: "Nossas soluções já ajudaram dezenas de empresas a reduzir custos operacionais em até 60% e aumentar a produtividade em mais de 80%.",
      points: [
        "Automação de processos repetitivos",
        "Operação 24/7 com eficiência máxima",
        "Eliminação de erros humanos"
      ]
    },
    {
      title: "Análise Preditiva e Atendimento",
      description: "Tome decisões baseadas em dados precisos e melhore a experiência dos seus clientes com nossa tecnologia de ponta.",
      points: [
        "Antecipação de tendências de mercado",
        "Chatbots inteligentes para atendimento",
        "Insights valiosos de grandes dados"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="heading-lg mt-6">Revolucione seu Negócio com IA</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            A Suggest AI desenvolve soluções personalizadas que transformam a forma como sua empresa trabalha.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="button-primary">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-6 rounded-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt={feature.title}
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
