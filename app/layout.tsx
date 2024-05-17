import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imob. Visão Imóveis",
  description: "Imóbiliaria Visão Imóveis, realizando sonhos à mais de 20 anos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
