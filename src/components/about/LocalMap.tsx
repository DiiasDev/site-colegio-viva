"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Navigation, Phone } from "lucide-react";

const SCHOOL_LOCATION = {
  name: "Colégio Vivá",
  addressLine1: "Endereço completo da escola",
  addressLine2: "Hortolândia - SP",
  // coordinates: "-22.6517666, -47.1860287",
  visitHours: "Seg a Sex • 7h às 18h",
  phoneLabel: "(19) 99999-9999",
  mapsUrl:
    "https://www.google.com/maps?q=-22.65176660461467,-47.18602867024823",
  whatsappUrl: "https://wa.me/5519999999999",
};

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460.25606001885336!2d-47.186039!3d-22.651981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89244df46816b%3A0x4e34777d38e73597!2sCol%C3%A9gio%20Viv%C3%A1%20Educacional!5e0!3m2!1spt-BR!2sus!4v1771952488632!5m2!1spt-BR!2sus";

export function LocalMap() {
  return (
    <section
      aria-labelledby="localizacao-escola"
      className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8 shadow-[0_20px_60px_-40px_rgba(31,61,43,0.45)] sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[var(--color-map-glow)] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-36 w-36 rounded-full bg-[var(--color-primary-light)]/40 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1.25fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
            <MapPin className="h-4 w-4 text-[var(--color-primary-dark)]" />
            Nossa localização
          </div>

          <div className="space-y-3">
            <h2
              id="localizacao-escola"
              className="text-2xl font-bold leading-tight text-[var(--color-secondary)] sm:text-3xl"
            >
              Venha conhecer o ambiente onde a aprendizagem acontece
            </h2>
            <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              Um espaço acolhedor, seguro e pensado para o desenvolvimento
              integral dos alunos. Use o mapa para visualizar o entorno e
              planejar sua visita.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <MapPin className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Endereço
              </div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {SCHOOL_LOCATION.name}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {SCHOOL_LOCATION.addressLine1}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {SCHOOL_LOCATION.addressLine2}
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <Clock3 className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Atendimento
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {SCHOOL_LOCATION.visitHours}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <Phone className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Contato
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {SCHOOL_LOCATION.phoneLabel}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={SCHOOL_LOCATION.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href={SCHOOL_LOCATION.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-3 text-sm font-semibold text-[var(--color-secondary)] transition hover:bg-[var(--color-primary)]/15"
            >
              Agendar visita
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-8 -top-6 h-20 rounded-full bg-[var(--color-map-glow)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-[linear-gradient(145deg,var(--color-map-wash),#ffffff)] p-3 shadow-[0_24px_50px_-32px_rgba(31,61,43,0.5)]">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white/80 px-4 py-2 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                {SCHOOL_LOCATION.name} • Mapa da região
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-map-ink)]">
              <iframe
                src={EMBED_SRC}
                title="Mapa de localização do Colégio Vivá"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              Visitas guiadas
            </p>
            <p className="text-sm font-bold text-[var(--color-secondary)]">
              Agendamento rápido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalMap;
