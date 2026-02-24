"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import type { CalendarEvent } from "./CalendarData";

type CalendarEventCardProps = {
  event: CalendarEvent;
};

export default function CalendarEventCard({ event }: CalendarEventCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_20px_50px_-38px_rgba(31,61,43,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-40px_rgba(31,61,43,0.42)]">
      <div className="grid gap-0 md:grid-cols-[240px_1fr]">
        <div className="relative min-h-[190px] md:min-h-full">
          <Image
            src={event.imagem}
            alt={event.titulo}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 240px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,61,43,0.18)] via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-secondary)] backdrop-blur-sm">
              {event.categoria}
            </span>
            {event.destaque ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-xs font-semibold text-[var(--color-secondary)]">
                <Star className="h-3.5 w-3.5" />
                Destaque
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Pill icon={CalendarDays}>{event.data}</Pill>
            <Pill icon={Clock3}>{event.horario}</Pill>
            {event.saida ? <Pill icon={Clock3}>Saída {event.saida}</Pill> : null}
          </div>

          <h3 className="mt-4 text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
            {event.titulo}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
            {event.texto}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <InfoRow icon={MapPin} label="Local" value={event.local} />
            <InfoRow icon={Users} label="Público" value={event.publico} />
            <InfoRow icon={GraduationCap} label="Etapas" value={event.etapa} />
            <InfoRow icon={Users} label="Responsável" value={event.responsavel} />
          </div>

          {event.observacao || event.vagas ? (
            <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              {event.vagas ? (
                <p className="text-sm font-semibold text-[var(--color-secondary)]">
                  {event.vagas}
                </p>
              ) : null}
              {event.observacao ? (
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {event.observacao}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Pill({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)]">
      <Icon className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" />
      {children}
    </span>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-3.5">
      <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
        <Icon className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" />
        {label}
      </p>
      <p className="mt-1.5 text-sm font-medium text-[var(--color-secondary)]">{value}</p>
    </div>
  );
}
