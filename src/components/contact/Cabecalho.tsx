import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, Sparkles } from "lucide-react";

import criancaImg from "../../../public/crianca1.png";
import { Container } from "../layout/Container";

export default function Cabecalho() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(122,193,67,0.18),transparent_38%),radial-gradient(circle_at_92%_18%,rgba(31,61,43,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(249,250,247,0.9))]" />

      <Container className="relative">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/75 p-5 shadow-[0_30px_70px_-48px_rgba(31,61,43,0.45)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                <Link href="/" className="transition hover:text-[var(--color-primary)]">
                  Início
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-[var(--color-secondary)]">Contato</span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
                <Sparkles className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Atendimento acolhedor
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
                Vamos conversar sobre o futuro do seu filho
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                Tire suas dúvidas, agende uma visita e conheça de perto o Colégio
                Vivá. Preparamos um canal rápido e humano para atender sua
                família.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#formulario-contato"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  Enviar mensagem
                </Link>
                <Link
                  href="https://wa.me/5519999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-secondary)]/15 bg-white px-5 py-3 text-sm font-semibold text-[var(--color-secondary)] transition hover:bg-[var(--color-background)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </Link>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Resposta rápida", "Atendimento em horário comercial"],
                  ["Visita guiada", "Conheça os ambientes da escola"],
                  ["Atendimento humano", "Equipe pronta para orientar"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-4"
                  >
                    <p className="text-sm font-semibold text-[var(--color-secondary)]">
                      {title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pb-14 sm:pb-12">
              <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[var(--color-map-glow)] blur-3xl" />
              <div className="pointer-events-none absolute -right-4 bottom-6 h-24 w-24 rounded-full bg-[var(--color-accent)]/25 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-[linear-gradient(160deg,rgba(122,193,67,0.08),rgba(255,255,255,0.95))] p-3 shadow-[0_22px_60px_-38px_rgba(31,61,43,0.42)]">
                <div className="mb-3 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white/85 px-4 py-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]">
                    Central de contato
                  </p>
                  <span className="rounded-full bg-[var(--color-primary)]/15 px-2.5 py-1 text-[10px] font-semibold text-[var(--color-secondary)]">
                    Colégio Vivá
                  </span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]">
                  <Image
                    src={criancaImg}
                    alt="Criança sorrindo no Colégio Vivá"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(31,61,43,0.82)] via-[rgba(31,61,43,0.45)] to-transparent p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                      Matrículas abertas
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-tight">
                      Um atendimento pensado para receber sua família com carinho.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-2 rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                  Agendamento
                </p>
                <p className="text-sm font-bold text-[var(--color-secondary)]">
                  Visita em poucos cliques
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
