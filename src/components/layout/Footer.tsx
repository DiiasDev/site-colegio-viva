import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + Descrição */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              Colégio Vivá
            </h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Educação que transforma vidas. Formação completa com acolhimento,
              inovação e excelência acadêmica.
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/#sobre" className="hover:text-white transition">Sobre</Link></li>
              <li><Link href="/#proposta" className="hover:text-white transition">Proposta Pedagógica</Link></li>
              <li><Link href="/#estrutura" className="hover:text-white transition">Estrutura</Link></li>
              <li><Link href="/#contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Segmentos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/#segmentos" className="hover:text-white transition">Educação Infantil</Link></li>
              <li><Link href="/#segmentos" className="hover:text-white transition">Ensino Fundamental</Link></li>
              <li><Link href="/#segmentos" className="hover:text-white transition">Ensino Médio</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Rua Exemplo, 123 - Cidade
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (19) 99999-9999
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                contato@colegioviva.com.br
              </li>

              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0" />
                <Link
                  href="https://instagram.com/colegiovivah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  @colegiovivah
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-[var(--color-accent)] text-black font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition"
            >
              Fale pelo WhatsApp
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Colégio Vivá. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
