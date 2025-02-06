import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Automação Inteligente",
      description:
        "Otimize o seu bem mais valioso, seu Tempo! Nossas soluções já ajudaram dezenas de empresas a reduzir custos operacionais em até 60% e aumentar a produtividade em mais de 80%.",
      points: [
        "Automação de processos repetitivos com precisão",
        "Operação 24/7 com máxima eficiência e agilidade",
        "Eliminação de erros humanos, garantindo mais qualidade",
      ],
      img: "/lovable-uploads/automacaoInteligente.webp",
    },
    {
      title: "Prospecção Ativa",
      description:
        "Descubra como otimizar seus processos para escalar sua empresa! Nossa consultoria identifica ineficiências e implementa estratégias personalizadas para aumentar sua receita e reduzir custos.",
      points: [
        "Agendamento automático de chamadas com leads qualificados",
        "Aumento da taxa de conversão com prospecção personalizada",
        "Economia de recursos ao eliminar a necessidade de anúncios pagos",
        "Diminuição no custo de aquisição de clientes (CAC)",
      ],
      img: "/lovable-uploads/prospeccaoAtiva.webp",
    },
    {
      title: "Consultoria",
      description:
        "Te ajudaremos a esclarecer melhor como seus processos, atendimentos ou marketing podem ser otimizados",
      points: [
        "Análise dos processos internos",
        "Estratégias personalizadas para acelerar resultados",
        "Acompanhamento contínuo para ajustes e melhorias",
      ],
      img: "/lovable-uploads/automacaoInteligente.webp",
    },
    {
      title: "Automação de Marketing",
      description:
        "Implemente sistemas Plug & Play para nutrir e engajar leads de forma autônoma, maximizando resultados.",
      points: [
        "Campanhas automatizadas para nutrição de leads",
        "Segmentação inteligente para maior personalização",
        "Acompanhamento de métricas para otimização constante",
      ],
      img: "/lovable-uploads/automacao.webp",
    },
    {
      title: "Chatbots com IA",
      description:
        "Atenda seus clientes a qualquer hora e aumente suas vendas! Nossos chatbots com IA eliminam filas de espera, oferecem respostas instantâneas e convertem leads automaticamente em qualquer canal.",
      points: [
        "Atendimento 24/7 sem necessidade de equipe adicional",
        "Integração com múltiplos canais para alcance máximo",
        "Conversão de leads em tempo real, sem perder oportunidades",
        "Redução de custos com suporte em até 70%",
      ],
      img: "/lovable-uploads/automacaoInteligente.webp",
    },
    // {
    //   title: "Análise Preditiva e Atendimento",
    //   description:
    //     "Tome decisões estratégicas com base em dados precisos e melhore a experiência do cliente usando tecnologia de ponta.",
    //   points: [
    //     "Antecipação de tendências de mercado para decisões assertivas",
    //     "Chatbots inteligentes que oferecem atendimento personalizado",
    //     "Insights valiosos a partir da análise de grandes volumes de dados",
    //   ],
    // },
    // {
    //   title: "Criação de CRM",
    //   description:
    //     "Rastreie a jornada do seu lead de forma 100% automática, sem depender da equipe comercial para preencher dados.",
    //   points: [
    //     "Gestão de leads automatizada e eficiente",
    //     "Visualização completa do funil de vendas em tempo real",
    //     "Redução de tarefas manuais para a equipe de vendas",
    //   ],
    // },
    // {
    //   title: "IA de Ligação",
    //   description:
    //     "Crie agentes de IA realistas para engajar seus leads por chamadas telefônicas inbound e outbound de forma automatizada.",
    //   points: [
    //     "Chamadas personalizadas com voz natural e humana",
    //     "Engajamento proativo com leads em qualquer etapa do funil",
    //     "Aumento da taxa de resposta sem sobrecarregar a equipe",
    //   ],
    // },
    // {
    //   title: "Consultoria Estratégica",
    //   description:
    //     "Otimize sua oferta e funil de vendas com estratégias validadas por empresas que faturam 8 dígitos.",
    //   points: [
    //     "Diagnóstico completo do seu funil de vendas",
    //     "Estratégias personalizadas para acelerar resultados",
    //     "Acompanhamento contínuo para ajustes e melhorias",
    //   ],
    // },
  ];
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            NOSSAS SOLUÇÕES COM I.A
          </span>
          <h2 className="heading-lg mt-6">Revolucione seu Negócio com IA</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            A Suggest AI desenvolve soluções personalizadas que transformam a
            forma como sua empresa trabalha.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
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
                <button className="button-primary">Saiba Mais</button>
              </div>
            </div>
            <div>
              <Card className="glass-panel p-6 rounded-2xl">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-80 h-auto rounded-lg"
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
