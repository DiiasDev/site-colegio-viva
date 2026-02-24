import { Building2, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";

const infrastructureItems = [
  {
    title: "Ambientes planejados",
    description:
      "Salas acolhedoras, bem iluminadas e preparadas para diferentes dinâmicas de aula.",
    icon: Building2,
  },
  {
    title: "Segurança e cuidado",
    description:
      "Rotinas de acompanhamento e estrutura pensada para tranquilidade das famílias.",
    icon: ShieldCheck,
  },
  {
    title: "Convivência ativa",
    description:
      "Espaços para socialização, projetos e experiências que fortalecem autonomia.",
    icon: Users,
  },
  {
    title: "Contato com natureza",
    description:
      "Ambiente escolar que valoriza bem-estar, respiro e experiências significativas.",
    icon: Leaf,
  },
];

export function InfraTab() {
  return (
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
              Espaços organizados para favorecer concentração, criatividade e
              colaboração, com identidade visual acolhedora e funcional.
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
              Estrutura a serviço da proposta pedagógica: ensinar bem, cuidar
              melhor e construir pertencimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfraTab;
