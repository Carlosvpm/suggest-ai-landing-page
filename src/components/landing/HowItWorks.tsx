
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="howItWorks" className="py-16 md:py-24 bg-accent-blue/10">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-4">Como funciona</h2>
          <p className="text-lg text-center text-neutral-600 mb-16 max-w-3xl mx-auto">
            A automação é complicada — mas implementá-la não precisa ser. <br />{" "}
            E o melhor de tudo! Antes da proposta você poderá ganhar 7 dias de teste gratuito!
            Simplificaremos o processo para você em 3 etapas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue text-white rounded-lg mb-6 font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Consultoria gratuita
              </h3>
              <p className="text-neutral-600 mb-6">
                Fale com um engenheiro de sistemas real e discuta os requisitos
                e objetivos do seu projeto. Ouviremos atentamente para entender
                sua visão e objetivos.
              </p>
              <Button variant="link" className="text-accent-blue p-0 h-auto">
                Agendar uma chamada
              </Button>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue text-white rounded-lg mb-6 font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Escopo e Proposta</h3>
              <p className="text-neutral-600 mb-6">
                Com base na sua consulta, forneceremos um escopo detalhado,
                incluindo etapas detalhadas, cronograma, orçamento e algumas
                possíveis modificações ou extensões ao seu sistema.
              </p>
              <Button variant="link" className="text-accent-blue p-0 h-auto">
                Agendar uma chamada
              </Button>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue text-white rounded-lg mb-6 font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Início do projeto</h3>
              <p className="text-neutral-600 mb-6">
                Com a proposta acertada, agendaremos uma reunião inicial para
                apresentar nossa equipe e começarmos de verdade.
              </p>
              <Button variant="link" className="text-accent-blue p-0 h-auto">
                Agendar uma chamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
