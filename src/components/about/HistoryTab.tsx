import { BookOpenText, GraduationCap, Sparkles } from "lucide-react";

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

export function HistoryTab() {
  return (
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
            Cada etapa da nossa trajetória fortalece um compromisso: ensinar
            com excelência sem abrir mão do acolhimento.
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
  );
}

export default HistoryTab;
