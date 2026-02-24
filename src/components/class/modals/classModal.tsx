"use client";

import Link from "next/link";
import { useMemo } from "react";
import { X, Sparkles, ArrowUpRight, Clock3, ShieldCheck, School2 } from "lucide-react";

import { classData } from "../classData";

export const CLASS_MODAL_OPEN_EVENT = "colegio-viva:open-class-modal";

export function dispatchOpenClassModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CLASS_MODAL_OPEN_EVENT));
}

type ClassModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ClassModal({ open, onClose }: ClassModalProps) {
  const totalClasses = classData.length;
  const subtitle = useMemo(() => {
    if (totalClasses === 0) return "Nenhuma turma cadastrada no momento.";
    if (totalClasses === 1) return "1 turma disponível para apresentação.";
    return `${totalClasses} turmas disponíveis para apresentação.`;
  }, [totalClasses]);
  const groupedClasses = useMemo(() => {
    const order = ["Maternal", "Infantil"] as const;
    return order
      .map((categoria) => ({
        categoria,
        items: classData.filter((item) => item.categoria === categoria),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-[rgba(10,18,14,0.55)] p-3 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="class-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[1.8rem] border border-white/20 bg-[var(--color-surface)] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(122,193,67,0.18),transparent_42%),radial-gradient(circle_at_92%_12%,rgba(31,61,43,0.08),transparent_38%)]" />

        <div className="relative border-b border-[var(--color-border)] px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                <Sparkles className="h-3.5 w-3.5" />
                Escolha a turma
              </div>
              <h2 id="class-modal-title" className="mt-3 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
                Conheça nossas turmas
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{subtitle}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] transition hover:text-[var(--color-secondary)]"
              aria-label="Fechar modal de turmas"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <div className="space-y-6">
            {groupedClasses.map((group) => (
              <section key={group.categoria} className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {group.categoria}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                    {group.items.length} turma{group.items.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/class/${item.slug}`}
                      onClick={onClose}
                      className="group relative overflow-hidden rounded-[1.3rem] border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_40px_-34px_rgba(31,61,43,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-36px_rgba(31,61,43,0.45)]"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(122,193,67,0.18),transparent_70%)]" />

                      <div className="relative">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] text-[var(--color-primary-dark)]">
                          <School2 className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-[var(--color-secondary)]">{item.turma}</h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                          {item.destaque}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                            <Clock3 className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" />
                            {item.faixaEtaria}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                            <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-primary-dark)]" />
                            {item.vagas}
                          </span>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)] transition group-hover:text-[var(--color-secondary)]">
                          Ver apresentação da turma
                          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {classData.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-background)] p-8 text-center">
              <p className="text-lg font-semibold text-[var(--color-secondary)]">Nenhuma turma cadastrada</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Adicione itens em <code className="rounded bg-white px-1.5 py-0.5">classData.ts</code> para exibir aqui.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
