"use client";

import Image, { type StaticImageData } from "next/image";
import { Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  image: StaticImageData;
};

type CarrousselProps = {
  items: CarouselItem[];
};

export default function Carroussel({ items }: CarrousselProps) {
  if (!items.length) return null;

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_30px_70px_-52px_rgba(31,61,43,0.42)] sm:p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(122,193,67,0.14),transparent_38%),radial-gradient(circle_at_10%_90%,rgba(244,180,0,0.09),transparent_45%)]" />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="gallery-swiper gallery-swiper--hero relative !w-full overflow-hidden rounded-[1.5rem]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!h-auto">
            <div className="relative min-h-[470px] overflow-hidden rounded-[1.5rem] border border-white/70 bg-white sm:min-h-[520px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority={item.id === items[0]?.id}
              />

              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(31,61,43,0.78)_0%,rgba(31,61,43,0.52)_34%,rgba(31,61,43,0.18)_60%,rgba(31,61,43,0.12)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,193,67,0.2),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(244,180,0,0.12),transparent_36%)]" />

              <div className="relative z-10 flex min-h-[470px] flex-col justify-between p-5 sm:min-h-[520px] sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5 text-[var(--color-primary-light)]" />
                    {item.category}
                  </span>

                  <div className="hidden rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-right text-white/90 backdrop-blur-md sm:block">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">
                      Galeria Vivá
                    </p>
                    <p className="text-sm font-semibold">Momento em destaque</p>
                  </div>
                </div>

                <div className="max-w-xl">
                  <p className="text-sm font-semibold text-[var(--color-primary-light)] sm:text-base">
                    {item.subtitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/88 sm:text-base">
                    {item.content}
                  </p>

                  <div className="mt-6">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.14em] text-white/70">
                        Experiência Vivá
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        Aprendizagem com afeto, autonomia e protagonismo infantil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
