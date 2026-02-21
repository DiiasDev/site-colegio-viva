const programs = [
  {
    title: "Educação Infantil",
    description:
      "Desenvolvimento socioemocional e cognitivo com atividades lúdicas e acompanhamento individual.",
    badge: "2 a 5 anos",
  },
  {
    title: "Ensino Fundamental",
    description:
      "Base acadêmica sólida com projetos interdisciplinares, leitura orientada e iniciação científica.",
    badge: "1º ao 9º ano",
  },
  {
    title: "Ensino Médio",
    description:
      "Preparação para ENEM e vestibulares com mentorias, simulados e plano de estudos personalizado.",
    badge: "1ª à 3ª série",
  },
];

const highlights = [
  "Metodologia ativa com foco em protagonismo do aluno",
  "Laboratórios de ciências, robótica e tecnologia educacional",
  "Programa bilíngue com vivências culturais",
  "Equipe pedagógica experiente e apoio psicopedagógico",
];

const events = [
  {
    date: "10 MAR",
    title: "Feira de Ciências e Tecnologia",
    description:
      "Apresentações de projetos desenvolvidos pelos alunos em parceria com professores.",
  },
  {
    date: "18 MAR",
    title: "Reunião de Pais e Responsáveis",
    description:
      "Alinhamento pedagógico do 1º trimestre e acompanhamento de desempenho por turma.",
  },
  {
    date: "25 MAR",
    title: "Mostra Cultural",
    description:
      "Exposição artística e apresentações musicais com participação de todas as séries.",
  },
];

export default function TestSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
              EV
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-800">Escola Viva</p>
              <p className="text-xs text-slate-500">Aprender para transformar</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-blue-700" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-blue-700" href="#ensino">
              Ensino
            </a>
            <a className="transition hover:text-blue-700" href="#eventos">
              Eventos
            </a>
            <a className="transition hover:text-blue-700" href="#contato">
              Contato
            </a>
          </nav>
          <button className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
            Agendar visita
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700" />
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="space-y-6 text-white">
              <p className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Matrículas Abertas 2026
              </p>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Educação completa para cada fase da vida escolar
              </h1>
              <p className="max-w-xl text-blue-100">
                Formamos alunos autônomos, críticos e preparados para os
                desafios acadêmicos e humanos do futuro.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50">
                  Conheça a proposta
                </button>
                <button className="rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Tour virtual
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/95 p-5 shadow-xl shadow-blue-950/20">
                <p className="text-3xl font-extrabold text-blue-800">1.250+</p>
                <p className="mt-1 text-sm text-slate-600">Alunos ativos</p>
              </div>
              <div className="rounded-2xl bg-white/95 p-5 shadow-xl shadow-blue-950/20">
                <p className="text-3xl font-extrabold text-blue-800">98%</p>
                <p className="mt-1 text-sm text-slate-600">
                  Aprovação universitária
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 p-5 shadow-xl shadow-blue-950/20">
                <p className="text-3xl font-extrabold text-blue-800">35</p>
                <p className="mt-1 text-sm text-slate-600">Anos de tradição</p>
              </div>
              <div className="rounded-2xl bg-white/95 p-5 shadow-xl shadow-blue-950/20">
                <p className="text-3xl font-extrabold text-blue-800">12</p>
                <p className="mt-1 text-sm text-slate-600">Atividades extras</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Sobre a escola
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Ensino com propósito e acolhimento
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                A Escola Viva une excelência acadêmica, inovação pedagógica e
                cuidado com o desenvolvimento integral. Nossa proposta valoriza
                a autonomia, a colaboração e o respeito às singularidades de
                cada estudante.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Nossos diferenciais
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-50 px-4 py-3 ring-1 ring-slate-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="ensino" className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Segmentos
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Trilhas de ensino para cada etapa
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {program.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Agenda escolar
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Próximos eventos
              </h2>
            </div>
            <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              Ver calendário completo
            </button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-blue-700">{event.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-800 py-16 text-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Fale com a equipe
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Agende uma visita e conheça a Escola Viva
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50">
                Quero me inscrever
              </button>
              <button className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Escola Viva</h3>
            <p className="mt-2 text-sm text-slate-600">
              Rua Exemplo, 123 - Centro
              <br />
              São Paulo - SP
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contato
            </h4>
            <p className="mt-2 text-sm text-slate-700">(11) 99999-9999</p>
            <p className="text-sm text-slate-700">contato@escolaviva.edu.br</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Horário
            </h4>
            <p className="mt-2 text-sm text-slate-700">
              Segunda a sexta, das 7h às 18h
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
