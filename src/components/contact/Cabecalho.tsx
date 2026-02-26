"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";

import defaultHero from "../../../public/Real/image4.png";

type CabecalhoProps = {
  title?: string;
  badge?: string;
  backgroundImage?: StaticImageData | string;
  backgroundAlt?: string;
  breadcrumbOverride?: string[];
};

const LABEL_MAP: Record<string, string> = {
  contato: "Contato",
  galeria: "Galeria",
  calendario: "Calendário",
  projetos: "Projetos",
  class: "Turmas",
  "colegio-viva": "Colégio Vivá",
};

function formatSegment(segment: string) {
  const mapped = LABEL_MAP[segment];
  if (mapped) return mapped;

  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getBreadcrumbLabels(pathname: string | null): string[] {
  if (!pathname || pathname === "/") return ["Início"];

  const segments = pathname.split("/").filter(Boolean);
  return ["Início", ...segments.map(formatSegment)];
}

export default function Cabecalho({
  title,
  badge,
  backgroundImage = defaultHero,
  backgroundAlt = "Imagem de destaque do Colégio Vivá",
  breadcrumbOverride,
}: CabecalhoProps) {
  const pathname = usePathname();
  const breadcrumb = breadcrumbOverride ?? getBreadcrumbLabels(pathname);
  const currentTitle = title ?? breadcrumb[breadcrumb.length - 1] ?? "Página";
  const currentBadge = badge ?? (breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2] ?? "Página" : "Página");

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="relative h-[220px] overflow-hidden sm:h-[260px] lg:h-[300px]">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
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
            {currentBadge}
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.28)] sm:text-4xl lg:text-5xl">
            {currentTitle}
          </h1>

          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-xs font-medium uppercase tracking-[0.2em] text-white/85 sm:text-sm">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;
              const href = index === 0 ? "/" : null;

              return (
                <span key={`${item}-${index}`} className="inline-flex items-center">
                  {href ? (
                    <Link href={href} className="transition hover:text-white">
                      {item}
                    </Link>
                  ) : (
                    <span>{item}</span>
                  )}
                  {!isLast ? <span className="mx-2">›</span> : null}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
