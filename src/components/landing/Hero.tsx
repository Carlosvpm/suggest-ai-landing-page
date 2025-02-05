
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="container-padding py-12">
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 
          className="heading-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transforme sua Empresa com o Poder da Inteligência Artificial
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enquanto seus concorrentes ainda operam manualmente, automatize processos e multiplique resultados com soluções personalizadas de IA.
        </motion.p>
        <motion.div 
          className="flex flex-col max-w-md mx-auto gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input 
            type="email" 
            placeholder="Seu melhor e-mail"
            className="w-full px-6 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="button-primary w-full">
            QUERO TRANSFORMAR MEU NEGÓCIO
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
