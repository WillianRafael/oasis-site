import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flypremium.com.br"),
  title: "Oasis | Viagens e Experiências",
  description:
    "Viagens sob medida com inteligência em milhas, tarifas e curadoria humana.",
  openGraph: {
    title: "Oasis | Viagens e Experiências",
    description:
      "Viagens sob medida com inteligência em milhas, tarifas e curadoria humana.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og/oasis.png",
        width: 1200,
        height: 630,
        alt: "Oasis | Viagens e Experiências",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07100f",
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
