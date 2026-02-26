"use client";

import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { CalendarDays, Sparkles, Tag } from "lucide-react";

import Carroussel from "@/src/components/gallery/Carroussel";
import Cabecalho from "@/src/components/contact/Cabecalho";
import Filter, { type FilterOption } from "@/src/components/gallery/Filter";

type GalleryItem = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  media: StaticImageData | string;
  mediaType?: "image" | "video";
  badge: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Aprender com movimento e curiosidade",
    subtitle: "Vivências em sala e espaços integrados",
    category: "Aprendizagem",
    badge: "Projeto",
    content:
      "Momentos em que as crianças exploram materiais, constroem hipóteses e transformam descobertas em experiências significativas de aprendizagem.",
    media: "/Real/image2.png",
  },
  {
    id: 2,
    title: "Brincadeiras que fortalecem vínculos",
    subtitle: "Interações e socialização",
    category: "Convivência",
    badge: "Rotina",
    content:
      "A convivência diária favorece autonomia, escuta e colaboração. Cada brincadeira vira oportunidade para cuidar, compartilhar e se expressar.",
    media: "/Real/image3.png",
  },
  {
    id: 3,
    title: "Atividades criativas com expressão livre",
    subtitle: "Arte, traços, cores e imaginação",
    category: "Arte",
    badge: "Oficina",
    content:
      "Atividades com tinta, materiais e experimentação que valorizam processo, curiosidade e expressão das crianças no cotidiano da turma.",
    media: "/Real/image4.png",
  },
  {
    id: 4,
    title: "Registro real da atividade de pintura",
    subtitle: "Documentação pedagógica",
    category: "Aprendizagem",
    badge: "Vídeo",
    content:
      "Vídeo de uma proposta prática em sala, mostrando participação, observação e interação das crianças durante a vivência.",
    media: "/Real/Video1.mp4",
    mediaType: "video",
  },
  {
    id: 5,
    title: "Protagonismo infantil em atividade guiada",
    subtitle: "Infância em ação",
    category: "Brincadeiras",
    badge: "Projeto",
    content:
      "As crianças participam ativamente das propostas, investigando possibilidades e desenvolvendo confiança em cada etapa da rotina escolar.",
    media: "/Real/image1.png",
  },
  {
    id: 6,
    title: "Registros de uma rotina viva e afetiva",
    subtitle: "Cuidado, acolhimento e presença",
    category: "Convivência",
    badge: "Vídeo",
    content:
      "Recorte em vídeo da rotina pedagógica com foco em vínculo, acompanhamento e participação das crianças em propostas cotidianas.",
    media: "/Real/video2.mp4",
    mediaType: "video",
  },
  {
    id: 7,
    title: "Exploração sensorial e observação",
    subtitle: "Aprendizagem em processo",
    category: "Aprendizagem",
    badge: "Vídeo",
    content:
      "Registro audiovisual de uma vivência prática que evidencia curiosidade, coordenação motora e mediação pedagógica.",
    media: "/Real/video3.mp4",
    mediaType: "video",
  },
  {
    id: 8,
    title: "Interações e vínculos em sala",
    subtitle: "Convivência e rotina",
    category: "Convivência",
    badge: "Vídeo",
    content:
      "Vídeo com foco nas interações entre as crianças, mostrando momentos de atenção, espera e colaboração nas atividades.",
    media: "/Real/video5.mp4",
    mediaType: "video",
  },
  {
    id: 9,
    title: "Vivência lúdica com mediação docente",
    subtitle: "Brincar, experimentar e aprender",
    category: "Brincadeiras",
    badge: "Vídeo",
    content:
      "Registro em vídeo de uma proposta lúdica em sala que reforça a intencionalidade pedagógica e o protagonismo infantil.",
    media: "/Real/video6.mp4",
    mediaType: "video",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return Array.from(new Set(galleryItems.map((item) => item.category)));
  }, []);

  const filterOptions = useMemo<FilterOption[]>(() => {
    return [
      { label: "Todas as categorias", value: "all", count: galleryItems.length },
      ...categories.map((category) => ({
        label: category,
        value: category,
        count: galleryItems.filter((item) => item.category === category).length,
      })),
    ];
  }, [categories]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const carouselItems = filteredItems.length ? filteredItems : galleryItems;
  const storyItems = filteredItems;

  return (
    <main className="bg-[var(--color-background)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:gap-10 lg:px-8 lg:py-10">
        <Cabecalho title="Galeria" badge="Galeria" />

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Filter
              value={selectedCategory}
              options={filterOptions}
              onChange={setSelectedCategory}
            />

            <div className="mt-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_45px_-35px_rgba(31,61,43,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
                Resultado atual
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--color-secondary)]">
                {filteredItems.length}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {selectedCategory === "all"
                  ? "imagens em todas as categorias"
                  : `imagens em ${selectedCategory}`}
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <Carroussel items={carouselItems} />
          </div>
        </div>

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
                Galeria em destaque
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
                Experiências que mostram nossa rotina
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">
              <Sparkles className="h-4 w-4 text-[var(--color-primary-dark)]" />
              {selectedCategory === "all"
                ? "Conteúdo visual de todas as categorias"
                : `Conteúdo visual de ${selectedCategory}`}
            </div>
          </div>

          <div className="space-y-6">
            {storyItems.map((item, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_25px_60px_-45px_rgba(31,61,43,0.38)]"
                >
                  <div
                    className={[
                      "grid gap-0 lg:grid-cols-2",
                      reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : "",
                    ].join(" ")}
                  >
                    <div className="relative min-h-[260px] sm:min-h-[320px]">
                      {item.mediaType === "video" ? (
                        <video
                          src={typeof item.media === "string" ? item.media : undefined}
                          className="absolute inset-0 h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          controls={false}
                          disablePictureInPicture
                        />
                      ) : (
                        <Image
                          src={item.media}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(31,61,43,0.18)] via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-map-ink)] px-3 py-1 text-xs font-semibold text-[var(--color-secondary)]">
                          <Tag className="h-3.5 w-3.5" />
                          {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {item.badge}
                        </span>
                      </div>

                      <p className="mt-4 text-sm font-semibold text-[var(--color-primary-dark)]">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight text-[var(--color-secondary)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
                        {item.content}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                          <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                            Foco pedagógico
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                            Experiência significativa e acolhimento
                          </p>
                        </div>
                        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                          <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                            Categoria
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {!filteredItems.length ? (
            <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
              <p className="text-lg font-semibold text-[var(--color-secondary)]">
                Nenhuma imagem encontrada
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Tente selecionar outra categoria para visualizar mais registros.
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
