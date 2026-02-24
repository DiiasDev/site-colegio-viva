"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BookOpenText,
  Building2,
  GraduationCap,
  Home,
  Images,
  Phone,
  Users,
} from "lucide-react";

import { navigationItems } from "./navigationItems";
import { dispatchOpenClassModal } from "../class/modals/classModal";

type HashTarget =
  | "#inicio"
  | "#proposta"
  | "#segmentos"
  | "#estrutura"
  | "#turmas"
  | "#contato";

const iconMap = {
  school: GraduationCap,
  book: BookOpenText,
  layers: Images,
  building: Building2,
  users: Users,
  phone: Phone,
} as const;

const HOME_HASHES: HashTarget[] = [
  "#inicio",
  "#proposta",
  "#segmentos",
  "#estrutura",
  "#turmas",
  "#contato",
];

function normalizeHash(hash: string): string {
  if (!hash) return "";
  return hash.startsWith("#") ? hash : `#${hash}`;
}

function SideNavItem({
  href,
  label,
  active,
  iconKey,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  iconKey: keyof typeof iconMap;
  onClick?: () => void;
}) {
  const Icon = iconMap[iconKey];

  if (onClick) {
    return (
      <li className="relative flex items-center justify-center">
        <button
          type="button"
          onClick={onClick}
          aria-label={label}
          className="group relative flex h-9 w-9 items-center justify-center rounded-xl text-[color:color-mix(in_srgb,var(--color-text-secondary)_72%,white)] transition hover:bg-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          <Icon
            className={[
              "h-[18px] w-[18px] transition",
              active ? "text-[var(--color-secondary)]" : "",
            ].join(" ")}
            strokeWidth={2}
          />
        </button>

        <span
          aria-hidden="true"
          className={[
            "absolute -bottom-1 h-1.5 w-1.5 rounded-full transition",
            active ? "bg-[var(--color-primary)]" : "bg-transparent",
          ].join(" ")}
        />
      </li>
    );
  }

  return (
    <li className="relative flex items-center justify-center">
      <Link
        href={href}
        aria-label={label}
        className="group relative flex h-9 w-9 items-center justify-center rounded-xl text-[color:color-mix(in_srgb,var(--color-text-secondary)_72%,white)] transition hover:bg-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        <Icon
          className={[
            "h-[18px] w-[18px] transition",
            active ? "text-[var(--color-secondary)]" : "",
          ].join(" ")}
          strokeWidth={2}
        />
      </Link>

      <span
        aria-hidden="true"
        className={[
          "absolute -bottom-1 h-1.5 w-1.5 rounded-full transition",
          active ? "bg-[var(--color-primary)]" : "bg-transparent",
        ].join(" ")}
      />
    </li>
  );
}

export function NavigationMobile() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const syncHash = () => setCurrentHash(normalizeHash(window.location.hash));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/class")) return "/#turmas";
    if (pathname === "/colegio-viva") return "/colegio-viva";
    if (pathname === "/" && HOME_HASHES.includes(currentHash as HashTarget)) {
      return `/${currentHash}`;
    }
    if (pathname === "/") return "/#inicio";
    return pathname;
  }, [pathname, currentHash]);

  const homeItem = navigationItems.find((item) => item.icon === "home");
  const sideItems = navigationItems.filter((item) => item.icon !== "home");
  const leftItems = sideItems.slice(0, 3);
  const rightItems = sideItems.slice(3);

  if (!homeItem) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+0.4rem)] z-[60] px-3 md:hidden">
        <nav aria-label="Navegação inferior" className="pointer-events-auto mx-auto max-w-[27rem]">
          <div className="relative">
            <div className="relative h-[70px]">
              <div className="absolute inset-x-0 bottom-0 h-[52px] overflow-hidden rounded-[1.1rem] shadow-[0_12px_24px_-22px_rgba(31,61,43,0.25)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 430 52"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    d="M18 52H412C421.94 52 430 43.94 430 34V18C430 8.06 421.94 0 412 0H288C268 0 261 32 215 32C169 32 162 0 142 0H18C8.06 0 0 8.06 0 18V34C0 43.94 8.06 52 18 52Z"
                    fill="white"
                    stroke="rgba(229,231,235,0.95)"
                  />
                </svg>

                <div className="relative grid h-full grid-cols-[1fr_1fr_1fr_84px_1fr_1fr_1fr] items-center px-2">
                  {leftItems.map((item) => (
                    <SideNavItem
                      key={item.href}
                      href={item.href}
                      label={item.name}
                      active={activeHref === item.href}
                      iconKey={item.icon as keyof typeof iconMap}
                      onClick={item.icon === "users" ? dispatchOpenClassModal : undefined}
                    />
                  ))}

                  <div aria-hidden="true" />

                  {rightItems.map((item) => (
                    <SideNavItem
                      key={item.href}
                      href={item.href}
                      label={item.name}
                      active={activeHref === item.href}
                      iconKey={item.icon as keyof typeof iconMap}
                      onClick={item.icon === "users" ? dispatchOpenClassModal : undefined}
                    />
                  ))}
                </div>
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-1px] z-[9] h-[56px] w-[56px] -translate-x-1/2 rounded-full bg-black/8 blur-[2px]"
              />

              <Link
                href={homeItem.href}
                aria-label={homeItem.name}
                className="absolute left-1/2 top-[-9px] z-10 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border-[2px] border-white/80 bg-[var(--color-primary)] shadow-[0_14px_22px_-16px_rgba(31,61,43,0.42),0_1px_0_rgba(255,255,255,0.45)_inset] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.16),transparent_64%)]" />
                <span className="absolute inset-[5px] rounded-full border border-white/12" />
                <Home
                  aria-hidden="true"
                  className="relative h-5 w-5 text-white"
                  strokeWidth={2.1}
                />
                <span className="sr-only">Início</span>
              </Link>

              <span
                aria-hidden="true"
                className={[
                  "absolute bottom-0.5 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full transition",
                  activeHref === homeItem.href ? "bg-[var(--color-primary)]" : "bg-transparent",
                ].join(" ")}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigationMobile;
