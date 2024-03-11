import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderDefault } from "@/components/header-default/index.js";
import { FooterDefault } from "@/components/footerDefault/FooterDefault";
import StoreProvider from './StoreProvider';
import { getServerSession } from "next-auth";
import SessionProvider from '@/libs/utils/SessionProvider';
import "./globals.scss";

export const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: "Electronix",
  description: "Магазин поддержаной электроники",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="ru">
      <body className={ inter.className }>
        <SessionProvider session={session}>
          <StoreProvider>
            <HeaderDefault />
            <main className="container">
              { children }
            </main>
            <FooterDefault />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
