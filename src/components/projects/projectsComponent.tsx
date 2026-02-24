"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  FlaskConical,
  HandHeart,
  Leaf,
  MapPin,
  Palette,
  Sparkles,
  Tag,
  UserRound,
} from "lucide-react";

import Cabecalho from "@/src/components/contact/Cabecalho";
import { pData, type ProjectCategory, type ProjectData } from "./projectsData";

const categoryOrder: Array<ProjectCategory | "Todos"> = [
  "Todos",
  "Sustentabilidade",
  "Ciência",
  "Leitura",
  "Arte",
  "Tecnologia",
  "Cidadania",
];

const iconMap: Record<ProjectData["icon"], LucideIcon> = {
  leaf: Leaf,
  flask: FlaskConical,
  book: BookOpen,
  palette: Palette,
  monitor: CircuitBoard,
  "heart-handshake": HandHeart,
};

function formatDate(date: string) {
  const [day, month, year] = date.split("/");
  const parsed = new Date(Number(year), Number(month) - 1, Number(day));

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

function getProjectHref(slug: string) {
  return `/projetos/${slug}`;
}

export default function ProjectsComponent({ project }: { project?: ProjectData }) {
  if (project) {
    return <ProjectDetail project={project} />;
  }

  return <ProjectsList />;
}

function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "Todos">("Todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return pData;
    }

    return pData.filter((item) => item.categoria === activeCategory);
  }, [activeCategory]);
  const hasMultipleProjects = filteredProjects.length > 1;

  const featuredProject = filteredProjects[0] ?? pData[0];
  const totalProjects = pData.length;
  const activeProjects = pData.filter((item) => item.status === "Em andamento").length;
  const openProjects = pData.filter((item) => item.status === "Inscrições abertas").length;

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Cabecalho title="Projetos" badge="Projetos" />

      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(122,193,67,0.18),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(244,180,0,0.10),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_-40px_rgba(31,61,43,0.35)] sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--color-primary)_35%,white)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                <Sparkles className="h-4 w-4" />
                Projetos do Colégio Vivá
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
                Aprendizagens com propósito, autoria e experiências reais
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                Nesta aba você encontra os projetos pedagógicos que conectam currículo, vivências e comunidade. Cada iniciativa foi pensada para ampliar repertório, estimular a curiosidade e fortalecer vínculos.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <StatCard label="Projetos mapeados" value={`${totalProjects}`} hint="Portfólio da escola" />
                <StatCard label="Em andamento" value={`${activeProjects}`} hint="Rotina ativa" />
                <StatCard label="Inscrições abertas" value={`${openProjects}`} hint="Oficinas e extras" />
              </div>
            </div>

            {featuredProject && <FeaturedProjectCard project={featuredProject} />}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                Explore por tema
              </p>
              <h2 className="mt-1 text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                Projetos em destaque da comunidade escolar
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
              <Tag className="h-4 w-4 text-[var(--color-primary-dark)]" />
              {filteredProjects.length} resultado(s)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOrder.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    active
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[0_10px_24px_-16px_rgba(122,193,67,0.7)]"
                      : "border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-secondary)]",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_20px_60px_-48px_rgba(31,61,43,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Como acompanhamos
            </p>
            <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)]">
              Projetos com planejamento, registros e socialização
            </h3>
            <div className="mt-5 space-y-3">
              {[
                "Objetivos claros e alinhados à proposta pedagógica",
                "Vivências práticas com protagonismo das crianças",
                "Registros do percurso e devolutivas para famílias",
                "Culminâncias, mostras ou momentos de partilha",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-dark)]" />
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--color-primary),var(--color-primary-light),var(--color-accent))]" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              Próximas ações
            </p>
            <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)]">
              Abra um projeto para ver cronograma, atividades e objetivos
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              Cada página de projeto traz informações completas para famílias e equipe: proposta, etapas, público atendido e destaques pedagógicos.
            </p>
            {featuredProject && (
              <Link
                href={getProjectHref(featuredProject.slug)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--color-secondary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Abrir projeto em destaque
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <div className={["mt-6 grid gap-5", hasMultipleProjects ? "xl:grid-cols-2" : ""].join(" ")}>
          {filteredProjects.map((item, index) => (
            <ProjectListCard
              key={item.slug}
              project={item}
              featured={index === 0}
              spanFull={index === 0 && hasMultipleProjects}
              compact={hasMultipleProjects && index !== 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">{value}</p>
      <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{hint}</p>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: ProjectData }) {
  const Icon = iconMap[project.icon];

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_24px_70px_-50px_rgba(31,61,43,0.35)] sm:p-7">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--color-map-glow)] blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(122,193,67,0.05))]" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
            <CalendarDays className="h-3.5 w-3.5" />
            {project.periodo}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]">
            <Tag className="h-3.5 w-3.5" />
            {project.categoria}
          </span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_35%,white)] bg-[color-mix(in_srgb,var(--color-primary)_14%,white)] text-[var(--color-primary-dark)]">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{project.subtitulo}</p>
            <h2 className="mt-1 text-2xl font-bold leading-tight text-[var(--color-secondary)]">
              {project.titulo}
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{project.resumo}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {project.metricas.slice(0, 3).map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[var(--color-border)] bg-white p-3">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-bold text-[var(--color-secondary)]">{metric.value}</p>
            </div>
          ))}
        </div>

        <Link
          href={getProjectHref(project.slug)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary-dark)]"
        >
          Ver página completa do projeto
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function ProjectListCard({
  project,
  featured,
  spanFull,
  compact,
}: {
  project: ProjectData;
  featured?: boolean;
  spanFull?: boolean;
  compact?: boolean;
}) {
  const Icon = iconMap[project.icon];

  return (
    <Link
      href={getProjectHref(project.slug)}
      className={[
        "group block overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_20px_60px_-50px_rgba(31,61,43,0.25)] transition",
        "hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-48px_rgba(31,61,43,0.33)]",
        spanFull ? "xl:col-span-2" : "",
      ].join(" ")}
    >
      <article
        className={[
          "grid gap-0",
          compact ? "grid-cols-1" : featured ? "lg:grid-cols-[0.95fr_1.05fr]" : "md:grid-cols-[0.72fr_1.28fr]",
        ].join(" ")}
      >
        <div
          className={[
            "relative overflow-hidden bg-[linear-gradient(160deg,rgba(122,193,67,0.18),rgba(244,180,0,0.12),rgba(31,61,43,0.10))] p-5 sm:p-6",
            compact ? "min-h-[120px]" : "min-h-[180px]",
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(122,193,67,0.25),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(244,180,0,0.16),transparent_50%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_28%,white)] bg-white/70 text-[var(--color-primary-dark)] backdrop-blur">
                <Icon className="h-5 w-5" />
              </span>
              <span
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  project.status === "Inscrições abertas"
                    ? "bg-[color-mix(in_srgb,var(--color-accent)_22%,white)] text-[var(--color-secondary)]"
                    : project.status === "Concluído"
                      ? "bg-[var(--color-border)] text-[var(--color-text-secondary)]"
                      : "bg-[color-mix(in_srgb,var(--color-primary)_16%,white)] text-[var(--color-primary-dark)]",
                ].join(" ")}
              >
                {project.status}
              </span>
            </div>

            <div>
              <p
                className={[
                  "font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]/80",
                  compact ? "line-clamp-2 text-[10px]" : "text-xs",
                ].join(" ")}
              >
                {project.imagem}
              </p>
              <p className="mt-2 text-sm text-[var(--color-secondary)]/80">{project.categoria}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
              <CalendarDays className="h-3.5 w-3.5" />
              {project.periodo}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
              <UserRound className="h-3.5 w-3.5" />
              {project.faixaEtaria}
            </span>
          </div>

          <h3
            className={[
              "mt-4 font-bold leading-tight text-[var(--color-secondary)]",
              compact ? "line-clamp-3 text-xl" : "text-xl sm:text-2xl",
            ].join(" ")}
          >
            {project.titulo}
          </h3>
          <p className={["mt-2 text-sm font-semibold text-[var(--color-primary-dark)]", compact ? "line-clamp-3" : ""].join(" ")}>
            {project.subtitulo}
          </p>
          <p className={["mt-3 text-sm leading-6 text-[var(--color-text-secondary)]", compact ? "line-clamp-4" : ""].join(" ")}>
            {project.resumo}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition group-hover:text-[var(--color-primary-dark)]">
            Abrir projeto
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}

