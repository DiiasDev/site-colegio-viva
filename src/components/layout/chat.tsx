"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { ChatModal } from "../modals/chatModal";

const SCHOOL_EMAIL = "devpdias@gmail.com";

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        schoolEmail={SCHOOL_EMAIL}
      />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
        aria-expanded={isOpen}
        className={[
          "fixed right-4 z-[70] flex h-14 items-center overflow-hidden rounded-full shadow-xl transition-all duration-300 ease-out md:right-6",
          "bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] md:bottom-6",
          isOpen
            ? "pointer-events-none w-14 translate-y-2 scale-95 justify-center bg-[var(--color-secondary)] text-white opacity-0"
            : "w-14 justify-center bg-[var(--color-primary)] text-white hover:scale-105",
        ].join(" ")}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Image
            src="/icon-192.png"
            alt="Abrir chat do Colégio Vivá"
            width={32}
            height={32}
            quality={100}
            className="h-8 w-8 object-contain"
          />
        )}
      </button>
    </>
  );
}

export default Chat;
