"use client";

import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { ChevronRight, Sparkles, type LucideIcon } from "lucide-react";

type IntroTabItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

interface IntroComponentProps {
  activeTabLabel: string;
  tabItems: readonly IntroTabItem[];
}

export function IntroComponent({
  activeTabLabel,
  tabItems,
}: IntroComponentProps) {
  return (
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
  );
}

export default IntroComponent;
