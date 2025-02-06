
const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-primary">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/lovable-uploads/logoHorizontalBranca.png"
                alt="Suggest Logo"
                className="h-16"
              />
            </div>
            <p className="text-white text-sm">
              Soluções de IA para Transformação Digital
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Prospecção Ativa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Chatbots Inteligentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Casos de Sucesso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a
                  href="https://wa.me//5598970103151?text=Olá! Gostaria de modernizar minha empresa!"
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me//5598970103151"
                  className="hover:text-secondary transition-colors"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">
            © 2024 Suggest Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me//5598970103151?text=Olá! Gostaria de modernizar minha empresa!"
              target="_blank"
              className="text-white hover:text-secondary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
