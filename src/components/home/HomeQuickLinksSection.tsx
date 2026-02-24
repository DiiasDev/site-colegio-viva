import Link from "next/link";
import { Container } from "../layout/Container";
import { homeQuickLinks } from "./homeData";

export function HomeQuickLinksSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,#fff,rgba(255,255,255,0.9))] p-5 shadow-[0_24px_70px_-52px_rgba(31,61,43,0.35)] sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                Acesso rápido
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
                O que as famílias mais procuram
              </h2>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] shadow-[0_10px_20px_-18px_rgba(31,61,43,0.35)] transition hover:border-[var(--color-primary-light)]"
            >
              Falar com a secretaria
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {homeQuickLinks.map((atalho) => (
              <Link
                key={atalho.titulo}
                href={atalho.href}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--color-primary-light)] hover:bg-white hover:shadow-[0_20px_30px_-24px_rgba(31,61,43,0.3)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/45 to-[var(--color-primary)]/0 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-secondary)]">
                      {atalho.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {atalho.descricao}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]">
                    {atalho.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

