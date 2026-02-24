"use client";

import Link from "next/link";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  BookOpenText,
  Building2,
  ChevronRight,
  Compass,
  GraduationCap,
  Leaf,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { LocalMap } from "./LocalMap";

const historyHighlights = [
  {
    year: "2012",
    title: "Início do projeto educacional",
    description:
      "Nascimento da proposta com foco em acolhimento, vínculo com as famílias e excelência acadêmica.",
    icon: GraduationCap,
  },
  {
    year: "2018",
    title: "Expansão pedagógica",
    description:
      "Ampliação de ambientes de aprendizagem e fortalecimento de práticas interdisciplinares.",
    icon: BookOpenText,
  },
  {
    year: "Hoje",
    title: "Formação integral em evolução",
    description:
      "Uma escola viva, conectada ao presente e comprometida com o desenvolvimento humano dos alunos.",
    icon: Sparkles,
  },
];

const infrastructureItems = [
  {
    title: "Ambientes planejados",
    description: "Salas acolhedoras, bem iluminadas e preparadas para diferentes dinâmicas de aula.",
    icon: Building2,
  },
  {
    title: "Segurança e cuidado",
    description: "Rotinas de acompanhamento e estrutura pensada para tranquilidade das famílias.",
    icon: ShieldCheck,
  },
  {
    title: "Convivência ativa",
    description: "Espaços para socialização, projetos e experiências que fortalecem autonomia.",
    icon: Users,
  },
  {
    title: "Contato com natureza",
    description: "Ambiente escolar que valoriza bem-estar, respiro e experiências significativas.",
    icon: Leaf,
  },
];

const tabItems = [
  { value: "historia", label: "História", icon: BookOpenText },
  { value: "infraestrutura", label: "Infraestrutura", icon: School },
  { value: "localizacao", label: "Localização", icon: Compass },
] as const;

export function NavigationsTab() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabItems)[number]["value"]>("historia");

  const activeTabLabel =
    tabItems.find((tab) => tab.value === activeTab)?.label ?? "História";

  return (
    <section
      aria-labelledby="sobre-tabs-title"
      className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,#fff,var(--color-background))] p-4 shadow-[0_24px_60px_-42px_rgba(31,61,43,0.45)] sm:p-6"
    >
      <div className="pointer-events-none absolute -top-14 left-10 h-36 w-36 rounded-full bg-[var(--color-map-glow)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 right-6 h-40 w-40 rounded-full bg-[var(--color-primary-light)]/25 blur-3xl" />

      <Tabs.Root
        value={activeTab}
        onValueChange={(value) =>
          setActiveTab(value as (typeof tabItems)[number]["value"])
        }
        className="relative"
      >
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <nav
                aria-label="Breadcrumb da seção Sobre"
                className="inline-flex flex-wrap items-center gap-1 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-2 text-xs font-medium text-[var(--color-text-secondary)] backdrop-blur"
              >
                <Link
                  href="/"
                  className="transition hover:text-[var(--color-secondary)]"
                >
                  Início
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-[var(--color-text-secondary)]/70" />
                <Link
                  href="/colegio-viva"
                  className="transition hover:text-[var(--color-secondary)]"
                >
                  Colégio Vivá
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-[var(--color-text-secondary)]/70" />
                <span className="font-semibold text-[var(--color-secondary)]">
                  {activeTabLabel}
                </span>
              </nav>

              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
                <Sparkles className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Conheça o Colégio
              </span>
            </div>

            <div className="space-y-2">
              <h2
                id="sobre-tabs-title"
                className="text-2xl font-bold leading-tight text-[var(--color-secondary)] sm:text-3xl"
              >
                Uma escola feita de história, estrutura e presença
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
                Explore os pilares que compõem a experiência do Colégio Vivá e
                descubra como nossa proposta se materializa no dia a dia.
              </p>
            </div>
          </div>

          <Tabs.List
            aria-label="Navegação de conteúdo sobre o colégio"
            className="grid grid-cols-1 gap-2 rounded-2xl border border-[var(--color-border)] bg-white/80 p-2 backdrop-blur sm:grid-cols-3"
          >
            {tabItems.map((tab) => {
              const Icon = tab.icon;

              return (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-text-secondary)] outline-none transition hover:bg-[var(--color-background)] data-[state=active]:bg-[var(--color-secondary)] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[rgba(31,61,43,0.22)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-transparent transition group-data-[state=active]:bg-white/10">
                    <Icon className="h-4 w-4 shrink-0 stroke-[2.2] transition group-data-[state=active]:text-[var(--color-primary-light)]" />
                  </span>
                  {tab.label}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </div>

        <Tabs.Content value="historia" className="outline-none">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <BookOpenText className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Nossa história
              </div>

              <div className="space-y-4">
                {historyHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${item.year}-${item.title}`}
                      className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary-dark)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                            {item.year}
                          </p>
                          <h3 className="text-base font-semibold text-[var(--color-secondary)]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-secondary),#173425)] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Propósito
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight">
                  Educação com afeto, rigor e visão de futuro
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Cada etapa da nossa trajetória fortalece um compromisso:
                  ensinar com excelência sem abrir mão do acolhimento.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                  Diferenciais em foco
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[var(--color-background)] p-4">
                    <p className="text-2xl font-bold text-[var(--color-secondary)]">
                      +10
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      anos de evolução
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[var(--color-background)] p-4">
                    <p className="text-2xl font-bold text-[var(--color-secondary)]">
                      100%
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      foco no aluno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="infraestrutura" className="outline-none">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <Building2 className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Infraestrutura e acolhimento
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {infrastructureItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]/30 hover:shadow-[0_16px_30px_-26px_rgba(31,61,43,0.55)]"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-primary-dark)] shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--color-secondary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(122,193,67,0.12),rgba(255,255,255,0.95))] p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                <Sparkles className="h-4 w-4 text-[var(--color-primary-dark)]" />
                Experiência de aprendizagem
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                    Ambiente
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)]">
                    Espaços organizados para favorecer concentração, criatividade
                    e colaboração, com identidade visual acolhedora e funcional.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                    Rotina
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)]">
                    Fluxos escolares planejados para recepção, permanência e
                    acompanhamento próximo das famílias.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                    Cultura
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)]">
                    Estrutura a serviço da proposta pedagógica: ensinar bem,
                    cuidar melhor e construir pertencimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="localizacao" className="outline-none">
          <LocalMap />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}

export default NavigationsTab;
