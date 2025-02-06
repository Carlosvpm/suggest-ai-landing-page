import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/lovable-uploads/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      {/* <div className="relative z-10 max-w-4xl ml-auto text-right p-12 pt-96">
        <motion.h1
          className="heading-lg mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transforme sua Empresa com o Poder da Inteligência Artificial
        </motion.h1>
        <motion.p
          className="text-xl text-neutral-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enquanto seus concorrentes ainda operam manualmente, automatize
          processos e multiplique resultados com soluções personalizadas de IA.
        </motion.p>
        <motion.div
          className="flex flex-col max-w-md ml-auto gap-4"
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
            QUERO TRANSFORMAR MEU NEGÓCIO!
          </button>
        </motion.div>
      </div> */}
    </header>
  );
};

export default Hero;
