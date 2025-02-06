
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-12 text-white">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-neutral-100 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium">
                O que é automação com IA e como pode beneficiar minha empresa?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Automação com IA é o uso de inteligência artificial para
                executar tarefas repetitivas e processos complexos
                automaticamente. Ela pode beneficiar sua empresa reduzindo
                custos operacionais, aumentando a produtividade, minimizando
                erros e permitindo que sua equipe foque em atividades
                estratégicas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-neutral-100 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium">
                Quanto tempo leva para implementar uma solução de IA?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                O tempo de implementação varia de acordo com a complexidade do
                projeto. Projetos simples podem ser implementados em algumas
                semanas, enquanto projetos mais complexos podem levar alguns
                meses. Nossa equipe trabalha para entregar resultados no menor
                tempo possível sem comprometer a qualidade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-neutral-100 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium">
                Como garantimos a segurança dos dados durante o processo?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Segurança é nossa prioridade. Utilizamos protocolos de
                criptografia avançados, seguimos as melhores práticas de
                segurança da informação e estamos em conformidade com a LGPD.
                Além disso, mantemos controles de acesso rigorosos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-neutral-100 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium">
                Qual o investimento necessário para começar?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                O investimento depende das necessidades específicas do seu
                negócio e da solução escolhida. Oferecemos planos flexíveis e
                personalizados para atender diferentes orçamentos e objetivos.
                Entre em contato conosco para uma avaliação detalhada e proposta
                personalizada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-neutral-100 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium">
                Vocês oferecem suporte após a implementação?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Sim! Oferecemos suporte técnico contínuo, manutenção regular e
                atualizações para garantir que sua solução continue funcionando
                perfeitamente. Nossa equipe está sempre disponível para ajudar
                com qualquer questão ou necessidade que surgir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
