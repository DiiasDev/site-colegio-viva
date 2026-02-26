import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles, Images, ChevronRight } from "lucide-react";

import heroImage from "../../../public/Real/image4.png";

export default function CabecalhoGallery() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_35px_80px_-55px_rgba(31,61,43,0.42)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(122,193,67,0.2),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(244,180,0,0.14),transparent_40%),linear-gradient(180deg,rgba(249,250,247,0.95),rgba(255,255,255,0.98))]" />
      <div
        aria-hidden="true"
        className="absolute -left-14 top-16 h-40 w-40 rounded-full border border-[var(--color-primary-light)]/50 bg-[var(--color-map-wash)] blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-3rem] top-[-2rem] h-44 w-44 rounded-full bg-[var(--color-map-glow)]"
      />

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
            <Link href="/" className="transition hover:text-[var(--color-primary)]">
              Início
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[var(--color-secondary)]">Galeria</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-map-wash)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" />
            Registros do cotidiano Vivá
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
              Memórias que contam a rotina do Colégio Vivá
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
              Um espaço visual com momentos de aprendizagem, descobertas, brincadeiras
              e atividades que mostram a vivência das crianças em um ambiente acolhedor
              e estimulante.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white/85 p-4 backdrop-blur-sm">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-map-ink)] text-[var(--color-secondary)]">
                <Camera className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--color-secondary)]">
                Registros reais
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Momentos do dia a dia escolar.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white/85 p-4 backdrop-blur-sm">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-map-ink)] text-[var(--color-secondary)]">
                <Images className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--color-secondary)]">
                Categorias
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Navegação rápida por tema.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white/85 p-4 backdrop-blur-sm">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-map-ink)] text-[var(--color-secondary)]">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--color-secondary)]">
                Destaques
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                Experiências e projetos especiais.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-6 h-20 w-20 rounded-2xl border border-white/70 bg-white/80 shadow-lg backdrop-blur-sm" />
          <div className="absolute -right-1 bottom-8 h-24 w-24 rounded-[1.4rem] border border-[var(--color-primary-light)]/50 bg-[var(--color-map-wash)]" />

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white p-2 shadow-[0_24px_60px_-35px_rgba(31,61,43,0.36)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
              <Image
                src={heroImage}
                alt="Crianças em atividade no Colégio Vivá"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,61,43,0.25)] via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/35 bg-[rgba(31,61,43,0.72)] p-4 text-white backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.14em] text-white/80">
                Galeria institucional
              </p>
              <p className="mt-1 text-sm font-semibold">
                Aprender também é brincar, criar e descobrir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
