import type { StaticImageData } from "next/image";

import image1 from "../../../public/Real/image1.png";
import image2 from "../../../public/Real/image2.png";
import image3 from "../../../public/Real/image3.png";
import image4 from "../../../public/Real/image4.png";
import image5 from "../../../public/Real/image5.png";
import image6 from "../../../public/Real/image2.png";

export type ClassTabId = "apresentacao" | "grade" | "profissionais" | "fotos";

export type ClassProfessional = {
  role: string;
  name: string;
  summary: string;
};

export type ClassScheduleItem = {
  area: string;
  focus: string;
  experiences: string[];
};

export type SchoolClass = {
  slug: string;
  turma: string;
  categoria: "Maternal" | "Infantil";
  faixaEtaria: string;
  periodo: string;
  vagas: string;
  destaque: string;
  resumo: string;
  capa: {
    image: StaticImageData;
    alt: string;
  };
  apresentacao: {
    headline: string;
    description: string;
    pillars: string[];
    rotina: {
      label: string;
      detail: string;
    }[];
  };
  profissionais: ClassProfessional[];
  grade: ClassScheduleItem[];
  fotos: {
    image: StaticImageData;
    alt: string;
    caption: string;
  }[];
};

export function slugifyClassName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const classData: SchoolClass[] = [
  {
    slug: slugifyClassName("Maternal I"),
    turma: "Maternal I",
    categoria: "Maternal",
    faixaEtaria: "2 a 3 anos",
    periodo: "Integral e meio período",
    vagas: "Turmas reduzidas",
    destaque: "Descobertas com acolhimento, movimento e linguagem",
    resumo:
      "Uma fase marcada por vínculos, autonomia inicial e exploração sensorial. O Maternal I organiza a rotina com intencionalidade pedagógica e muito afeto.",
    capa: {
      image: image6,
      alt: "Crianças em ambiente escolar no Maternal I",
    },
    apresentacao: {
      headline: "Uma turma pensada para o começo das grandes descobertas",
      description:
        "No Maternal I, cada proposta respeita o ritmo da infância e transforma cuidado em aprendizagem. Trabalhamos com ambientes preparados para favorecer curiosidade, linguagem, coordenação motora e socialização, sempre com escuta ativa e acolhimento.",
      pillars: [
        "Acolhimento e vínculo seguro para adaptação tranquila",
        "Exploração sensorial com materiais variados e significativos",
        "Rotina previsível que fortalece autonomia e segurança",
        "Brincadeiras dirigidas e livres com intencionalidade pedagógica",
      ],
      rotina: [
        {
          label: "Chegada e acolhida",
          detail:
            "Recepção individualizada, ambientação e transição suave para o início das vivências.",
        },
        {
          label: "Roda de conversa",
          detail:
            "Momentos curtos de linguagem, musicalização e construção de combinados da turma.",
        },
        {
          label: "Explorações do dia",
          detail:
            "Atividades de movimento, arte, investigação de materiais e experiências sensoriais.",
        },
        {
          label: "Cuidado e descanso",
          detail:
            "Higiene, alimentação e pausa com atenção às necessidades de cada criança.",
        },
      ],
    },
    profissionais: [
      {
        role: "Direção Pedagógica",
        name: "Gizele Teste",
        summary:
          "Acompanha planejamento, intencionalidade pedagógica e integração entre cuidado e aprendizagem.",
      },
      {
        role: "Coordenação",
        name: "Fernanda Yumi",
        summary:
          "Orienta a rotina da turma, apoia a equipe docente e acompanha o desenvolvimento das crianças.",
      },
      {
        role: "Professora Regente",
        name: "Gabriel Dias",
        summary:
          "Conduz experiências lúdicas e investigações diárias com foco em vínculos, linguagem e autonomia.",
      },
    ],
    grade: [
      {
        area: "Linguagens",
        focus: "Imagens, sons, gestos e palavras",
        experiences: [
          "Contação de histórias com apoio visual",
          "Músicas, parlendas e jogos de nomeação",
          "Expressão oral inicial em rodas e brincadeiras",
        ],
      },
      {
        area: "Matemática",
        focus: "Noções iniciais por investigação e descoberta",
        experiences: [
          "Comparação de tamanhos e quantidades",
          "Sequências simples com objetos e cores",
          "Classificação por formas, texturas e usos",
        ],
      },
      {
        area: "Natureza e Cultura",
        focus: "Observação, cuidado e repertório do cotidiano",
        experiences: [
          "Exploração de elementos naturais",
          "Vivências com datas e projetos culturais",
          "Rotinas de cuidado com ambiente e colegas",
        ],
      },
      {
        area: "Movimento",
        focus: "Corpo em ação, coordenação e confiança",
        experiences: [
          "Circuitos motores adaptados",
          "Brincadeiras com equilíbrio e deslocamento",
          "Jogos de ritmo, pausa e percepção corporal",
        ],
      },
      {
        area: "Arte",
        focus: "Experimentação de materiais e expressão criativa",
        experiences: [
          "Pintura com diferentes suportes",
          "Colagem, marcas e texturas",
          "Atividades de criação com materiais não estruturados",
        ],
      },
    ],
    fotos: [
      {
        image: image1,
        alt: "Crianças em atividade coletiva no Maternal I",
        caption: "Vivência em grupo com exploração de materiais.",
      },
      {
        image: image2,
        alt: "Momento de descoberta e expressão artística",
        caption: "Expressão criativa e coordenação motora fina.",
      },
      {
        image: image3,
        alt: "Brincadeira orientada em ambiente acolhedor",
        caption: "Rotina lúdica com foco em autonomia e interação.",
      },
    ],
  },
  {
    slug: slugifyClassName("Maternal II"),
    turma: "Maternal II",
    categoria: "Maternal",
    faixaEtaria: "3 a 4 anos",
    periodo: "Integral e meio período",
    vagas: "Turmas reduzidas",
    destaque: "Protagonismo infantil com linguagem, corpo e imaginação",
    resumo:
      "No Maternal II, ampliamos repertórios e incentivamos a autonomia com propostas investigativas, brincadeiras de faz de conta e experiências que fortalecem a convivência.",
    capa: {
      image: image4,
      alt: "Crianças participando de atividade no Maternal II",
    },
    apresentacao: {
      headline: "Aprender brincando com mais autonomia e participação",
      description:
        "As crianças do Maternal II vivem uma rotina rica em interações, curiosidade e expressão. O planejamento considera interesses do grupo, favorecendo linguagem oral, coordenação, socialização e construção de combinados em um ambiente acolhedor e estimulante.",
      pillars: [
        "Valorização da fala, escuta e participação nas rodas",
        "Propostas lúdicas com investigação e faz de conta",
        "Autonomia nas rotinas de cuidado e organização",
        "Experiências corporais e artísticas com intencionalidade",
      ],
      rotina: [
        {
          label: "Acolhida e combinados",
          detail:
            "Recepção afetiva, organização da sala e retomada de combinados com participação da turma.",
        },
        {
          label: "Rodas e linguagem",
          detail:
            "Cantigas, histórias, diálogos e ampliação do repertório de palavras e narrativas.",
        },
        {
          label: "Projetos e experiências",
          detail:
            "Atividades de investigação, arte, movimento e propostas em pequenos grupos.",
        },
        {
          label: "Vivência livre orientada",
          detail:
            "Espaço para escolhas, brincadeiras simbólicas e mediação pedagógica intencional.",
        },
      ],
    },
    profissionais: [
      {
        role: "Direção Pedagógica",
        name: "Gizele Teste",
        summary:
          "Acompanha os objetivos formativos e a coerência pedagógica das propostas em todas as turmas.",
      },
      {
        role: "Coordenação",
        name: "Fernanda Yumi",
        summary:
          "Monitora rotina, registros e planejamento para garantir continuidade nas aprendizagens.",
      },
      {
        role: "Professora Regente",
        name: "Larissa Souza",
        summary:
          "Conduz vivências com foco em linguagem, imaginação, autonomia e convivência respeitosa.",
      },
    ],
    grade: [
      {
        area: "Linguagens",
        focus: "Oralidade, narrativas e registros iniciais",
        experiences: [
          "Contação de histórias com reconto pelas crianças",
          "Jogos de rimas, sons e vocabulário",
          "Registros gráficos espontâneos e mediado",
        ],
      },
      {
        area: "Matemática",
        focus: "Noções numéricas e relações espaciais",
        experiences: [
          "Contagens em contextos de brincadeira",
          "Sequências e padrões com objetos",
          "Exploração de posições, trajetos e comparações",
        ],
      },
      {
        area: "Natureza e Cultura",
        focus: "Observação, pertencimento e cuidado",
        experiences: [
          "Investigações do ambiente e elementos naturais",
          "Projetos sobre cotidiano e comunidade",
          "Hábitos de cuidado pessoal e coletivo",
        ],
      },
      {
        area: "Movimento",
        focus: "Coordenação ampla, ritmo e desafios motores",
        experiences: [
          "Circuitos com obstáculos e deslocamentos",
          "Brincadeiras rítmicas e jogos com regras simples",
          "Exploração de equilíbrio e lateralidade",
        ],
      },
      {
        area: "Arte",
        focus: "Criação, experimentação e repertório visual",
        experiences: [
          "Pinturas com ferramentas variadas",
          "Modelagem e colagens temáticas",
          "Produções com materiais reutilizáveis",
        ],
      },
    ],
    fotos: [
      {
        image: image4,
        alt: "Atividade lúdica em grupo no Maternal II",
        caption: "Interações e protagonismo em propostas coletivas.",
      },
      {
        image: image5,
        alt: "Crianças em exploração criativa",
        caption: "Criação, observação e descoberta em sala.",
      },
      {
        image: image6,
        alt: "Rotina acolhedora do Maternal II",
        caption: "Ambiente preparado para aprender brincando.",
      },
    ],
  },
  {
    slug: slugifyClassName("Jardim I"),
    turma: "Jardim I",
    categoria: "Infantil",
    faixaEtaria: "4 a 5 anos",
    periodo: "Integral e meio período",
    vagas: "Turmas reduzidas",
    destaque: "Investigações, linguagem e projetos com maior intencionalidade",
    resumo:
      "O Jardim I fortalece a curiosidade e o pensamento investigativo, com propostas que ampliam repertórios de linguagem, matemática, arte e convivência.",
    capa: {
      image: image5,
      alt: "Crianças em sala de aula no Jardim I",
    },
    apresentacao: {
      headline: "Uma etapa de ampliação de repertório e protagonismo",
      description:
        "No Jardim I, as crianças participam de projetos e experiências com maior profundidade, construindo hipóteses, dialogando sobre descobertas e desenvolvendo autonomia em uma rotina que valoriza o brincar e a investigação.",
      pillars: [
        "Projetos pedagógicos conectados ao interesse do grupo",
        "Ampliação da oralidade e de registros gráficos",
        "Noções matemáticas em situações concretas",
        "Convivência, escuta e colaboração em atividades coletivas",
      ],
      rotina: [
        {
          label: "Recepção e planejamento do dia",
          detail:
            "Acolhida com organização do espaço e conversa sobre propostas e combinados da rotina.",
        },
        {
          label: "Vivências por estações",
          detail:
            "Propostas em diferentes cantos com foco em linguagem, matemática, arte e investigação.",
        },
        {
          label: "Projetos e registros",
          detail:
            "Atividades de pesquisa, observação e produção de registros individuais e coletivos.",
        },
        {
          label: "Socialização das descobertas",
          detail:
            "Partilhas, apresentações e conversas sobre processos e resultados das experiências.",
        },
      ],
    },
    profissionais: [
      {
        role: "Direção Pedagógica",
        name: "Gizele Teste",
        summary:
          "Acompanha objetivos de aprendizagem e a progressão entre as etapas da Educação Infantil.",
      },
      {
        role: "Coordenação",
        name: "Fernanda Yumi",
        summary:
          "Apoia a equipe docente na avaliação formativa e nos registros do desenvolvimento infantil.",
      },
      {
        role: "Professora Regente",
        name: "Mariana Alves",
        summary:
          "Media projetos investigativos e experiências integradas com foco em protagonismo e repertório.",
      },
      {
        role: "Profissional de Apoio",
        name: "Rafaela Martins",
        summary:
          "Auxilia na organização de ambientes, rotinas e acompanhamentos individualizados da turma.",
      },
    ],
    grade: [
      {
        area: "Linguagens",
        focus: "Oralidade, narrativa e expressão multimodal",
        experiences: [
          "Reconto de histórias e criação de narrativas",
          "Rodas de conversa com argumentação inicial",
          "Registros gráficos com diferentes suportes",
        ],
      },
      {
        area: "Matemática",
        focus: "Resolução de situações e raciocínio lógico",
        experiences: [
          "Contagem e quantificação em contextos reais",
          "Jogos de regras, classificação e seriação",
          "Noções de medida, tempo e organização espacial",
        ],
      },
      {
        area: "Natureza e Cultura",
        focus: "Investigação do mundo e repertório sociocultural",
        experiences: [
          "Projetos de observação e experimentação",
          "Vivências sobre comunidade, família e território",
          "Ações de cuidado com ambiente e coletividade",
        ],
      },
      {
        area: "Movimento",
        focus: "Corpo, coordenação e expressão",
        experiences: [
          "Circuitos motores e jogos cooperativos",
          "Brincadeiras tradicionais e desafios de coordenação",
          "Expressão corporal com música e ritmo",
        ],
      },
      {
        area: "Arte",
        focus: "Processos criativos e apreciação estética",
        experiences: [
          "Pintura, desenho e colagem autoral",
          "Experimentação com materiais e texturas",
          "Produções coletivas e apreciação de obras",
        ],
      },
    ],
    fotos: [
      {
        image: image5,
        alt: "Projeto coletivo no Jardim I",
        caption: "Investigação e colaboração em experiências do grupo.",
      },
      {
        image: image2,
        alt: "Expressão artística no Jardim I",
        caption: "Arte como linguagem de criação e descoberta.",
      },
      {
        image: image3,
        alt: "Rotina de aprendizagem no Jardim I",
        caption: "Ambientes que favorecem autonomia e repertório.",
      },
    ],
  },
];

export function getClassBySlug(slug: string): SchoolClass | undefined {
  return classData.find((item) => item.slug === slug);
}
