import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderDefault } from "@/components/header-default/index.js";
import "./globals.scss";

export const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: "Electronix",
  description: "Магазин поддержаной электроники",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={ inter.className }>
        <HeaderDefault />
        <main className="container">
          { children }
        </main>
      </body>
    </html>
  );
}
