import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import ClientOnly from "@/components/layout/ClientOnly";
import { AosInit } from "@/components/aos-init";



export const metadata: Metadata = {
  title: "SiteBase - Soluções Digitais Modernas",
  description:
    "Desenvolvemos sites rápidos, responsivos e otimizados para gerar resultados reais para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        <AosInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientOnly />
      </body>
    </html>
  );
}
