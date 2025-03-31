import Link from "next/link";
import BannerItem from "./_components/banner-item";
import CategoryList from "./_components/category-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import EnterPriseList from "./_components/enterprise-list";
import Search from "./_components/search";
import TestimonyList from "./_components/testimony-list";
import { db } from "./_lib/prisma";
import EnterpriseItem from "./_components/enterprise-item";



const Home = async () => {
  const enterprisesCity = await db.enterprise.findMany({
    where: {
      city: {
        contains: "Valparaíso",
        mode: "insensitive"
      }      
    },
    take: 8,
    include: {
        category: {
            select: {
                name: true,
            }
        }
    }
  })

  return (
    <div className="lg:mx-8">
      
      <div className="lg:flex lg:justify-center lg:flex-col lg:items-center">
        <div className="px-5 pt-5">
          <Search />
        </div>

        <div className="px-5 pt-5">
          <CategoryList />
        </div>
      </div>

        <div className="px-5 py-5">
          <BannerItem
            src="/homebanner.jpeg"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="space-y-3 pb-5 pl-1 lg:animate-slide-down">
          <div className="flex items-center justify-between px-3 pt-3">
            <h2 className="text-sm font-semibold uppercase lg:text-xl">Empreendimentos em Destaques</h2>
            <Button
              variant="ghost"
              className="h-fit p-0 text-primary hover:bg-transparent"
              asChild
              >
              <Link href="/enterprise/recommended">
                Ver todos
                <ChevronRightIcon size={16} />
              </Link>
            </Button>

          </div>

          <div className="lg:px-4">
            <EnterPriseList />
          </div>

        </div>

        

        <div className="lg:flex lg:mt-2">
          <div className="px-5 py-5 relative lg:w-[50%]">
            <BannerItem
              src="/bannerSubsidio.jpeg"
              alt="banner subsídio"
            />
            <div className="lg:hidden">
                <Button className="absolute right-10 bottom-10 uppercase text-zinc-900 text-xs font-semibold w-[150px] ">                  
                  <Link href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+fazer+uma+simula%C3%A7%C3%A3o+de+financiamento.">
                    fazer uma simulação
                  </Link>
                </Button>
            </div>            
          </div>


          <div className="py-5 px-5 lg:w-[50%]">
            <div className="p-3 px-3 lg:hidden">
              <h1 className="text-sm font-semibold uppercase">Agende uma visita</h1>
            </div>
            <video autoPlay loop muted className="w-full lg:h-[500px]">
              <source src="/antonella.mp4" />
            </video>
          </div>


        </div>

        <div className="space-y-3 pb-5 pl-1">
          <div className="flex items-center justify-between px-3 pt-3">
            <h2 className="text-sm font-semibold uppercase lg:text-xl">Valparaíso de Goiás</h2>
            <Button
              variant="ghost"
              className="h-fit p-0 text-primary hover:bg-transparent"
              asChild
              >
              <Link href="/enterprise/recommended">
                Ver todos
                <ChevronRightIcon size={16} />
              </Link>
            </Button>

          </div>

          <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-2 lg:justify-items-center">
            {enterprisesCity.map((enterprise) => (
                <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
            ))}
        </div>

        </div>


        <div className="pb-5 px-2">
          <div className="p-3 px-3">
            <h1 className="text-sm font-semibold uppercase lg:text-xl lg:text-center">O que nossos clientes dizem</h1>
          </div>

          <div className="lg:flex lg:justify-center">
            <TestimonyList />
          </div>
        </div>

        <div className="px-5 pb-5">
          <BannerItem
            src="/MCMV.png"
            alt="minha casa minha vida"
          />
        </div>


        


    </div>
  );
}
export default Home
