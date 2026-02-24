"use client";

import { CalendarX2, RefreshCcw } from "lucide-react";

type CalendarEmptyStateProps = {
  onReset: () => void;
};

export default function CalendarEmptyState({ onReset }: CalendarEmptyStateProps) {
  return (
    <section className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center shadow-[0_18px_45px_-35px_rgba(31,61,43,0.35)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-map-ink)] text-[var(--color-secondary)]">
        <CalendarX2 className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-[var(--color-secondary)]">
        Nenhum evento encontrado
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
        Ajuste a data ou a categoria selecionada para visualizar outros eventos do calendário.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
      >
        <RefreshCcw className="h-4 w-4" />
        Limpar filtros
      </button>
    </section>
  );
}