function ProjectDetail({ project }: { project: ProjectData }) {
  const Icon = iconMap[project.icon];
  const relatedProjects = pData.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Cabecalho
        title={project.titulo}
        badge="Projetos"
        breadcrumbOverride={["Início", "Projetos", project.titulo]}
      />

      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(122,193,67,0.16),transparent_44%),radial-gradient(circle_at_85%_18%,rgba(244,180,0,0.10),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(249,250,247,1))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary-dark)]"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Voltar para todos os projetos
          </Link>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_24px_70px_-55px_rgba(31,61,43,0.35)] sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,white)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]">
                  <Tag className="h-3.5 w-3.5" />
                  {project.categoria}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Publicado em {formatDate(project.data)}
                </span>
                <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                  {project.status}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_35%,white)] bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] text-[var(--color-primary-dark)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary-dark)]">{project.subtitulo}</p>
                  <h1 className="mt-1 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl">
                    {project.titulo}
                  </h1>
                </div>
              </div>

              <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)]">{project.conteudo}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.metricas.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xl font-bold text-[var(--color-secondary)]">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <InfoPanel title="Informações do Projeto">
                <InfoRow icon={CalendarDays} label="Período" value={project.periodo} />
                <InfoRow icon={MapPin} label="Local" value={project.local} />
                <InfoRow icon={UserRound} label="Faixa etária" value={project.faixaEtaria} />
                <InfoRow icon={Sparkles} label="Coordenação" value={project.coordenacao} />
              </InfoPanel>

              <InfoPanel title="Público e propósito">
                <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-secondary)]">Público:</span> {project.publico}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-secondary)]">Objetivo:</span> {project.objetivo}
                </p>
              </InfoPanel>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Panel title="Atividades e vivências" subtitle="O que acontece ao longo do projeto">
              <div className="grid gap-3">
                {project.atividades.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-dark)]" />
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{activity}</p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Destaques pedagógicos" subtitle="Aspectos que dão identidade ao projeto">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.destaques.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
                  >
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{highlight}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="space-y-6">
            <Panel title="Cronograma" subtitle="Etapas previstas e organização do percurso">
              <div className="space-y-3">
                {project.cronograma.map((step, index) => (
                  <div
                    key={`${step.phase}-${step.period}`}
                    className="relative rounded-2xl border border-[var(--color-border)] bg-white p-4 pl-5"
                  >
                    <div className="absolute bottom-4 left-0 top-4 w-1 rounded-r-full bg-[linear-gradient(180deg,var(--color-primary),var(--color-primary-light))]" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-[var(--color-secondary)]">
                        {index + 1}. {step.phase}
                      </p>
                      <span className="rounded-full bg-[var(--color-background)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                        {step.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Impacto esperado" subtitle="Resultados observáveis e formação integral">
              <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{project.impactoEsperado}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        <section className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                Outros projetos
              </p>
              <h2 className="mt-1 text-2xl font-bold text-[var(--color-secondary)]">
                Continue explorando iniciativas da escola
              </h2>
            </div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-secondary)] hover:border-[var(--color-primary-light)]"
            >
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {relatedProjects.map((item) => (
              <ProjectMiniCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_20px_60px_-50px_rgba(31,61,43,0.25)] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">{title}</p>
      <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)]">{subtitle}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_20px_60px_-52px_rgba(31,61,43,0.2)]">
      <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[var(--color-primary-dark)]">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">{label}</p>
        <p className="mt-0.5 text-sm font-medium leading-5 text-[var(--color-secondary)]">{value}</p>
      </div>
    </div>
  );
}

function ProjectMiniCard({ project }: { project: ProjectData }) {
  const Icon = iconMap[project.icon];

  return (
    <Link
      href={getProjectHref(project.slug)}
      className="group rounded-[1.35rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_45px_-44px_rgba(31,61,43,0.25)] transition hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_30%,white)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] text-[var(--color-primary-dark)]">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
            {project.categoria}
          </p>
          <h3 className="mt-1 line-clamp-2 text-base font-bold leading-5 text-[var(--color-secondary)]">
            {project.titulo}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-[var(--color-text-secondary)]">
            {project.resumo}
          </p>
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary-dark)]">
        Abrir
        <ChevronRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
