"use client";

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  BookOpenCheck,
  Camera,
  Sparkles,
  UsersRound,
} from "lucide-react";

import CabecalhoClass from "./CabecalhoClass";
import type { ClassTabId, SchoolClass } from "./classData";

const tabs: { id: ClassTabId; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { id: "apresentacao", label: "Apresentação", icon: Sparkles },
  { id: "grade", label: "Grade", icon: BookOpenCheck },
  { id: "profissionais", label: "Profissionais Responsáveis", icon: UsersRound },
  { id: "fotos", label: "Fotos", icon: Camera },
];

export default function ClassComponent({ schoolClass }: { schoolClass: SchoolClass }) {
  const [activeTab, setActiveTab] = useState<ClassTabId>("apresentacao");

  return (
    <main className="bg-[var(--color-background)]">
      <CabecalhoClass schoolClass={schoolClass} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_24px_60px_-48px_rgba(31,61,43,0.45)]">
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "group flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition",
                    active
                      ? "border-[var(--color-primary)] bg-[color-mix(in_srgb,var(--color-primary)_14%,white)] shadow-[0_12px_26px_-18px_rgba(122,193,67,0.65)]"
                      : "border-transparent bg-white hover:border-[var(--color-border)] hover:bg-[var(--color-background)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex h-9 w-9 items-center justify-center rounded-xl border transition",
                      active
                        ? "border-[color-mix(in_srgb,var(--color-primary)_35%,white)] bg-white text-[var(--color-primary-dark)]"
                        : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-secondary)]",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={[
                      "text-sm font-semibold leading-5",
                      active ? "text-[var(--color-secondary)]" : "text-[var(--color-text-secondary)]",
                    ].join(" ")}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          {activeTab === "apresentacao" && <PresentationTab schoolClass={schoolClass} />}
          {activeTab === "grade" && <GradeTab schoolClass={schoolClass} />}
          {activeTab === "profissionais" && <ProfessionalsTab schoolClass={schoolClass} />}
          {activeTab === "fotos" && <PhotosTab schoolClass={schoolClass} />}
        </div>
      </section>
    </main>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_30px_70px_-54px_rgba(31,61,43,0.42)]">
      {children}
    </div>
  );
}

function PresentationTab({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <Panel>
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
            Apresentação
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-secondary)] sm:text-3xl">
            {schoolClass.apresentacao.headline}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
            {schoolClass.apresentacao.description}
          </p>

          <div className="mt-6 grid gap-3">
            {schoolClass.apresentacao.pillars.map((pillar) => (
              <div
                key={pillar}
                className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_22%,white)] text-[var(--color-primary-dark)]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-[var(--color-text-primary)]">{pillar}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(122,193,67,0.09),rgba(122,193,67,0.03))] p-6 sm:p-8 lg:border-l lg:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
            Rotina da Turma
          </p>
          <div className="mt-4 space-y-3">
            {schoolClass.apresentacao.rotina.map((item, index) => (
              <div key={item.label} className="relative rounded-2xl border border-white/70 bg-white/80 p-4">
                <span className="absolute left-4 top-0 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-white px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

function GradeTab({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <Panel>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
              Grade
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
              Campos de experiências e focos pedagógicos
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
            <BookOpenCheck className="h-4 w-4 text-[var(--color-primary-dark)]" />
            Planejamento vivo e contextualizado
          </span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {schoolClass.grade.map((item) => (
            <article
              key={item.area}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_45px_-38px_rgba(31,61,43,0.45)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-primary-dark)]">
                {item.area}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-secondary)]">{item.focus}</h3>
              <ul className="mt-4 space-y-2">
                {item.experiences.map((experience) => (
                  <li key={experience} className="flex items-start gap-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function ProfessionalsTab({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <Panel>
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
          Profissionais Responsáveis
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
          Equipe que acompanha a jornada da turma
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {schoolClass.profissionais.map((professional) => (
            <article
              key={`${professional.role}-${professional.name}`}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--color-primary),var(--color-primary-light))]" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-primary-dark)]">
                {professional.role}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-secondary)]">{professional.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{professional.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function PhotosTab({ schoolClass }: { schoolClass: SchoolClass }) {
  return (
    <Panel>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-dark)]">
              Fotos
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
              Registros da rotina do {schoolClass.turma}
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
            <Camera className="h-4 w-4 text-[var(--color-primary-dark)]" />
            Vivências reais da turma
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {schoolClass.fotos.map((photo, index) => (
            <figure
              key={`${photo.alt}-${index}`}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,61,43,0.34)] via-transparent to-transparent opacity-80" />
              </div>
              <figcaption className="p-4">
                <p className="text-sm font-semibold text-[var(--color-secondary)]">{photo.caption}</p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{photo.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Panel>
  );
}
