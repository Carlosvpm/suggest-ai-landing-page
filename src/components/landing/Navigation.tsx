import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 w-full z-50">
      <div className="glass-panel px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/logoHorizontal.png"
            alt="Suggest Logo"
            className="h-16"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Sobre
          </a>
          {/* <a
            href="#blog"
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Blog
          </a> */}
          <a
            href="#FAQ"
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#howItWorks"
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Como Funciona?
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="button-primary">
            <a
              href="https://wa.me//5598970103151?text=Olá! Gostaria de modernizar minha empresa!"
              target="_blank"
            >
              Fale Conosco
            </a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              Sobre
            </a>
            <a
              href="#blog"
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              Blog
            </a>
            <button className="button-secondary w-full">Fale conosco</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
