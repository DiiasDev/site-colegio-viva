import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { NavigationMobile } from "../components/layout/NavigationMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nome da Escola",
  description: "Site oficial da escola",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-28 md:pb-0`}
      >
        <ServiceWorkerRegister />
        <Header />
        {children}
        <Footer />
        <NavigationMobile />
      </body>
    </html>
  );
}
