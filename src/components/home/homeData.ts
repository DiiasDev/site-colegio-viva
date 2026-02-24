import { pData } from "../projects/projectsData";

export const homePillars = [
  {
    titulo: "Acolhimento com intencionalidade",
    descricao:
      "Rotinas planejadas para desenvolvimento socioemocional, autonomia e vínculo com a aprendizagem.",
  },
  {
    titulo: "Aprendizagem ativa",
    descricao:
      "Projetos, investigação e experiências práticas para transformar curiosidade em conhecimento.",
  },
  {
    titulo: "Parceria com as famílias",
    descricao:
      "Comunicação próxima e acompanhamento contínuo para fortalecer o percurso escolar.",
  },
];

export const homeSegments = [
  {
    nome: "Educação Infantil",
    faixa: "Primeiros vínculos, linguagem e descobertas",
    descricao:
      "Vivências lúdicas, cuidado integral e experiências sensoriais que respeitam o tempo de cada criança.",
  },
  {
    nome: "Fundamental I",
    faixa: "Base acadêmica com protagonismo",
    descricao:
      "Consolidação de leitura, escrita e matemática com projetos interdisciplinares e investigação guiada.",
  },
  {
    nome: "Contraturno e oficinas",
    faixa: "Ampliação de repertório",
    descricao:
      "Arte, ciência e atividades complementares para ampliar experiências e fortalecer talentos.",
  },
];

export const homeQuickLinks = [
  {
    titulo: "Calendário escolar",
    descricao: "Acompanhe eventos, datas importantes e destaques do período letivo.",
    href: "/calendario",
    cta: "Ver agenda",
  },
  {
    titulo: "Projetos pedagógicos",
    descricao: "Conheça iniciativas em ciência, leitura, arte, tecnologia e sustentabilidade.",
    href: "/projetos",
    cta: "Explorar projetos",
  },
  {
    titulo: "Galeria da escola",
    descricao: "Registros de vivências, eventos e atividades das turmas ao longo do ano.",
    href: "/galeria",
    cta: "Abrir galeria",
  },
  {
    titulo: "Atendimento e visita",
    descricao: "Fale com a secretaria e agende um momento para conhecer a estrutura do colégio.",
    href: "/contato",
    cta: "Ir para contato",
  },
];

export const homeHighlights = pData.slice(0, 3);

