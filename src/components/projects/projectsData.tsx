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
  imagemCapa?: string;
  imagemResponsavel?: string;
  galeriaImagens?: string[];
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
    imagemCapa: "/Nutrar/Nutrar1.png",
    imagemResponsavel: "/Nutrar/responsavel.png",
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
    titulo: "Projeto de Balé - Stúdio DH Dance",
    subtitulo: "Arte, disciplina e desenvolvimento com ensino técnico e acolhedor",
    data: "10/03/2026",
    periodo: "Durante o ano letivo de 2026",
    conteudo:
      "O Stúdio DH Dance atua em Cosmópolis há mais de 13 anos, promovendo arte, disciplina e desenvolvimento para crianças, jovens e adultos. Em novas instalações, com espaço amplo, moderno e apropriado para a prática da dança, o projeto oferece conforto, segurança e estrutura específica para cada modalidade. A parceria com o Colégio Vivá já acontece há três anos e, em 2026, os alunos contam com bolsa 100% nas aulas de balé no Stúdio, além de desconto para irmãos e familiares próximos.",
    resumo:
      "Parceria entre Colégio Vivá e Stúdio DH Dance com bolsa 100% no balé, estrutura moderna e formação artística integral.",
    imagem: "Registros reais das aulas no Stúdio DH Dance",
    imagemCapa: "/ballet/ballet1.png",
    imagemResponsavel: "/ballet/professora_ballet.png",
    galeriaImagens: [
      "/ballet/ballet1.png",
      "/ballet/ballet2.png",
      "/ballet/ballet3.png",
      "/ballet/ballet4.png",
      "/ballet/ballet5.png",
      "/ballet/ballet6.png",
    ],
    icon: "palette",
    categoria: "Arte",
    status: "Em andamento",
    faixaEtaria: "Crianças, jovens e adultos",
    local: "Stúdio DH Dance - Cosmópolis/SP",
    coordenacao: "Equipe do Stúdio DH Dance (profissionais qualificados, com destaque no balé)",
    publico: "Alunos do Colégio Vivá e comunidade local",
    objetivo:
      "Ampliar o acesso à cultura e à formação artística por meio do balé, fortalecendo técnica, disciplina, expressão e desenvolvimento integral.",
    impactoEsperado:
      "Contribuição para o desenvolvimento físico, emocional e social dos alunos, com mais acesso à arte, fortalecimento da autoestima e convivência saudável.",
    tags: ["Balé", "Arte", "Formação Artística", "Cultura", "Parceria Escola-Comunidade"],
    destaques: [
      "Stúdio com mais de 13 anos de atuação em Cosmópolis",
      "Novas instalações com estrutura moderna e apropriada para dança",
      "Parceria com o Colégio Vivá consolidada há três anos",
      "Bolsa 100% no balé para alunos do Colégio Vivá e desconto para familiares em 2026",
    ],
    metricas: [
      { label: "Atuação do Stúdio", value: "+13 anos" },
      { label: "Parceria com o Vivá", value: "3 anos" },
      { label: "Benefício no balé", value: "Bolsa 100%" },
      { label: "Novo benefício 2026", value: "Desconto para familiares" },
    ],
    atividades: [
      "Aulas regulares de balé com orientação técnica e acompanhamento pedagógico",
      "Práticas de condicionamento físico e flexibilidade para apoio ao desempenho corporal",
      "Vivências de expressão corporal, musicalidade e postura",
      "Atividades formativas em ambiente acolhedor, seguro e estruturado",
    ],
    cronograma: [
      {
        phase: "Acolhimento e integração",
        period: "Início do ciclo letivo",
        description:
          "Recepção dos alunos, organização das turmas e adaptação ao espaço e à rotina das aulas.",
      },
      {
        phase: "Aulas contínuas e desenvolvimento técnico",
        period: "Durante o ano letivo",
        description:
          "Condução das aulas de balé com progressão pedagógica, cuidado técnico e fortalecimento da expressão artística.",
      },
      {
        phase: "Consolidação e socialização",
        period: "Encerramento do ciclo",
        description:
          "Registros, devolutivas e momentos de partilha do desenvolvimento artístico dos alunos.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return pData.find((project) => project.slug === slug);
}
