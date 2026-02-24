"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { Mail, Send, X } from "lucide-react";

type ChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
  schoolEmail?: string;
};

type FormState = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const defaultForm: FormState = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
};

export function ChatModal({
  isOpen,
  onClose,
  schoolEmail = "contato@colegioviva.com.br",
}: ChatModalProps) {
  const [form, setForm] = useState<FormState>(defaultForm);

  const canSubmit = useMemo(() => form.mensagem.trim().length > 0, [form.mensagem]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    const bodyLines = [
      "Olá, equipe do Colégio Vivá!",
      "",
      "Nova mensagem enviada pelo chat do site.",
      "",
      "DADOS DO CONTATO",
      `- Nome: ${form.nome.trim() || "Não informado"}`,
      `- E-mail de retorno: ${form.email.trim() || "Não informado"}`,
      `- Assunto informado: ${form.assunto.trim() || "Não informado"}`,
      "",
      "MENSAGEM",
      "----------------------------------------",
      form.mensagem.trim(),
      "----------------------------------------",
      "",
      "Enviado via formulário do site.",
    ];

    const subject = form.assunto.trim() || "Contato pelo site - Colégio Vivá";
    const body = bodyLines.join("\n");
    const mailtoUrl = `mailto:${schoolEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <div
      className={[
        "fixed left-3 right-3 top-[calc(env(safe-area-inset-top)+0.75rem)] bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-50 origin-bottom rounded-3xl border border-white/60 bg-white/95 shadow-2xl backdrop-blur transition-all duration-300 ease-out",
        "md:left-auto md:right-6 md:top-auto md:bottom-24 md:origin-bottom-right",
        isOpen
          ? "md:max-h-[min(42rem,calc(100dvh-8rem))] md:w-[26rem] p-0 opacity-100 translate-y-0"
          : "pointer-events-none max-h-0 p-0 opacity-0 translate-y-2",
      ].join(" ")}
      aria-hidden={!isOpen}
    >
      <div className={isOpen ? "flex min-h-0 max-h-full flex-col overflow-hidden rounded-3xl" : "hidden"}>
        <div className="shrink-0 rounded-t-3xl border-b border-[var(--color-border)] bg-gradient-to-r from-[var(--color-primary-light)] to-white px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-11 w-11 rounded-xl">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
                <Image
                  src="/icon-512.png"
                  alt="Ícone Colégio Vivá"
                  fill
                  sizes="44px"
                  quality={100}
                  className="object-cover scale-[1.08]"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold text-[var(--color-secondary)]">
                Fale com o Colégio Vivá
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-xs">
                Preencha a mensagem e abriremos seu e-mail com o conteúdo pronto
                para envio.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-2 text-[var(--color-text-secondary)] transition hover:bg-white/80 hover:text-[var(--color-secondary)]"
              aria-label="Fechar chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:p-5 sm:pb-5"
        >
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              E-mail do colégio
            </span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-base text-[var(--color-secondary)] shadow-sm sm:text-sm">
              <Mail className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span className="truncate font-medium">{schoolEmail}</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-[var(--color-secondary)]">
                Nome
              </span>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm((prev) => ({ ...prev, nome: e.target.value }))}
                className="w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-base outline-none transition placeholder:text-[var(--color-text-secondary)]/80 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 sm:text-sm"
                placeholder="Seu nome (opcional)"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-[var(--color-secondary)]">
                Seu e-mail
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-base outline-none transition placeholder:text-[var(--color-text-secondary)]/80 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 sm:text-sm"
                placeholder="voce@exemplo.com (opcional)"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-[var(--color-secondary)]">
              Assunto
            </span>
            <input
              type="text"
              value={form.assunto}
              onChange={(e) => setForm((prev) => ({ ...prev, assunto: e.target.value }))}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-base outline-none transition placeholder:text-[var(--color-text-secondary)]/80 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 sm:text-sm"
              placeholder="Ex.: Quero agendar uma visita (opcional)"
            />
          </label>

          <label className="block">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="block text-xs font-medium text-[var(--color-secondary)]">
                Mensagem
              </span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">
                Obrigatório
              </span>
            </div>
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm((prev) => ({ ...prev, mensagem: e.target.value }))}
              className="w-full min-h-24 sm:min-h-32 resize-y rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-base outline-none transition placeholder:text-[var(--color-text-secondary)]/80 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 sm:text-sm"
              placeholder="Escreva sua mensagem aqui..."
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[var(--color-primary)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
            Enviar por e-mail
          </button>

          <p className="text-center text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
            O envio será aberto no aplicativo de e-mail padrão do dispositivo.
          </p>
        </form>
      </div>
    </div>
  );
}
