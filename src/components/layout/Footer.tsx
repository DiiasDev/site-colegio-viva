import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.23 6.39 2.23 11.8c0 1.73.45 3.42 1.31 4.91L2 22l5.44-1.49a9.76 9.76 0 0 0 4.59 1.17h.01c5.4 0 9.8-4.4 9.8-9.8 0-2.62-1.02-5.08-2.79-6.97Zm-7.02 15.11h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.23.89.87-3.15-.2-.33a8.14 8.14 0 0 1-1.25-4.31c0-4.49 3.66-8.15 8.16-8.15 2.18 0 4.23.84 5.76 2.39a8.07 8.07 0 0 1 2.38 5.76c0 4.49-3.66 8.15-8.15 8.15Zm4.47-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.06 3.59.57.24 1.01.38 1.36.49.57.18 1.08.15 1.49.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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
                Rua Santa Gertrudes, 1978 - Bela Vista IV - Cosmópolis/SP
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
              aria-label="Fale pelo WhatsApp"
              className="inline-flex mt-6 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-[var(--color-primary)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)] sm:gap-2 sm:px-5 sm:py-3"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="sr-only sm:not-sr-only">Fale pelo WhatsApp</span>
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
