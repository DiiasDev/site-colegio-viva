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
    subtitulo: "Alimentação, cuidado e hábitos saudáveis no cotidiano escolar",
    data: "26/02/2026",
    periodo: "Março a Novembro",
    conteudo:
      "O projeto Nutrar promove experiências com alimentação saudável, autocuidado e bem-estar por meio de atividades práticas, rodas de conversa e ações educativas envolvendo estudantes e famílias.",
    resumo:
      "Projeto voltado à promoção de hábitos saudáveis, educação alimentar e cuidado integral.",
    imagem: "Gradiente verde suave com tons naturais",
    icon: "leaf",
    categoria: "Sustentabilidade",
    status: "Em andamento",
    faixaEtaria: "Educação Infantil ao Ensino Fundamental I",
    local: "Salas, refeitório pedagógico e pátio",
    coordenacao: "Equipe pedagógica e professores",
    publico: "Estudantes e famílias",
    objetivo:
      "Estimular hábitos alimentares saudáveis, autonomia e consciência sobre cuidado com o corpo e a saúde.",
    impactoEsperado:
      "Maior adesão a práticas de alimentação equilibrada e fortalecimento de atitudes de autocuidado no ambiente escolar.",
    tags: ["Alimentação", "Saúde", "Bem-estar", "Hábitos Saudáveis"],
    destaques: [
      "Vivências de educação alimentar com mediação pedagógica",
      "Encontros temáticos sobre cuidado e bem-estar",
      "Integração com famílias em ações de conscientização",
    ],
    metricas: [
      { label: "Turmas participantes", value: "8" },
      { label: "Ações no semestre", value: "12" },
      { label: "Encontros com famílias", value: "4" },
    ],
    atividades: [
      "Rodas de conversa sobre alimentação e saúde",
      "Oficinas de lanche saudável",
      "Dinâmicas sobre higiene e autocuidado",
      "Campanhas internas de hábitos saudáveis",
    ],
    cronograma: [
      {
        phase: "Sensibilização",
        period: "Março",
        description: "Apresentação do projeto e levantamento de hábitos e interesses das turmas.",
      },
      {
        phase: "Vivências",
        period: "Abril a Agosto",
        description: "Oficinas, rodas e práticas orientadas sobre alimentação e autocuidado.",
      },
      {
        phase: "Socialização",
        period: "Setembro a Novembro",
        description: "Compartilhamento de aprendizados com famílias e fechamento do ciclo do projeto.",
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
