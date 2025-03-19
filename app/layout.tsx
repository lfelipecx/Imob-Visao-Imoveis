import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Link from "next/link";
import Image from "next/image";
import Analytics from "./_analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visão Imóveis",
  description: "Imóbiliaria Visão Imóveis, comprometida com o profissionalismo e a transparência em todas as etapas do processo. Oferecemos um atendimento personalizado, buscando sempre as melhores opções para nossos clientes, com total clareza em cada negociação.",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      
      <body className={inter.className}>

        <div className="flex flex-col h-full">
          <Header />

          <div className="flex-1">
            {children}
          </div>

          <Footer />

          <div className="relative">
            <Link href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+mais+informações." className="fixed bottom-12 right-0 p-4 z-10 animate-bounce">
              <Image 
                src="/whatsapp.png" 
                alt="botão whatsapp"
                height={40}
                width={40} 
                className="rounded-sm shadow-lg ring ring-green-500 transition-all hover:shadow-md hover:ring-4"
              />              
            </Link>
          </div>

        </div>


      </body>
    </html>
  );
}
