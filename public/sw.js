self.addEventListener("install", () => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", () => {
  // Não estamos usando cache
});