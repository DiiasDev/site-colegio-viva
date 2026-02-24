import LocalMap from "../components/about/LocalMap";
import Cabecalho from "../components/contact/Cabecalho";
import CardsContact from "../components/contact/Cards";
import FormContact from "../components/contact/FormContact";
import { Container } from "../components/layout/Container";

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-background)]">
      <Cabecalho />

      <section className="relative pb-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(122,193,67,0.08),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(31,61,43,0.06),transparent_42%)]" />
        <Container className="relative space-y-8">
          <CardsContact />
          <FormContact />
          <LocalMap />
        </Container>
      </section>
    </main>
  );
}
