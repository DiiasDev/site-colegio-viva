"use client";

import type { ComponentType } from "react";
import { ChevronRight, Clock3, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

import type { SchoolClass } from "./classData";
import { dispatchOpenClassModal } from "./modals/classModal";
import Cabecalho from "../contact/Cabecalho";

export default function CabecalhoClass({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <Cabecalho
        title={schoolClass.turma}
        badge="Turmas"
        backgroundImage={schoolClass.capa.image}
        backgroundAlt={schoolClass.capa.alt}
        breadcrumbOverride={["Início", "Turmas", schoolClass.turma]}
      />

      <div className="relative bg-[radial-gradient(circle_at_18%_20%,rgba(122,193,67,0.22),transparent_50%),radial-gradient(circle_at_86%_16%,rgba(31,61,43,0.1),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,250,247,0.95))]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)] shadow-[0_10px_30px_-24px_rgba(31,61,43,0.35)]">
                <GraduationCap className="h-4 w-4" />
                Turmas Vivá
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl">
                {schoolClass.turma}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
                {schoolClass.resumo}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Pill icon={Clock3} label={schoolClass.periodo} />
                <Pill icon={ShieldCheck} label={schoolClass.vagas} />
                <Pill icon={Sparkles} label={schoolClass.faixaEtaria} />
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[var(--color-border)] bg-white/90 p-5 shadow-[0_26px_60px_-42px_rgba(31,61,43,0.45)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
                Destaque da turma
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-secondary)]">
                {schoolClass.destaque}
              </p>
              <button
                type="button"
                onClick={dispatchOpenClassModal}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:text-[var(--color-secondary)]"
              >
                Ver outras turmas
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/90 px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">
      <Icon className="h-4 w-4 text-[var(--color-primary-dark)]" />
      {label}
    </span>
  );
}
