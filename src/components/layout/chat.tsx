"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatModal } from "../modals/chatModal";

const SCHOOL_EMAIL = "devpdias@gmail.com";

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatModal
        isOpen={isOpen}
        schoolEmail={SCHOOL_EMAIL}
      />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
        aria-expanded={isOpen}
        className={[
          "fixed bottom-6 right-6 z-[60] flex h-14 items-center overflow-hidden rounded-full shadow-xl transition-all duration-300 ease-out",
          isOpen
            ? "w-14 justify-center bg-[var(--color-secondary)] text-white"
            : "w-14 justify-center bg-[var(--color-primary)] text-white hover:scale-105",
        ].join(" ")}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </>
  );
}

export default Chat;
