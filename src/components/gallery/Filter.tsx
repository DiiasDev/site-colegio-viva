"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

export type FilterOption = {
  label: string;
  value: string;
  count?: number;
};

type FilterProps = {
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
};

export default function Filter({ value, options, onChange }: FilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <div className="w-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_45px_-35px_rgba(31,61,43,0.45)] sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
            Filtro da Galeria
          </p>
          <h3 className="text-lg font-semibold text-[var(--color-secondary)]">
            Explore por categoria
          </h3>
        </div>
      </div>

      <FormControl fullWidth>
        <InputLabel
          id="gallery-filter-label"
          sx={{
            color: "var(--color-text-secondary)",
            "&.Mui-focused": { color: "var(--color-primary-dark)" },
          }}
        >
          Categoria
        </InputLabel>
        <Select
          labelId="gallery-filter-label"
          id="gallery-filter"
          value={value}
          label="Categoria"
          onChange={handleChange}
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
          sx={{
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
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <span className="flex w-full items-center justify-between gap-3">
                <span>{option.label}</span>
                {typeof option.count === "number" ? (
                  <span className="rounded-full bg-[var(--color-map-ink)] px-2 py-0.5 text-xs font-semibold text-[var(--color-secondary)]">
                    {option.count}
                  </span>
                ) : null}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
