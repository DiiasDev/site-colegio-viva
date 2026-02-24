"use client";

import { CalendarRange } from "lucide-react";

import type { CalendarEvent } from "./CalendarData";
import CalendarEventCard from "./CalendarEventCard";

type CalendarMonthTimelineProps = {
  sections: Array<{
    key: string;
    label: string;
    events: CalendarEvent[];
  }>;
};

export default function CalendarMonthTimeline({ sections }: CalendarMonthTimelineProps) {
  return (
    <section className="space-y-8">
      {sections.map((section) => (
        <div key={section.key} className="relative">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-map-ink)] text-[var(--color-secondary)]">
              <CalendarRange className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                Mês
              </p>
              <h3 className="text-xl font-bold text-[var(--color-secondary)]">{section.label}</h3>
            </div>
            <span className="ml-auto rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)]">
              {section.events.length} evento{section.events.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="space-y-4">
            {section.events.map((event) => (
              <CalendarEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
