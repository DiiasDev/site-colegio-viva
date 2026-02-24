import { Container } from "../layout/Container";
import { homePillars } from "./homeData";

export function HomeValueSection() {
  return (
    <section id="sobre" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.90))] p-6 shadow-[0_24px_60px_-48px_rgba(31,61,43,0.32)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Nosso diferencial
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
              Educação que combina acolhimento, consistência e experiências significativas.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              A Home foi reorganizada para mostrar o que faz sentido para o colégio:
              proposta pedagógica, rotina, projetos, acesso rápido para famílias e contato.
            </p>

            <div id="proposta" className="mt-6 grid gap-4">
              {homePillars.map((pilar) => (
                <div
                  key={pilar.titulo}
                  className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-background),#fff)] p-4 transition hover:border-[var(--color-primary-light)]"
                >
                  <h3 className="text-sm font-semibold text-[var(--color-secondary)] sm:text-base">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {pilar.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_-34px_rgba(31,61,43,0.26)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                Para famílias
              </p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)]">
                Informação rápida e útil
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                Acesso direto ao calendário, projetos, galeria e contato em uma navegação objetiva.
              </p>
            </div>

            <div
              id="turmas"
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-[var(--color-secondary)] p-6 text-white shadow-[0_22px_55px_-36px_rgba(31,61,43,0.55)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(122,193,67,0.24),transparent_45%),radial-gradient(circle_at_92%_10%,rgba(255,255,255,0.06),transparent_35%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Turmas
                </p>
                <h3 className="mt-2 text-xl font-bold">Consulta rápida por turma</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  O menu “Turmas” abre uma seleção com as classes disponíveis para acesso organizado ao conteúdo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

