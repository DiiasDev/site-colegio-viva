"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

import type { SchoolClass } from "./classData";
import { dispatchOpenClassModal } from "./modals/classModal";

export default function CabecalhoClass({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="relative h-[220px] overflow-hidden sm:h-[260px] lg:h-[300px]">
        <Image
          src={schoolClass.capa.image}
          alt={schoolClass.capa.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,61,43,0.48),rgba(31,61,43,0.2)),linear-gradient(180deg,rgba(122,193,67,0.18),rgba(31,61,43,0.35))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(166,219,114,0.28),transparent_45%)]" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            <GraduationCap className="h-3.5 w-3.5" />
            Turmas
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.28)] sm:text-4xl lg:text-5xl">
            {schoolClass.turma}
          </h1>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/85 sm:text-sm">
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>{" "}
            <span className="mx-1">›</span> Turmas <span className="mx-1">›</span> {schoolClass.turma}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />

      <div className="absolute inset-x-0 -bottom-10 mx-auto hidden max-w-7xl px-4 sm:block sm:px-6 lg:px-8">
        <div className="h-20 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_40%,rgba(122,193,67,0.18),transparent_62%),rgba(255,255,255,0.65)] blur-2xl" />
      </div>

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
