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
    slug: "horta-viva",
    titulo: "Horta Viva e Compostagem Criativa",
    subtitulo: "Natureza, alimentação e cuidado com o ambiente em experiências mão na massa",
    data: "24/02/2026",
    periodo: "Março a Novembro",
    conteudo:
      "As turmas acompanham o ciclo completo de cultivo, da preparação da terra à colheita, com registro das descobertas e uso pedagógico dos alimentos em rodas de conversa, culinária e observação científica.",
    resumo:
      "Projeto interdisciplinar que integra sustentabilidade, alimentação saudável e investigação do meio natural.",
    imagem: "Gradiente orgânico em verde e amarelo",
    icon: "leaf",
    categoria: "Sustentabilidade",
    status: "Em andamento",
    faixaEtaria: "Educação Infantil e 1º ao 3º ano",
    local: "Horta pedagógica, cozinha experimental e pátio",
    coordenacao: "Equipe pedagógica + professores de Ciências",
    publico: "Turmas regulares e famílias em encontros temáticos",
    objetivo:
      "Desenvolver consciência ambiental, responsabilidade coletiva e compreensão prática sobre o ciclo dos alimentos.",
    impactoEsperado:
      "Maior vínculo com hábitos saudáveis, redução de resíduos orgânicos e ampliação do repertório científico a partir da observação cotidiana.",
    tags: ["Sustentabilidade", "Ciências", "Alimentação", "Vivências"],
    destaques: [
      "Canteiros adotados por turma com planejamento semanal",
      "Miniestação de compostagem com monitoramento coletivo",
      "Receitas pedagógicas usando ingredientes da colheita",
    ],
    metricas: [
      { label: "Turmas participantes", value: "9" },
      { label: "Canteiros ativos", value: "14" },
      { label: "Encontros com famílias", value: "6" },
    ],
    atividades: [
      "Plantio por etapas e observação de germinação",
      "Diário ilustrado da horta com hipóteses e descobertas",
      "Separação de resíduos e oficina de compostagem",
      "Feira interna de colheita e degustação",
    ],
    cronograma: [
      {
        phase: "Imersão",
        period: "Março",
        description: "Mapeamento do espaço, escolha das espécies e preparação dos canteiros.",
      },
      {
        phase: "Cultivo",
        period: "Abril a Agosto",
        description: "Rotina de cuidados, medições e registros das transformações das plantas.",
      },
      {
        phase: "Colheita e partilha",
        period: "Setembro a Novembro",
        description: "Culinária pedagógica, feira e socialização dos aprendizados para as famílias.",
      },
    ],
  },
  {
    id: 2,
    slug: "pequenos-cientistas",
    titulo: "Pequenos Cientistas em Ação",
    subtitulo: "Perguntas, hipóteses e experimentos simples para aprender investigando",
    data: "12/02/2026",
    periodo: "Fevereiro a Outubro",
    conteudo:
      "Sequências investigativas com temas como água, luz, som e misturas, em propostas adaptadas por faixa etária. As crianças formulam perguntas, testam ideias e compartilham conclusões em painéis visuais.",
    resumo:
      "Projeto de iniciação científica com foco em curiosidade, observação e comunicação de descobertas.",
    imagem: "Gradiente azul-esverdeado com pontos de luz",
    icon: "flask",
    categoria: "Ciência",
    status: "Em andamento",
    faixaEtaria: "Pré e Fundamental I",
    local: "Sala maker, laboratório pedagógico e áreas externas",
    coordenacao: "Professores de Ciências e coordenação de projetos",
    publico: "Estudantes e comunidade escolar na mostra final",
    objetivo:
      "Fortalecer pensamento investigativo e linguagem científica em experiências adequadas à infância.",
    impactoEsperado:
      "Melhoria na formulação de perguntas, argumentação oral e autonomia durante atividades exploratórias.",
    tags: ["Experimentos", "Investigação", "STEAM", "Curiosidade"],
    destaques: [
      "Roteiros com espaço para hipóteses e conclusões",
      "Mostra científica com estações interativas",
      "Integração com matemática para leitura de dados simples",
    ],
    metricas: [
      { label: "Experimentos previstos", value: "24" },
      { label: "Estações da mostra", value: "8" },
      { label: "Professores envolvidos", value: "11" },
    ],
    atividades: [
      "Circuito de experimentos com água e densidade",
      "Oficina de luz e sombras com projeções",
      "Registro em cartazes de observação",
      "Apresentações guiadas na mostra científica",
    ],
    cronograma: [
      {
        phase: "Exploração inicial",
        period: "Fevereiro a Março",
        description: "Levantamento de curiosidades e primeiros experimentos de observação.",
      },
      {
        phase: "Investigações por tema",
        period: "Abril a Agosto",
        description: "Sequências focadas em fenômenos físicos e naturais com registros progressivos.",
      },
      {
        phase: "Mostra científica",
        period: "Setembro a Outubro",
        description: "Preparação dos estandes, ensaios e socialização das descobertas.",
      },
    ],
  },
  {
    id: 3,
    slug: "leitura-em-circulo",
    titulo: "Leitura em Círculo",
    subtitulo: "Literatura, escuta e produção de sentidos em rodas de leitura afetivas",
    data: "05/02/2026",
    periodo: "Fevereiro a Dezembro",
    conteudo:
      "A proposta amplia o contato com literatura infantil e juvenil por meio de rodas semanais, contação, empréstimo mediado e pequenos clubes de leitura. Cada turma constrói recomendações e registros autorais.",
    resumo:
      "Projeto permanente de leitura com mediação intencional, repertório literário e participação das famílias.",
    imagem: "Gradiente creme com faixas verdes e douradas",
    icon: "book",
    categoria: "Leitura",
    status: "Em andamento",
    faixaEtaria: "Todas as turmas",
    local: "Biblioteca, salas e cantinhos de leitura",
    coordenacao: "Biblioteca escolar e equipe pedagógica",
    publico: "Estudantes, famílias e professores",
    objetivo:
      "Consolidar práticas leitoras prazerosas e ampliar repertório linguístico, imaginativo e cultural.",
    impactoEsperado:
      "Maior frequência de empréstimos, participação nas rodas e fortalecimento da oralidade e interpretação.",
    tags: ["Literatura", "Biblioteca", "Oralidade", "Família"],
    destaques: [
      "Passaporte de leitura com desafios por faixa etária",
      "Malas literárias para empréstimo em família",
      "Curadoria temática mensal na biblioteca",
    ],
    metricas: [
      { label: "Acervo em circulação", value: "320+" },
      { label: "Rodas por mês", value: "18" },
      { label: "Famílias participantes", value: "70%" },
    ],
    atividades: [
      "Contação e roda de apreciação literária",
      "Clube de leitura com recomendações entre turmas",
      "Produção de marcadores e resenhas ilustradas",
      "Sarau de encerramento com leituras compartilhadas",
    ],
    cronograma: [
      {
        phase: "Abertura do passaporte",
        period: "Fevereiro",
        description: "Lançamento do projeto e organização dos cantinhos de leitura.",
      },
      {
        phase: "Ciclos de leitura",
        period: "Março a Novembro",
        description: "Rodas, empréstimos, curadorias e registros autorais contínuos.",
      },
      {
        phase: "Sarau literário",
        period: "Dezembro",
        description: "Socialização das leituras marcantes e celebração do percurso anual.",
      },
    ],
  },
  {
    id: 4,
    slug: "atelier-das-cores",
    titulo: "Ateliê das Cores e Formas",
    subtitulo: "Arte como linguagem de expressão, experimentação e autoria",
    data: "18/02/2026",
    periodo: "Março a Outubro",
    conteudo:
      "Vivências com pintura, colagem, argila, gravura e materiais não estruturados para explorar processos artísticos e percepção estética. O projeto valoriza experimentação, repertório visual e criação autoral.",
    resumo:
      "Projeto de artes visuais com experiências sensoriais e produção coletiva/individual.",
    imagem: "Gradiente quente com verde suave e acentos dourados",
    icon: "palette",
    categoria: "Arte",
    status: "Inscrições abertas",
    faixaEtaria: "Oficinas do contraturno (4 a 10 anos)",
    local: "Ateliê multiuso e área externa coberta",
    coordenacao: "Professor(a) de Artes + coordenação cultural",
    publico: "Estudantes inscritos no contraturno",
    objetivo:
      "Ampliar repertório artístico e oferecer espaço de criação com mediação técnica e liberdade expressiva.",
    impactoEsperado:
      "Fortalecimento de autoestima criativa, motricidade fina e capacidade de comunicar ideias visualmente.",
    tags: ["Artes Visuais", "Oficina", "Criatividade", "Contraturno"],
    destaques: [
      "Percursos por artistas e técnicas adaptadas à infância",
      "Mostra semestral com curadoria das próprias crianças",
      "Uso de materiais naturais e recicláveis nas composições",
    ],
    metricas: [
      { label: "Vagas por ciclo", value: "40" },
      { label: "Técnicas exploradas", value: "12" },
      { label: "Mostras no ano", value: "2" },
    ],
    atividades: [
      "Exploração cromática com pigmentos e tintas",
      "Modelagem em argila e assemblage",
      "Ateliê aberto de colagens narrativas",
      "Montagem coletiva da mostra de artes",
    ],
    cronograma: [
      {
        phase: "Matrículas",
        period: "Fevereiro a Março",
        description: "Inscrições, organização das turmas e acolhimento dos estudantes.",
      },
      {
        phase: "Percursos criativos",
        period: "Março a Setembro",
        description: "Oficinas semanais por técnica, tema e repertório visual.",
      },
      {
        phase: "Mostra",
        period: "Outubro",
        description: "Seleção, curadoria e montagem expositiva com participação das crianças.",
      },
    ],
  },
  {
    id: 5,
    slug: "programacao-ludica",
    titulo: "Programação Lúdica e Robótica Criativa",
    subtitulo: "Pensamento computacional com desafios, construção e colaboração",
    data: "20/02/2026",
    periodo: "Março a Novembro",
    conteudo:
      "As turmas vivenciam trilhas de programação desplugada e introdução à robótica com desafios de lógica, sequências e resolução de problemas. A proposta prioriza cooperação e criatividade aplicada.",
    resumo:
      "Projeto de tecnologia educacional com foco em pensamento computacional e criação de soluções simples.",
    imagem: "Gradiente verde profundo com linhas luminosas",
    icon: "monitor",
    categoria: "Tecnologia",
    status: "Em andamento",
    faixaEtaria: "2º ao 5º ano",
    local: "Sala de tecnologia e espaço maker",
    coordenacao: "Equipe de tecnologia educacional",
    publico: "Turmas regulares e equipes em desafio interno",
    objetivo:
      "Desenvolver raciocínio lógico, colaboração e autonomia para planejar, testar e revisar soluções.",
    impactoEsperado:
      "Melhora em resolução de problemas, organização de etapas e comunicação de processos.",
    tags: ["Tecnologia", "Robótica", "Lógica", "Maker"],
    destaques: [
      "Trilhas por níveis com desafios progressivos",
      "Integração com matemática e projetos de sala",
      "Festival interno de protótipos ao fim do semestre",
    ],
    metricas: [
      { label: "Desafios gamificados", value: "30+" },
      { label: "Kits compartilhados", value: "15" },
      { label: "Equipes por festival", value: "20" },
    ],
    atividades: [
      "Programação desplugada com mapas e comandos",
      "Construção de protótipos simples em equipe",
      "Testes, ajustes e documentação do processo",
      "Festival de soluções e demonstrações",
    ],
    cronograma: [
      {
        phase: "Base lógica",
        period: "Março a Abril",
        description: "Desafios desplugados e introdução ao pensamento computacional.",
      },
      {
        phase: "Prototipagem",
        period: "Maio a Setembro",
        description: "Projetos em equipe com montagem, testes e iteração.",
      },
      {
        phase: "Festival maker",
        period: "Outubro a Novembro",
        description: "Apresentação de protótipos e celebração das soluções criadas.",
      },
    ],
  },
  {
    id: 6,
    slug: "gentileza-em-rede",
    titulo: "Gentileza em Rede",
    subtitulo: "Cidadania, convivência e participação com ações de cuidado coletivo",
    data: "10/02/2026",
    periodo: "Fevereiro a Novembro",
    conteudo:
      "Projeto transversal com assembleias de turma, pactos de convivência e campanhas solidárias. As crianças identificam necessidades da comunidade escolar e planejam pequenas ações de impacto.",
    resumo:
      "Projeto de cidadania e convivência para fortalecer empatia, escuta e participação responsável.",
    imagem: "Gradiente suave com verde, branco e dourado",
    icon: "heart-handshake",
    categoria: "Cidadania",
    status: "Em andamento",
    faixaEtaria: "Todas as turmas (adaptações por faixa etária)",
    local: "Salas, pátio e espaços de convivência",
    coordenacao: "SOE, coordenação pedagógica e professores",
    publico: "Comunidade escolar",
    objetivo:
      "Promover cultura de respeito, escuta e cooperação por meio de práticas contínuas de convivência.",
    impactoEsperado:
      "Redução de conflitos recorrentes e aumento da participação das crianças em decisões coletivas.",
    tags: ["Convivência", "Cidadania", "Empatia", "Participação"],
    destaques: [
      "Assembleias de turma com mediação pedagógica",
      "Campanhas de cuidado com os espaços comuns",
      "Painel de atitudes positivas e combinados revisáveis",
    ],
    metricas: [
      { label: "Assembleias previstas", value: "36" },
      { label: "Campanhas coletivas", value: "5" },
      { label: "Turmas envolvidas", value: "12" },
    ],
    atividades: [
      "Rodas de escuta e resolução colaborativa de conflitos",
      "Criação de pactos de convivência",
      "Campanhas solidárias e ações de cuidado",
      "Registro de avanços em painéis de turma",
    ],
    cronograma: [
      {
        phase: "Pactos iniciais",
        period: "Fevereiro a Março",
        description: "Construção de combinados e rotinas de assembleia em cada turma.",
      },
      {
        phase: "Ações de cuidado",
        period: "Abril a Setembro",
        description: "Campanhas, monitoramento e revisão coletiva das metas de convivência.",
      },
      {
        phase: "Síntese do percurso",
        period: "Outubro a Novembro",
        description: "Avaliação participativa e socialização dos aprendizados do projeto.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return pData.find((project) => project.slug === slug);
}
