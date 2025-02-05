
const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/lovable-uploads/a9520522-d678-44fc-93d0-3d5a87b5bd48.png"
                alt="Suggest Logo"
                className="h-8"
              />
            </div>
            <p className="text-neutral-600 text-sm">
              Soluções de IA para Transformação Digital
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Análise Preditiva
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chatbots Inteligentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Casos de Sucesso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <a
                  href="https://wa.me//5598970103151?text=Olá! Gostaria de modernizar minha empresa!"
                  target="_blank"
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © 2024 Suggest AI. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-600 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me//5598970103151?text=Olá! Gostaria de modernizar minha empresa!"
              target="_blank"
              className="text-neutral-600 hover:text-primary transition-colors"
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
