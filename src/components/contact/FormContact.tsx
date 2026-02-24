"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";

const SCHOOL_WHATSAPP = "5519993292661";

type SubmitStatus = "idle" | "ready";

export default function FormContact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const segmento = String(formData.get("segmento") || "").trim();
    const assunto = String(formData.get("assunto") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();
    const autorizacao = formData.get("autorizacao") ? "Sim" : "Não";

    const texto = [
      "Olá, Colégio Vivá! 👋",
      "Gostaria de atendimento sobre matrícula/visita.",
      "",
      "📋 *Dados do responsável*",
      `• Nome: ${nome || "-"}`,
      `• Telefone/WhatsApp: ${telefone || "-"}`,
      `• E-mail: ${email || "Não informado"}`,
      "",
      "🎯 *Interesse*",
      `• Segmento: ${segmento || "-"}`,
      `• Assunto: ${assunto || "-"}`,
      "",
      "💬 *Mensagem*",
      mensagem ? `_${mensagem}_` : "_Não informada_",
      "",
      "✅ *Autorização para contato*",
      `• ${autorizacao}`,
      "",
      "Obrigada(o)! Aguardo retorno. 😊",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${SCHOOL_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitStatus("ready");
  }

  return (
    <section id="formulario-contato" className="relative">
      <div className="pointer-events-none absolute inset-x-8 top-8 h-28 rounded-full bg-[var(--color-map-glow)] blur-3xl" />

      <div className="relative grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(165deg,var(--color-secondary),#173425)] p-6 text-white shadow-[0_24px_60px_-40px_rgba(31,61,43,0.65)] sm:p-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
            <ShieldCheck className="h-4 w-4" />
            Atendimento Viv
          </p>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
            Envie sua mensagem e receba orientação da nossa equipe
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/80">
            Preencha os dados abaixo para solicitar informações sobre matrícula,
            proposta pedagógica, valores e agendamento de visita.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Retorno por WhatsApp, telefone ou e-mail",
              "Apoio para escolher o melhor segmento",
              "Agendamento de visita presencial",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-light)]" />
                <p className="text-sm text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/90 p-5 shadow-[0_24px_60px_-44px_rgba(31,61,43,0.35)] backdrop-blur sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
              Formulário de contato
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">
              Vamos conhecer sua família
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Nome do responsável
              </span>
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
                className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition placeholder:text-[var(--color-text-secondary)]/70 focus:border-[var(--color-primary)] focus:bg-white"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Telefone / WhatsApp
              </span>
              <input
                name="telefone"
                type="tel"
                placeholder="(19) 99999-9999"
                required
                className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition placeholder:text-[var(--color-text-secondary)]/70 focus:border-[var(--color-primary)] focus:bg-white"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                E-mail
              </span>
              <input
                name="email"
                type="email"
                placeholder="voce@email.com"
                className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition placeholder:text-[var(--color-text-secondary)]/70 focus:border-[var(--color-primary)] focus:bg-white"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Segmento de interesse
              </span>
              <select
                name="segmento"
                className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition focus:border-[var(--color-primary)] focus:bg-white"
              >
                <option>Educação Infantil</option>
                <option>Ensino Fundamental</option>
                <option>Atividades Complementares</option>
                <option>Quero falar com a secretaria</option>
              </select>
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Assunto
              </span>
              <input
                name="assunto"
                type="text"
                placeholder="Ex.: agendar visita, valores, matrículas..."
                required
                className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition placeholder:text-[var(--color-text-secondary)]/70 focus:border-[var(--color-primary)] focus:bg-white"
              />
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Mensagem
              </span>
              <textarea
                name="mensagem"
                rows={5}
                placeholder="Conte um pouco sobre a necessidade da sua família."
                required
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none ring-0 transition placeholder:text-[var(--color-text-secondary)]/70 focus:border-[var(--color-primary)] focus:bg-white"
              />
            </label>

            <label className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              <input
                name="autorizacao"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                defaultChecked
              />
              <span className="text-sm leading-6 text-[var(--color-text-secondary)]">
                Autorizo o contato da equipe do Colégio Vivá para retorno sobre
                meu interesse.
              </span>
            </label>

            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-[var(--color-text-secondary)]">
                Ao enviar, abriremos o WhatsApp com sua mensagem já formatada
                para a secretaria.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Enviar mensagem
                <Send className="h-4 w-4" />
              </button>
            </div>
            {submitStatus === "ready" ? (
              <p className="sm:col-span-2 text-xs text-[var(--color-text-secondary)]">
                Se o WhatsApp não abrir automaticamente, verifique se o navegador
                bloqueou pop-ups.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
