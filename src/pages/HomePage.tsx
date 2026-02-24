import { Container } from "../components/layout/Container";
import Link from "next/link";
import Image from "next/image";
import Chat from "../components/layout/chat";

export default function Home() {
  return (
    <main id="inicio" className="bg-[var(--color-background)]">
      
      {/* HERO */}
      <section className="py-28">
        <Container className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-[var(--color-secondary)]">
              Educação que desenvolve
              <span className="text-[var(--color-primary)]"> conhecimento </span>
              e valores para a vida.
            </h1>

            <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
              No Colégio Vivá, unimos excelência acadêmica, estrutura moderna
              e um ambiente acolhedor para formar alunos preparados para o futuro.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/#contato"
                className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition"
              >
                Agende uma visita
              </Link>

              <Link
                href="/#proposta"
                className="px-8 py-4 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary-light)] transition"
              >
                Conheça nossa proposta
              </Link>
            </div>
          </div>

          <div className="relative h-[450px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
            <Image
              src="/colegioTeste1.png"
              alt="Foto do Colégio Vivá"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* DIFERENCIAIS */}
      <section id="sobre" className="py-24 bg-[var(--color-surface)]">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)]">
            Nosso diferencial
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              "Metodologia inovadora",
              "Estrutura moderna",
              "Acompanhamento individualizado",
            ].map((item) => (
              <div
                key={item}
                className="p-8 rounded-2xl border border-[var(--color-border)] hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[var(--color-secondary)]">
                  {item}
                </h3>
                <p className="mt-4 text-[var(--color-text-secondary)] text-sm">
                  Educação focada no desenvolvimento completo do aluno.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="proposta" className="py-16">
        <Container>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
              Proposta pedagógica
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Ensino com foco em acolhimento, autonomia e desenvolvimento integral,
              com acompanhamento próximo da família.
            </p>
          </div>
        </Container>
      </section>

      <section id="segmentos" className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {["Educação Infantil", "Fundamental", "Atividades Complementares"].map(
              (segment) => (
                <div
                  key={segment}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                  <h3 className="font-semibold text-[var(--color-secondary)]">
                    {segment}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                    Conteúdo atualizado e rotina pensada para cada fase.
                  </p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section id="estrutura" className="py-16">
        <Container>
          <div className="rounded-3xl bg-[var(--color-secondary)] p-8 text-white">
            <h2 className="text-2xl font-bold">Estrutura acolhedora e moderna</h2>
            <p className="mt-3 text-white/80">
              Ambientes planejados para aprendizagem, convivência e segurança.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-24 bg-[var(--color-primary)]">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Venha conhecer o Colégio Vivá
          </h2>
          <p className="mt-4 text-white/80">
            Agende uma visita e descubra como podemos transformar o futuro do seu filho.
          </p>

          <Link
            href="/#contato"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:opacity-90 transition"
          >
            Falar com a secretaria
          </Link>
        </Container>
      </section>

      <Chat />
    </main>
  );
}
