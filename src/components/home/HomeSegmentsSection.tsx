import Link from "next/link";
import { Container } from "../layout/Container";
import { homeSegments } from "./homeData";

export function HomeSegmentsSection() {
  return (
    <section id="segmentos" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Segmentos
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
              Percursos pensados para cada fase
            </h2>
          </div>
          <Link
            href="/colegio-viva"
            className="text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)]"
          >
            Ver mais sobre a escola
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {homeSegments.map((segmento) => (
            <article
              key={segmento.nome}
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_40px_-34px_rgba(31,61,43,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_45px_-34px_rgba(31,61,43,0.4)]"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[2rem] bg-[radial-gradient(circle_at_80%_20%,rgba(122,193,67,0.18),transparent_65%)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                {segmento.faixa}
              </p>
              <h3 className="mt-3 text-xl font-bold text-[var(--color-secondary)]">
                {segmento.nome}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                {segmento.descricao}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

