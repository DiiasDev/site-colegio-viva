"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { navigationItems } from "./navigationItems";
import ClassModal, { CLASS_MODAL_OPEN_EVENT } from "../class/modals/classModal";

export function Header() {
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsClassModalOpen(true);
    window.addEventListener(CLASS_MODAL_OPEN_EVENT, open);
    return () => window.removeEventListener(CLASS_MODAL_OPEN_EVENT, open);
  }, []);

  return (
    <>
      <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-50 backdrop-blur-md">
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon-512.png"
              alt="Logo Colégio Vivá"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover"
              priority
            />
            <span className="text-xl font-bold text-[var(--color-secondary)]">
              Colégio Vivá
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              if (item.icon === "users") {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setIsClassModalOpen(true)}
                    className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contato"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition"
          >
            Agende uma visita
          </Link>
        </Container>
      </header>

      <ClassModal open={isClassModalOpen} onClose={() => setIsClassModalOpen(false)} />
    </>
  );
}
