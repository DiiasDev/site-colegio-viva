"use client";

import type { ComponentType } from "react";
import { BellRing, CalendarDays, CheckCircle2, Star, Users } from "lucide-react";

import type { CalendarEvent } from "./CalendarData";

type CalendarSidebarProps = {
  highlightedEvents: CalendarEvent[];
};

export default function CalendarSidebar({ highlightedEvents }: CalendarSidebarProps) {
  const topHighlights = highlightedEvents.slice(0, 4);

  return (
    <aside className="space-y-4">
      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_45px_-35px_rgba(31,61,43,0.4)]">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
          <Star className="h-3.5 w-3.5" />
          Destaques do ano
        </p>

        <div className="mt-4 space-y-3">
          {topHighlights.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                {event.data}
              </p>
              <h4 className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                {event.titulo}
              </h4>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                {event.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(31,61,43,0.98),rgba(31,61,43,0.88))] p-5 text-white shadow-[0_22px_55px_-35px_rgba(31,61,43,0.55)]">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
          <BellRing className="h-3.5 w-3.5" />
          Como acompanhar
        </p>
        <h3 className="mt-2 text-lg font-semibold">Organize sua rotina com a agenda escolar</h3>
        <div className="mt-4 space-y-3 text-sm text-white/85">
          <SidebarTip icon={CalendarDays} text="Use o filtro por data para localizar um dia específico." />
          <SidebarTip icon={Users} text="Confira o público de cada evento antes de se programar." />
          <SidebarTip icon={CheckCircle2} text="Observe avisos de saída, vagas e autorizações nas descrições." />
        </div>
      </section>
    </aside>
  );
}

function SidebarTip({
  icon: Icon,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-3">
      <Icon className="mt-0.5 h-4 w-4 text-[var(--color-primary-light)]" />
      <p>{text}</p>
    </div>
  );
}
