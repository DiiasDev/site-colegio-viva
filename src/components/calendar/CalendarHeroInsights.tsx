"use client";

import type { ComponentType } from "react";
import { CalendarDays, MapPin, Sparkles, Users } from "lucide-react";

import type { CalendarEvent } from "./CalendarData";

type CalendarHeroInsightsProps = {
  totalEvents: number;
  upcomingEvents: number;
  highlightedEvents: number;
  nextEvent: CalendarEvent | null;
};

export default function CalendarHeroInsights({
  totalEvents,
  upcomingEvents,
  highlightedEvents,
  nextEvent,
}: CalendarHeroInsightsProps) {
  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_28px_70px_-45px_rgba(31,61,43,0.42)]">
      <div className="relative p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(122,193,67,0.18),transparent_45%),radial-gradient(circle_at_88%_20%,rgba(244,180,0,0.14),transparent_40%)]" />

        <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              <Sparkles className="h-3.5 w-3.5" />
              Agenda Viva 2026
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-[var(--color-secondary)] sm:text-3xl">
              Um calendário pensado para famílias, experiências e rotina pedagógica.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              Acompanhe eventos, passeios, reuniões e projetos especiais em uma agenda visual, organizada e fácil de filtrar por data.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MetricCard label="Eventos no ano" value={String(totalEvents)} icon={CalendarDays} />
              <MetricCard label="Próximos" value={String(upcomingEvents)} icon={Sparkles} />
              <MetricCard label="Destaques" value={String(highlightedEvents)} icon={Users} />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white/85 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Próximo compromisso
            </p>

            {nextEvent ? (
              <>
                <h3 className="mt-3 text-xl font-bold text-[var(--color-secondary)]">
                  {nextEvent.titulo}
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[var(--color-primary-dark)]" />
                    <span>
                      {nextEvent.data} às {nextEvent.horario}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-primary-dark)]" />
                    <span>{nextEvent.local}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {nextEvent.texto}
                </p>
              </>
            ) : (
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                Nenhum evento futuro encontrado no momento.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
          {label}
        </p>
        <Icon className="h-4 w-4 text-[var(--color-primary-dark)]" />
      </div>
      <p className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">{value}</p>
    </div>
  );
}
