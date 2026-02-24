import type { StaticImageData } from "next/image";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import evento1 from "../../../public/evento1.webp";
import evento2 from "../../../public/evento2.png";

dayjs.extend(customParseFormat);

export const CALENDAR_DATE_FORMAT = "DD/MM/YYYY";

export type CalendarEvent = {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  texto: string;
  local: string;
  saida?: string;
  imagem: StaticImageData;
  categoria: "Evento" | "Passeio" | "Reunião" | "Projeto" | "Avaliação" | "Oficina";
  publico: "Famílias" | "Educação Infantil" | "Toda a escola" | "Equipe pedagógica";
  etapa: string;
  responsavel: string;
  destaque?: boolean;
  vagas?: string;
  observacao?: string;
};

export const calendarData: CalendarEvent[] = [
  {
    id: 1,
    titulo: "Festa Junina Vivá",
    data: "08/06/2026",
    horario: "16:30",
    texto:
      "Chegou a tão esperada festa junina do Colégio Vivá, com apresentações, barraquinhas e atividades para toda a família.",
    local: "Colégio Vivá",
    imagem: evento1,
    categoria: "Evento",
    publico: "Toda a escola",
    etapa: "Maternal ao Infantil V",
    responsavel: "Coordenação cultural",
    destaque: true,
    observacao: "Traje típico opcional e contribuição solidária de alimentos.",
  },
  {
    id: 2,
    titulo: "Passeio para o bosque",
    data: "20/08/2026",
    horario: "08:00",
    texto: "Vamos conhecer o bosque de São Paulo e fazer um piquenique com atividades de observação da natureza.",
    local: "Bosque de São Paulo - São Paulo/SP",
    saida: "07:00",
    imagem: evento2,
    categoria: "Passeio",
    publico: "Educação Infantil",
    etapa: "Infantil III ao Infantil V",
    responsavel: "Professores regentes + equipe de apoio",
    destaque: true,
    vagas: "Vagas limitadas por turma",
    observacao: "Enviar garrafinha, boné e autorização assinada até 15/08.",
  },
  {
    id: 3,
    titulo: "Reunião de pais e responsáveis",
    data: "14/03/2026",
    horario: "19:00",
    texto: "Encontro de alinhamento pedagógico, rotina escolar, combinados e apresentação do plano do semestre.",
    local: "Auditório do Colégio Vivá",
    imagem: evento1,
    categoria: "Reunião",
    publico: "Famílias",
    etapa: "Todas as turmas",
    responsavel: "Coordenação pedagógica",
    observacao: "Haverá acolhimento com equipe de apoio para crianças mediante inscrição prévia.",
  },
  {
    id: 4,
    titulo: "Semana da Leitura Criativa",
    data: "22/04/2026",
    horario: "09:30",
    texto: "Programação especial com contação de histórias, troca de livros e oficinas de ilustração.",
    local: "Biblioteca e pátio coberto",
    imagem: evento2,
    categoria: "Projeto",
    publico: "Toda a escola",
    etapa: "Maternal ao Infantil V",
    responsavel: "Prof. de Linguagens",
    destaque: true,
    observacao: "Cada criança pode trazer 1 livro para troca solidária.",
  },
  {
    id: 5,
    titulo: "Oficina de culinária afetiva",
    data: "10/05/2026",
    horario: "15:00",
    texto: "Atividade mão na massa com receitas simples, foco em autonomia e trabalho em grupo.",
    local: "Espaço maker / cozinha experimental",
    imagem: evento1,
    categoria: "Oficina",
    publico: "Educação Infantil",
    etapa: "Infantil II ao Infantil V",
    responsavel: "Equipe pedagógica + nutrição",
    vagas: "20 vagas por sessão",
  },
  {
    id: 6,
    titulo: "Mostra de projetos do 1º semestre",
    data: "27/06/2026",
    horario: "10:00",
    texto: "Exposição dos registros e produções das crianças com circuitos interativos para as famílias.",
    local: "Salas temáticas e pátio principal",
    imagem: evento2,
    categoria: "Projeto",
    publico: "Famílias",
    etapa: "Todas as turmas",
    responsavel: "Coordenação pedagógica",
    destaque: true,
  },
  {
    id: 7,
    titulo: "Avaliação diagnóstica lúdica",
    data: "05/09/2026",
    horario: "08:30",
    texto: "Observações e propostas investigativas para acompanhamento do desenvolvimento das turmas.",
    local: "Salas de aula",
    imagem: evento1,
    categoria: "Avaliação",
    publico: "Educação Infantil",
    etapa: "Infantil I ao Infantil V",
    responsavel: "Professores regentes",
    observacao: "Atividade interna; não há necessidade de materiais extras.",
  },
  {
    id: 8,
    titulo: "Encontro pedagógico da equipe",
    data: "18/09/2026",
    horario: "17:45",
    texto: "Formação interna sobre documentação pedagógica, acolhimento e planejamento do próximo ciclo.",
    local: "Sala multiuso",
    imagem: evento2,
    categoria: "Reunião",
    publico: "Equipe pedagógica",
    etapa: "Equipe interna",
    responsavel: "Direção e coordenação",
  },
  {
    id: 9,
    titulo: "Feira das Descobertas",
    data: "24/10/2026",
    horario: "14:00",
    texto: "Experimentos, apresentações e estações de investigação criadas pelas turmas com participação das famílias.",
    local: "Pátio e salas integradas",
    imagem: evento1,
    categoria: "Evento",
    publico: "Toda a escola",
    etapa: "Maternal ao Infantil V",
    responsavel: "Equipe pedagógica",
    destaque: true,
  },
  {
    id: 10,
    titulo: "Celebração de encerramento",
    data: "05/12/2026",
    horario: "18:30",
    texto: "Momento de celebração do ano com apresentações, retrospectiva e homenagem às conquistas das turmas.",
    local: "Auditório + área externa",
    imagem: evento2,
    categoria: "Evento",
    publico: "Famílias",
    etapa: "Todas as turmas",
    responsavel: "Direção escolar",
    destaque: true,
    observacao: "Programação sujeita a ajuste conforme clima.",
  },
];

export const data = calendarData;

export function parseCalendarDate(date: string) {
  return dayjs(date, CALENDAR_DATE_FORMAT, true);
}

export const calendarCategories = Array.from(
  new Set(calendarData.map((event) => event.categoria)),
);
