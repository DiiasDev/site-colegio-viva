export type NavigationItem = {
  name: string;
  href: string;
  icon:
    | "home"
    | "school"
    | "book"
    | "layers"
    | "building"
    | "users"
    | "phone"
    | "folder"
    | "calendar";
};

export const navigationItems: NavigationItem[] = [
  { name: "Início", href: "/#inicio", icon: "home" },
  { name: "Colégio Vivá", href: "/colegio-viva", icon: "school" },
  { name: "Projetos", href: "/projetos", icon: "folder" },
  { name: "Galeria", href: "/galeria", icon: "layers" },
  { name: "Calendário", href: "/calendario", icon: "calendar" },
  { name: "Turmas", href: "/#turmas", icon: "users" },
  { name: "Contato", href: "/contato", icon: "phone" },
];
