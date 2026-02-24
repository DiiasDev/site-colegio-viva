import Chat from "../components/layout/chat";
import { HomeContent } from "../components/home/HomeContent";

export default function Home() {
  return (
    <main id="inicio" className="bg-[var(--color-background)]">
      <HomeContent />

      <Chat />
    </main>
  );
}
