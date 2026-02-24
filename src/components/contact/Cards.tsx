import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Timer } from "lucide-react";

type CardContactItem = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  href?: string;
  icon: "address" | "phone" | "email" | "hours";
};

const iconMap = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  hours: Timer,
};

export default function CardsContact() {
  const cardsValues = [
    {
      id: 1,
      title: "Endereço",
      subtitle: "Venha nos visitar",
      content:
        "Rua Santa Gertrudes, 1978 - Bela Vista IV, Cosmópolis - SP, 13150-312, Brasil",
      href: "https://maps.google.com/?q=Rua%20Santa%20Gertrudes%2C%201978%20Cosm%C3%B3polis%20SP",
      icon: "address",
    },
    {
      id: 2,
      title: "Telefone / WhatsApp",
      subtitle: "Atendimento da secretaria",
      content: "(19) 99999-9999 \n(19) 00000-0000",
      href: "https://wa.me/5519999999999",
      icon: "phone",
    },
    {
      id: 3,
      title: "Email",
      subtitle: "Canal para informações",
      content: "colegioVivah@gmail.com",
      href: "mailto:colegioVivah@gmail.com",
      icon: "email",
    },
    {
      id: 4,
      title: "Horário de atendimento",
      subtitle: "Secretaria escolar",
      content: "Segunda a sexta, das 7h às 18h",
      icon: "hours",
    },
  ] satisfies CardContactItem[];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cardsValues.map((card) => {
        const Icon = iconMap[card.icon];
        const contentLines = card.content.split("\n");

        const cardContent = (
          <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_40px_-32px_rgba(31,61,43,0.4)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(31,61,43,0.45)]">
            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[var(--color-primary)]/10 blur-2xl transition group-hover:bg-[var(--color-primary)]/20" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)]">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                {card.subtitle}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-tight text-[var(--color-secondary)]">
                {card.title}
              </h3>

              <div className="mt-3 space-y-1 text-sm leading-6 text-[var(--color-text-primary)]">
                {contentLines.map((line) => (
                  <p key={`${card.id}-${line}`}>{line}</p>
                ))}
              </div>

              <div className="mt-auto pt-4">
                {card.href ? (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">
                    Acessar canal
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-[var(--color-secondary)]">
                    Atendimento presencial e remoto
                  </span>
                )}
              </div>
            </div>
          </div>
        );

        if (!card.href) {
          return <div key={card.id}>{cardContent}</div>;
        }

        return (
          <Link
            key={card.id}
            href={card.href}
            target={card.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={card.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="block"
          >
            {cardContent}
          </Link>
        );
      })}
    </section>
  );
}
