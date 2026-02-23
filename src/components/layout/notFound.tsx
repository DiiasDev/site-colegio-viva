import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf0] text-[#14213d]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-52 w-52 animate-[float_9s_ease-in-out_infinite] rounded-full bg-[#ffbe0b]/35 blur-2xl" />
        <div className="absolute right-0 top-28 h-64 w-64 animate-[float_11s_ease-in-out_infinite_reverse] rounded-full bg-[#fb5607]/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 animate-[float_8s_ease-in-out_infinite] rounded-full bg-[#3a86ff]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,134,255,0.12),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(251,86,7,0.10),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,190,11,0.15),transparent_40%)]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-[#14213d]/10 bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur">
              Colegio Vivá • Página não encontrada
            </p>

            <div className="space-y-3">
              <h1 className="text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl">
                4
                <span className="relative mx-1 inline-flex h-[0.9em] w-[0.9em] items-center justify-center align-[-0.08em]">
                  <span className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full border-[10px] border-[#3a86ff]/25 border-t-[#3a86ff]" />
                  <span className="absolute inset-2 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-white shadow-inner" />
                  <span className="text-[0.46em] font-black text-[#fb5607]">0</span>
                </span>
                4
              </h1>
              <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
                O caminho sumiu no pátio digital.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#14213d]/75 sm:text-lg">
                Parece que essa rota não existe no site do Colegio Vivá. Volte
                para a página inicial e continue a navegação.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-[#14213d] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14213d]/20 transition hover:-translate-y-0.5 hover:bg-[#0f1a31]"
              >
                Voltar para o início
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-[#14213d]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[#14213d] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Tentar novamente
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -top-6 right-5 h-16 w-16 animate-[bob_4s_ease-in-out_infinite] rounded-2xl bg-white shadow-lg ring-1 ring-black/5" />
            <div className="absolute left-3 top-20 h-10 w-10 animate-[bob_5s_ease-in-out_infinite_reverse] rounded-full bg-[#ffbe0b]/70" />
            <div className="absolute bottom-6 right-0 h-12 w-12 animate-[bob_6s_ease-in-out_infinite] rounded-full bg-[#fb5607]/50" />

            <div className="relative animate-[float_7s_ease-in-out_infinite] rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-2xl shadow-[#14213d]/10 backdrop-blur-xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#14213d]/60">
                  Mapa Escolar
                </span>
                <span className="rounded-full bg-[#3a86ff]/10 px-3 py-1 text-xs font-semibold text-[#3a86ff]">
                  Extraviado
                </span>
              </div>

              <div className="relative grid place-items-center rounded-3xl bg-gradient-to-br from-[#edf5ff] via-white to-[#fff3db] p-8">
                <div className="absolute left-6 top-6 h-2 w-2 animate-[spark_2.2s_ease-in-out_infinite] rounded-full bg-[#3a86ff]" />
                <div className="absolute right-8 top-10 h-2 w-2 animate-[spark_2.8s_ease-in-out_infinite] rounded-full bg-[#fb5607]" />
                <div className="absolute bottom-8 left-10 h-2 w-2 animate-[spark_2.4s_ease-in-out_infinite] rounded-full bg-[#ffbe0b]" />

                <div className="relative">
                  <div className="absolute inset-0 animate-[pulse_3.5s_ease-in-out_infinite] rounded-full bg-[#3a86ff]/15 blur-xl" />
                  <Image
                    src="/icon-512.png"
                    alt="Colegio Vivá"
                    width={156}
                    height={156}
                    className="relative h-32 w-32 animate-[bob_5s_ease-in-out_infinite] object-contain drop-shadow-xl sm:h-36 sm:w-36"
                    priority
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-[#14213d]/15 bg-white/70 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-[#14213d]">
                    Nenhuma sala encontrada nesta direção
                  </p>
                  <p className="mt-1 text-xs text-[#14213d]/60">
                    Recalculando rota para a página inicial...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes spark {
          0%, 100% { transform: scale(0.8); opacity: 0.45; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
