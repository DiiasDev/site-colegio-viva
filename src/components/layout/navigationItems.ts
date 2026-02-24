export type NavigationItem = {
  name: string;
  href: string;
  icon: "home" | "school" | "book" | "layers" | "building" | "users" | "phone";
};

export const navigationItems: NavigationItem[] = [
  { name: "Início", href: "/#inicio", icon: "home" },
  { name: "Colégio Vivá", href: "/colegio-viva", icon: "school" },
  { name: "Proposta Pedagógica", href: "/#proposta", icon: "book" },
  { name: "Segmentos", href: "/#segmentos", icon: "layers" },
  { name: "Estrutura", href: "/#estrutura", icon: "building" },
  { name: "Turmas", href: "/#turmas", icon: "users" },
  { name: "Contato", href: "/contato", icon: "phone" },
];
