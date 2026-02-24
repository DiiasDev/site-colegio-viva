"use client";

import { useMemo, useState } from "react";
import dayjs from "dayjs";

import Cabecalho from "@/src/components/contact/Cabecalho";
import CalendarEmptyState from "@/src/components/calendar/CalendarEmptyState";
import {
  calendarCategories,
  calendarData,
  parseCalendarDate,
  type CalendarEvent,
} from "@/src/components/calendar/CalendarData";
import FilterCalendar, {
  type CalendarRangeValue,
  type CalendarQuickRangePreset,
} from "@/src/components/calendar/filterCalendar";
import CalendarHeroInsights from "@/src/components/calendar/CalendarHeroInsights";
import CalendarMonthTimeline from "@/src/components/calendar/CalendarMonthTimeline";
import CalendarSidebar from "@/src/components/calendar/CalendarSidebar";

function sortByDate(events: CalendarEvent[]) {
  return [...events].sort((a, b) => parseCalendarDate(a.data).valueOf() - parseCalendarDate(b.data).valueOf());
}

function buildMonthSections(events: CalendarEvent[]) {
  const formatter = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" });
  const map = new Map<string, { key: string; label: string; events: CalendarEvent[]; order: number }>();

  for (const event of events) {
    const parsed = parseCalendarDate(event.data);
    const key = parsed.format("YYYY-MM");
    const existing = map.get(key);

    if (existing) {
      existing.events.push(event);
      continue;
    }

    map.set(key, {
      key,
      label: formatter.format(parsed.toDate()),
      events: [event],
      order: parsed.startOf("month").valueOf(),
    });
  }

  return [...map.values()]
    .sort((a, b) => a.order - b.order)
    .map((section) => ({ key: section.key, label: capitalize(section.label), events: sortByDate(section.events) }));
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPreset, setSelectedPreset] = useState<CalendarQuickRangePreset>("none");
  const [customRange, setCustomRange] = useState<CalendarRangeValue>({
    start: null,
    end: null,
  });

  const sortedEvents = useMemo(() => sortByDate(calendarData), []);
  const today = useMemo(() => dayjs().startOf("day"), []);

  const effectiveRange = useMemo<CalendarRangeValue>(() => {
    if (selectedPreset === "custom") return customRange;
    if (selectedPreset === "1m") return { start: today, end: today.add(1, "month").endOf("day") };
    if (selectedPreset === "3m") return { start: today, end: today.add(3, "month").endOf("day") };
    if (selectedPreset === "6m") return { start: today, end: today.add(6, "month").endOf("day") };
    return { start: null, end: null };
  }, [customRange, selectedPreset, today]);

  const filteredEvents = useMemo(() => {
    const { start: rangeStart, end: rangeEnd } = effectiveRange;
    const shouldApplyRange =
      selectedPreset !== "custom" || (selectedPreset === "custom" && rangeStart && rangeEnd);

    return sortedEvents.filter((event) => {
      const eventDate = parseCalendarDate(event.data);
      if (selectedCategory !== "all" && event.categoria !== selectedCategory) return false;
      if (shouldApplyRange && rangeStart && eventDate.isBefore(rangeStart, "day")) return false;
      if (shouldApplyRange && rangeEnd && eventDate.isAfter(rangeEnd, "day")) return false;

      return true;
    });
  }, [effectiveRange, selectedCategory, selectedPreset, sortedEvents]);

  const upcomingEvents = useMemo(
    () => sortedEvents.filter((event) => !parseCalendarDate(event.data).isBefore(today, "day")),
    [sortedEvents, today],
  );

  const nextEvent = upcomingEvents[0] ?? null;
  const highlightedEvents = useMemo(
    () => sortedEvents.filter((event) => event.destaque),
    [sortedEvents],
  );
  const monthSections = useMemo(() => buildMonthSections(filteredEvents), [filteredEvents]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedPreset("none");
    setCustomRange({ start: null, end: null });
  };

  const handlePresetChange = (preset: CalendarQuickRangePreset) => {
    setSelectedPreset(preset);

    if (preset !== "custom") {
      setCustomRange({ start: null, end: null });
    }
  };

  return (
    <main className="bg-[var(--color-background)]">
      <Cabecalho title="Calendário Escolar" badge="Calendário" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:gap-8 lg:px-8 lg:py-10">
        <CalendarHeroInsights
          totalEvents={sortedEvents.length}
          upcomingEvents={upcomingEvents.length}
          highlightedEvents={highlightedEvents.length}
          nextEvent={nextEvent}
        />

        <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
            <FilterCalendar
              selectedRange={effectiveRange}
              onRangeChange={setCustomRange}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPreset={selectedPreset}
              onPresetChange={handlePresetChange}
              categories={calendarCategories}
              totalCount={sortedEvents.length}
              filteredCount={filteredEvents.length}
              onClear={clearFilters}
            />
            <CalendarSidebar highlightedEvents={highlightedEvents} />
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_50px_-38px_rgba(31,61,43,0.3)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                    Agenda filtrada
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                    {filteredEvents.length > 0
                      ? "Eventos disponíveis para sua seleção"
                      : "Nenhum evento para os filtros aplicados"}
                  </h2>
                </div>
                <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">
                  {effectiveRange.start || effectiveRange.end
                    ? `${effectiveRange.start?.format("DD/MM/YYYY") ?? "Início"} - ${
                        effectiveRange.end?.format("DD/MM/YYYY") ?? "Fim"
                      }`
                    : "Sem período definido"}
                </div>
              </div>
            </section>

            {monthSections.length ? (
              <CalendarMonthTimeline sections={monthSections} />
            ) : (
              <CalendarEmptyState onReset={clearFilters} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
