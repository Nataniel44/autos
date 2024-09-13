import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">AutoMS</h3>
            <p className="text-sm">
              Tu destino confiable para encontrar los mejores autos usados y
              nuevos.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/inventario"
                  className="hover:text-white transition-colors duration-300"
                >
                  Inventario
                </a>
              </li>
              <li>
                <a
                  href="/financiamiento"
                  className="hover:text-white transition-colors duration-300"
                >
                  Financiamiento
                </a>
              </li>
              <li>
                <a
                  href="/vende-tu-auto"
                  className="hover:text-white transition-colors duration-300"
                >
                  Vende tu Auto
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terminos-y-condiciones"
                  className="hover:text-white transition-colors duration-300"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidad"
                  className="hover:text-white transition-colors duration-300"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-cookies"
                  className="hover:text-white transition-colors duration-300"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="/aviso-legal"
                  className="hover:text-white transition-colors duration-300"
                >
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:info@automs.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@automs.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} AutoMS. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
