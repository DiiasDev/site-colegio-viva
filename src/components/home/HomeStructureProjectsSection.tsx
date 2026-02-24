import Link from "next/link";
import { Container } from "../layout/Container";
import { homeHighlights } from "./homeData";

export function HomeStructureProjectsSection() {
  return (
    <section id="estrutura" className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-secondary)] p-6 text-white shadow-[0_24px_60px_-40px_rgba(31,61,43,0.65)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(122,193,67,0.22),transparent_45%),radial-gradient(circle_at_92%_10%,rgba(255,255,255,0.06),transparent_35%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Estrutura e rotina
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Ambientes planejados para aprender, conviver e explorar.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
                Espaços pedagógicos, áreas de convivência e propostas integradas ajudam
                a transformar o dia escolar em experiências consistentes e acolhedoras.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Salas organizadas por faixa etária",
                  "Vivências em áreas externas",
                  "Projetos interdisciplinares ao longo do ano",
                  "Comunicação próxima com famílias",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5 shadow-[0_26px_70px_-52px_rgba(31,61,43,0.4)] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                  Projetos em destaque
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                  Experiências pedagógicas já cadastradas no projeto
                </h3>
              </div>
              <Link
                href="/projetos"
                className="text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)]"
              >
                Ver todos
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              {homeHighlights.map((projeto) => (
                <article
                  key={projeto.id}
                  className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-background),#fff)] p-4 transition hover:border-[var(--color-primary-light)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]">
                      {projeto.categoria}
                    </span>
                    <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                      {projeto.status}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">{projeto.periodo}</span>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-[var(--color-secondary)]">
                    {projeto.titulo}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {projeto.resumo}
                  </p>

                  <Link
                    href={`/projetos/${projeto.slug}`}
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)]"
                  >
                    Acessar projeto
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

