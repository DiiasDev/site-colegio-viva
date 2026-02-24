import Image from "next/image";
import { MapPin, School } from "lucide-react";

import { NavigationsTab } from "../components/about/NavigationsTab";
import { Container } from "../components/layout/Container";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-background)]">
      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(122,193,67,0.15),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(31,61,43,0.08),transparent_38%)]" />

        <Container className="relative">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/70 p-5 shadow-[0_30px_70px_-50px_rgba(31,61,43,0.45)] backdrop-blur sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[linear-gradient(180deg,rgba(122,193,67,0.12),rgba(122,193,67,0.06))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
                  <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md bg-white/80 ring-1 ring-[var(--color-primary)]/20">
                    <Image
                      src="/icon-192.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-4 w-4 object-contain"
                      aria-hidden="true"
                    />
                  </span>
                  Colégio Vivá
                </span>

                <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
                  Conheça de perto a nossa história, estrutura e localização
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                  Um espaço criado para apresentar a essência do Colégio Vivá
                  com navegação clara, visual moderno e informações que ajudam
                  as famílias a planejar a visita.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
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
                    Consulte a aba de localização para ver o mapa e planejar
                    como chegar ao colégio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-[var(--color-border)] bg-white/80 p-3 shadow-[0_24px_60px_-44px_rgba(31,61,43,0.45)] backdrop-blur sm:mt-8 sm:p-5">
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
