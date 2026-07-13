import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVEX Ads | Demanda com previsibilidade",
  description:
    "Estruture marketing, anúncios e processo comercial para transformar visibilidade em vendas reais.",
  icons: {
    icon: "/assets/brand/x-mark.png",
    shortcut: "/assets/brand/x-mark.png",
  },
  openGraph: {
    title: "AVEX Ads | Demanda com previsibilidade",
    description:
      "Da atração ao fechamento, a AVEX organiza marketing, anúncios e vendas para gerar demanda previsível.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
