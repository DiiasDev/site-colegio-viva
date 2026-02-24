import Link from "next/link";
import { Container } from "../layout/Container";

export function HomeCtaSection() {
  return (
    <section id="contato" className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)] p-8 text-white shadow-[0_30px_70px_-48px_rgba(94,166,47,0.65)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.24),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(31,61,43,0.16),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                Visita e atendimento
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
                Venha conhecer o Colégio Vivá e conversar com a nossa equipe.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                A Home agora direciona melhor para o que importa: informações da escola,
                projetos pedagógicos, agenda e canais de contato para as famílias.
              </p>
            </div>

            <div className="grid gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:opacity-95"
              >
                Falar com a secretaria
              </Link>
              <Link
                href="/calendario"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Consultar calendário
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

