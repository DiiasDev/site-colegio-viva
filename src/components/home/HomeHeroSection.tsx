import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(122,193,67,0.18),transparent_38%),radial-gradient(circle_at_88%_12%,rgba(31,61,43,0.10),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.3),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/50 to-transparent" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)] shadow-[0_12px_25px_-18px_rgba(31,61,43,0.28)]">
            Colégio Vivá
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
            Educação com vínculo e propósito
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl lg:text-6xl">
            Uma escola para aprender com
            <span className="text-[var(--color-primary)]"> curiosidade</span>,
            rotina e cuidado.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            No Colégio Vivá, cada etapa da infância é acompanhada com acolhimento,
            intencionalidade pedagógica e experiências que conectam sala de aula,
            projetos e participação das famílias.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_-20px_rgba(94,166,47,0.75)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]"
            >
              Agendar visita
            </Link>
            <Link
              href="/colegio-viva"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary-light)]/25"
            >
              Conhecer o colégio
            </Link>
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] shadow-[0_12px_24px_-20px_rgba(31,61,43,0.45)] transition hover:border-[var(--color-primary-light)] hover:-translate-y-0.5"
            >
              Ver projetos pedagógicos
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { titulo: "Educação Infantil", texto: "Cuidado, vínculo e descobertas" },
              { titulo: "Fundamental I", texto: "Base acadêmica com protagonismo" },
              { titulo: "Projetos vivos", texto: "Ciência, leitura, arte e sustentabilidade" },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-[0_16px_32px_-28px_rgba(31,61,43,0.45)] backdrop-blur"
              >
                <p className="text-sm font-semibold text-[var(--color-secondary)]">
                  {item.titulo}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[var(--color-primary-light)]/30 via-white/10 to-[var(--color-secondary)]/10 blur-2xl" />

          <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-[var(--color-surface)] shadow-[0_34px_90px_-42px_rgba(31,61,43,0.38)] sm:h-[430px] lg:h-[520px]">
            <Image
              src="/Real/image4.png"
              alt="Ambiente do Colégio Vivá"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,61,43,0.48)] via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Espaço acolhedor e seguro
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_24px_40px_-28px_rgba(31,61,43,0.45)] backdrop-blur sm:left-6 sm:right-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Rotina que conecta
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center sm:gap-3">
              {[
                { label: "Sala", valor: "Aprender" },
                { label: "Projeto", valor: "Explorar" },
                { label: "Família", valor: "Compartilhar" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-2 sm:px-3"
                >
                  <p className="text-[11px] font-medium text-[var(--color-text-secondary)]">
                    {item.label}
                  </p>
                  <p className="break-words text-xs font-semibold leading-tight text-[var(--color-secondary)] sm:text-sm">
                    {item.valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
