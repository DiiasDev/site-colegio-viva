import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { homeQuickLinks } from "../home/homeData";
import { Container } from "./Container";
import { navigationItems } from "./navigationItems";

export function Footer() {
  const contact = {
    address:
      "Rua Santa Gertrudes, 1978 - Bela Vista IV, Cosmópolis - SP, 13150-312",
    mapsHref:
      "https://maps.google.com/?q=Rua%20Santa%20Gertrudes%2C%201978%20Cosm%C3%B3polis%20SP",
    phone: "(19) 99999-9999",
    secondaryPhone: "(19) 00000-0000",
    phoneHref: "https://wa.me/5519999999999",
    email: "colegioVivah@gmail.com",
    emailHref: "mailto:colegioVivah@gmail.com",
    instagram: "@colegiovivah",
    instagramHref: "https://instagram.com/colegiovivah",
    hours: "Segunda a sexta, das 7h às 18h",
  };

  const navLinks = navigationItems.filter(
    (item) =>
      item.href !== "/#turmas" &&
      item.href !== "/#inicio" &&
      item.href !== "/#contato" &&
      item.href !== "/contato",
  );

  return (
    <footer className="mt-20 bg-[var(--color-secondary)] text-white">
      <Container className="py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[1fr_1.2fr] xl:gap-12">
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr]">
            <div className="min-w-0">
              <Link
                href="/#inicio"
                className="inline-flex items-center text-2xl font-bold text-[var(--color-primary)]"
              >
                Colégio Vivá
              </Link>
              <p className="mt-4 text-sm leading-6 text-white/75">
                Educação com acolhimento, rotina e propósito. Um percurso que conecta
                sala de aula, projetos e parceria com as famílias.
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/#inicio" className="text-white/80 transition hover:text-white">
                    Início
                  </Link>
                </li>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/80 transition hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contato" className="text-white/80 transition hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
              Contato e atalhos
            </h3>

            <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_auto] xl:grid-cols-[1fr_280px] xl:gap-6">
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <Link
                    href={contact.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 break-words leading-5 transition hover:text-white"
                  >
                    {contact.address}
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <div className="min-w-0">
                    <Link
                      href={contact.phoneHref}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition hover:text-white"
                    >
                      {contact.phone}
                    </Link>
                    <span className="block text-white/55">{contact.secondaryPhone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <Link
                    href={contact.emailHref}
                    className="min-w-0 break-all transition hover:text-white"
                  >
                    {contact.email}
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <span>{contact.hours}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <Link
                    href={contact.instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {contact.instagram}
                  </Link>
                </li>
              </ul>

              <div className="grid h-fit gap-2">
                {homeQuickLinks.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:bg-white/10"
                  >
                    <span className="truncate">{item.titulo}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Colégio Vivá. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/calendario" className="transition hover:text-white/80">
              Calendário escolar
            </Link>
            <Link href="/galeria" className="transition hover:text-white/80">
              Galeria
            </Link>
            <Link href="/#inicio" className="transition hover:text-white/80">
              Voltar ao topo
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
