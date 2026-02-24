"use client";

import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Filter, Sparkles, X } from "lucide-react";
import { FormControl, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { DayPicker } from "react-day-picker";
import type { DateRange as PickerDateRange } from "react-day-picker";

export type CalendarQuickRangePreset = "1m" | "3m" | "6m" | "custom" | "none";

export type CalendarRangeValue = {
  start: Dayjs | null;
  end: Dayjs | null;
};

type CalendarFilterProps = {
  selectedRange: CalendarRangeValue;
  onRangeChange: (value: CalendarRangeValue) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedPreset: CalendarQuickRangePreset;
  onPresetChange: (value: CalendarQuickRangePreset) => void;
  categories: string[];
  totalCount: number;
  filteredCount: number;
  onClear: () => void;
};

const fieldSx = {
  borderRadius: "14px",
  backgroundColor: "var(--color-background)",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-border)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-primary-light)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-primary)",
  },
  "& .MuiSelect-select": {
    color: "var(--color-text-primary)",
    fontWeight: 500,
  },
};

const presetOptions: Array<{ value: CalendarQuickRangePreset; label: string }> = [
  { value: "1m", label: "1 mês" },
  { value: "3m", label: "3 meses" },
  { value: "6m", label: "6 meses" },
  { value: "custom", label: "Personalizado" },
];

export default function FilterCalendar({
  selectedRange,
  onRangeChange,
  selectedCategory,
  onCategoryChange,
  selectedPreset,
  onPresetChange,
  categories,
  totalCount,
  filteredCount,
  onClear,
}: CalendarFilterProps) {
  const handleCategoryChange = (event: SelectChangeEvent) => {
    onCategoryChange(event.target.value);
  };

  const pickerRange: PickerDateRange | undefined =
    selectedRange.start || selectedRange.end
      ? {
          from: selectedRange.start?.toDate(),
          to: selectedRange.end?.toDate(),
        }
      : undefined;

  return (
    <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_24px_55px_-38px_rgba(31,61,43,0.45)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
            <Filter className="h-3.5 w-3.5" />
            Filtro de agenda
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--color-secondary)]">
            Encontre eventos por período
          </h3>
          <p className="mt-1 text-sm leading-5 text-[var(--color-text-secondary)]">
            Escolha um período rápido ou use um intervalo personalizado no calendário.
          </p>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-primary-light)] hover:text-[var(--color-secondary)]"
        >
          <X className="h-3.5 w-3.5" />
          Limpar
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(122,193,67,0.06),rgba(31,61,43,0.02))] p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
          Períodos rápidos
        </p>
        <div className="grid grid-cols-2 gap-2">
          {presetOptions.map((option) => {
            const isActive = selectedPreset === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onPresetChange(option.value)}
                className={[
                  "rounded-xl border px-3 py-2.5 text-sm font-semibold transition",
                  isActive
                    ? "border-[var(--color-primary)] bg-[rgba(122,193,67,0.16)] text-[var(--color-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-secondary)]",
                ].join(" ")}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <RangeTag label="Início" value={selectedRange.start?.format("DD/MM/YYYY") ?? "Selecione"} />
          <RangeTag label="Fim" value={selectedRange.end?.format("DD/MM/YYYY") ?? "Selecione"} />
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
          Categoria
        </p>
        <FormControl fullWidth size="small">
          <Select
            id="calendar-category-filter"
            value={selectedCategory}
            inputProps={{ "aria-label": "Categoria" }}
            onChange={handleCategoryChange}
            sx={fieldSx}
            MenuProps={{
              PaperProps: {
                sx: {
                  mt: 1,
                  borderRadius: "14px",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 24px 50px -30px rgba(31,61,43,0.32)",
                },
              },
            }}
          >
            <MenuItem value="all">Todas as categorias</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {selectedPreset === "custom" ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_12px_35px_-28px_rgba(31,61,43,0.32)]">
          <div className="border-b border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(122,193,67,0.10),rgba(122,193,67,0.02))] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Personalizado
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Selecione início e fim no mesmo calendário.
            </p>
          </div>

          <div className="p-3">
            <DayPicker
              mode="range"
              locale={ptBR}
              numberOfMonths={1}
              selected={pickerRange}
              onSelect={(range) => {
                const nextStart = range?.from ? dayjs(range.from).startOf("day") : null;
                const nextEnd = range?.to ? dayjs(range.to).endOf("day") : null;
                const isFirstClickAutoRange =
                  nextStart &&
                  nextEnd &&
                  nextStart.isSame(nextEnd, "day") &&
                  selectedRange.end === null;

                onRangeChange({
                  start: nextStart,
                  end: isFirstClickAutoRange ? null : nextEnd,
                });
              }}
              showOutsideDays
              weekStartsOn={0}
              className="w-full"
              classNames={{
                months: "w-full",
                month: "w-full space-y-3",
                month_caption: "flex items-center justify-between px-1",
                caption_label:
                  "text-sm font-semibold capitalize text-[var(--color-secondary)] tracking-[0.01em]",
                nav: "flex items-center gap-1",
                button_previous:
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-secondary)]",
                button_next:
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-secondary)]",
                month_grid: "w-full border-separate border-spacing-y-1.5",
                weekdays: "",
                weekday:
                  "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]",
                week: "",
                day: "h-10 w-10 p-0 text-sm",
                day_button:
                  "relative flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-sm font-medium text-[var(--color-text-primary)] transition hover:border-[var(--color-primary-light)] hover:bg-[rgba(122,193,67,0.06)]",
                today: "",
                outside: "text-[var(--color-text-secondary)] opacity-45",
                disabled: "opacity-35",
                range_start: "",
                range_middle: "",
                range_end: "",
                selected: "",
              }}
              modifiersClassNames={{
                today: "[&>button]:border-[var(--color-primary-light)] [&>button]:text-[var(--color-secondary)]",
                range_start:
                  "rounded-l-xl bg-[rgba(122,193,67,0.12)] [&>button]:border-[var(--color-primary)] [&>button]:bg-[var(--color-primary)] [&>button]:text-white",
                range_middle:
                  "bg-[rgba(122,193,67,0.10)] [&>button]:rounded-none [&>button]:border-transparent",
                range_end:
                  "rounded-r-xl bg-[rgba(122,193,67,0.12)] [&>button]:border-[var(--color-primary)] [&>button]:bg-[var(--color-primary)] [&>button]:text-white",
                selected:
                  "[&>button]:border-[var(--color-primary)] [&>button]:bg-[var(--color-primary)] [&>button]:text-white",
              }}
              components={{
                Chevron: ({ orientation, className }) =>
                  orientation === "left" ? (
                    <ChevronLeft className={className} size={16} />
                  ) : (
                    <ChevronRight className={className} size={16} />
                  ),
              }}
            />
          </div>
        </div>
      ) : null}

      <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(122,193,67,0.10),rgba(31,61,43,0.03))] p-4">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
          <Sparkles className="h-3.5 w-3.5" />
          Resultado
        </p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-bold text-[var(--color-secondary)]">{filteredCount}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              evento{filteredCount === 1 ? "" : "s"} encontrado{filteredCount === 1 ? "" : "s"}
            </p>
          </div>
          <p className="text-xs text-right text-[var(--color-text-secondary)]">
            de {totalCount} no calendário anual
          </p>
        </div>
      </div>
    </div>
  );
}

function RangeTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">{value}</p>
    </div>
  );
}
