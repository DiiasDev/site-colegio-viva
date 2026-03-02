export type ProjectStatus = "Em andamento" | "Inscrições abertas" | "Concluído";

export type ProjectCategory =
  | "Sustentabilidade"
  | "Ciência"
  | "Leitura"
  | "Arte"
  | "Tecnologia"
  | "Cidadania";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectTimelineItem = {
  phase: string;
  period: string;
  description: string;
};

export type ProjectData = {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  data: string;
  periodo: string;
  conteudo: string;
  resumo: string;
  imagem: string;
  icon: "leaf" | "flask" | "book" | "palette" | "monitor" | "heart-handshake";
  categoria: ProjectCategory;
  status: ProjectStatus;
  faixaEtaria: string;
  local: string;
  coordenacao: string;
  publico: string;
  objetivo: string;
  impactoEsperado: string;
  tags: string[];
  destaques: string[];
  metricas: ProjectMetric[];
  atividades: string[];
  cronograma: ProjectTimelineItem[];
};

export type projectsData = ProjectData;

export const pData: ProjectData[] = [
  {
    id: 1,
    slug: "nutrar",
    titulo: "Nutrar",
    subtitulo: "Projeto Nutrir, Cuidar e Educar: educação nutricional para crianças e adolescentes",
    data: "26/02/2026",
    periodo: "Conforme calendário escolar",
    conteudo:
      "O projeto Nutrar é um programa de educação nutricional desenvolvido para ser aplicado exclusivamente em escolas. A proposta ajuda crianças e adolescentes a construírem uma relação positiva e saudável com a comida desde cedo, com aulas lúdicas e sensoriais que respeitam o tempo e a individualidade de cada criança, aproveitando também o incentivo do coletivo.",
    resumo:
      "Programa de educação nutricional escolar que desperta curiosidade, confiança e autonomia alimentar sem cobranças ou imposições.",
    imagem: "Projeto Nutrir, Cuidar e Educar",
    icon: "leaf",
    categoria: "Sustentabilidade",
    status: "Em andamento",
    faixaEtaria: "Crianças e adolescentes",
    local: "Aplicação exclusiva em escolas",
    coordenacao: "Responsável pelo Projeto Nutrar e equipe pedagógica escolar",
    publico: "Estudantes no ambiente escolar",
    objetivo:
      "Despertar curiosidade, confiança e autonomia alimentar, aproximando as crianças dos alimentos saudáveis sem obrigar a comer.",
    impactoEsperado:
      "Fortalecimento da educação alimentar na infância como cuidado, prevenção e amor, com impacto positivo para toda a vida.",
    tags: ["Educação Nutricional", "Infância", "Autonomia Alimentar", "Cuidado"],
    destaques: [
      "Metodologia lúdica: brincar + aprender para gerar fixação real",
      "O alimento é o protagonista das aulas, com histórias adaptadas, jogos e personagens",
      "Não afastar quem já come bem e aproximar, com segurança, quem tem medo de provar",
    ],
    metricas: [
      { label: "Metodologia", value: "Lúdica e sensorial" },
      { label: "Abordagem", value: "Sem imposições e sem cobranças" },
      { label: "Foco pedagógico", value: "Curiosidade, confiança e autonomia" },
    ],
    atividades: [
      "Aulas lúdicas e sensoriais com foco em educação alimentar",
      "Vivências com alimentos para reduzir receios e ampliar aceitação",
      "Histórias adaptadas, jogos, personagens e brincadeiras como estratégia pedagógica",
      "Atividades coletivas com incentivo entre os colegas",
    ],
    cronograma: [
      {
        phase: "Acolhimento e vínculo",
        period: "Início do ciclo",
        description:
          "Apresentação do projeto e construção de um ambiente seguro para crianças com diferentes relações com a comida.",
      },
      {
        phase: "Vivências lúdicas e sensoriais",
        period: "Desenvolvimento contínuo",
        description:
          "Realização de aulas práticas com alimentos, jogos, histórias e brincadeiras para promover aproximação saudável.",
      },
      {
        phase: "Autonomia e consolidação",
        period: "Fechamento do ciclo",
        description:
          "Fortalecimento da confiança para experimentar e manutenção de atitudes positivas sobre alimentação no cotidiano escolar.",
      },
    ],
  },
  {
    id: 2,
    slug: "ballet",
    titulo: "Ballet",
    subtitulo: "Expressão corporal, musicalidade e disciplina por meio da dança",
    data: "26/02/2026",
    periodo: "Março a Dezembro",
    conteudo:
      "O projeto de Ballet oferece aulas voltadas ao desenvolvimento motor, postura, coordenação, ritmo e expressão artística, respeitando a faixa etária e o processo de aprendizagem de cada criança.",
    resumo:
      "Projeto de dança com foco em técnica básica, expressão corporal e vivências artísticas.",
    imagem: "Gradiente claro com tons suaves e dourados",
    icon: "palette",
    categoria: "Arte",
    status: "Inscrições abertas",
    faixaEtaria: "Infantil e Fundamental I",
    local: "Sala de dança / espaço multiuso",
    coordenacao: "Professor(a) de Ballet e coordenação pedagógica",
    publico: "Estudantes inscritos",
    objetivo:
      "Desenvolver coordenação motora, consciência corporal, musicalidade e expressão artística.",
    impactoEsperado:
      "Fortalecimento da disciplina, autoestima, postura e participação em atividades coletivas de dança.",
    tags: ["Dança", "Ballet", "Expressão Corporal", "Arte"],
    destaques: [
      "Turmas organizadas por faixa etária",
      "Trabalho de técnica, ritmo e expressão",
      "Apresentação artística de culminância",
    ],
    metricas: [
      { label: "Turmas", value: "3" },
      { label: "Aulas por semana", value: "2" },
      { label: "Apresentações anuais", value: "1" },
    ],
    atividades: [
      "Exercícios de alongamento e postura",
      "Sequências rítmicas e coordenação",
      "Prática de passos básicos de ballet",
      "Ensaios para apresentação final",
    ],
    cronograma: [
      {
        phase: "Matrículas e formação de turmas",
        period: "Março",
        description: "Organização das turmas por faixa etária e acolhimento inicial.",
      },
      {
        phase: "Aulas regulares",
        period: "Abril a Outubro",
        description: "Desenvolvimento técnico e expressivo com progressão pedagógica.",
      },
      {
        phase: "Culminância",
        period: "Novembro a Dezembro",
        description: "Ensaios finais e apresentação de encerramento do ciclo.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return pData.find((project) => project.slug === slug);
}
