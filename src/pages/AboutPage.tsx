import Image from "next/image";
import { MapPin, School } from "lucide-react";

import { NavigationsTab } from "../components/about/NavigationsTab";
import Cabecalho from "../components/contact/Cabecalho";
import { Container } from "../components/layout/Container";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-background)]">
      <Cabecalho title="Colégio Vivá" badge="Institucional" />

      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(122,193,67,0.15),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(31,61,43,0.08),transparent_38%)]" />

        <Container className="relative">
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-secondary),#173425)] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Sobre a experiência
              </p>
              <p className="mt-2 text-base font-semibold leading-snug">
                Conteúdo organizado em abas para leitura rápida e objetiva.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <MapPin className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Visita presencial
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Consulte a aba de localização para ver o mapa e planejar como chegar ao colégio.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <Image src="/icon-192.png" alt="" width={16} height={16} aria-hidden="true" />
                Colégio Vivá
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                História, proposta e estrutura em uma navegação única.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-3 shadow-[0_24px_60px_-44px_rgba(31,61,43,0.45)] backdrop-blur sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
              <School className="h-4 w-4 text-[var(--color-primary-dark)]" />
              Sobre o Colégio Vivá
            </div>

            <NavigationsTab />
          </div>
        </Container>
      </section>
    </main>
  );
}
