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
    take: 4,
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
            src="/homebanner02.jpeg"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="space-y-3 pb-5 pl-1">
          <div className="flex items-center justify-between px-3 py-3">
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

          <div>
            <EnterPriseList />
          </div>

        </div>

        

        <div className="lg:flex lg:mt-2">
          <div className="px-5 py-5 relative lg:w-[50%]">
            <BannerItem
              src="/bannerSubsidio.jpeg"
              alt="banner subsídio"
            />
            <div className="">
                <Button className="absolute right-10 bottom-10 uppercase text-zinc-900 text-xs font-semibold w-[150px] lg:bottom-32 lg:right-20 lg:w-[200px] lg:font-bold lg:text-sm ">                  
                  <Link href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+fazer+uma+simula%C3%A7%C3%A3o+de+financiamento.">
                    fazer uma simulação
                  </Link>
                </Button>
            </div>            
          </div>

          <div className="lg:w-[50%] lg:py-44 lg:px-5 max-lg:hidden">
            <p className="lg:leading-9 lg:font-medium lg:text-2xl lg:text-muted-foreground lg:text-center">Se você está pensando em comprar um imóvel, contar com subsídios do governo pode ser um grande diferencial. Esse benefício ajuda a diminuir o valor da entrada e torna as parcelas do financiamento mais leves, facilitando o planejamento financeiro. Além disso, os subsídios tornam o sonho da casa própria mais acessível, ajudando você a sair do aluguel e investir em algo que é realmente seu, com mais segurança e tranquilidade para o futuro</p>
          </div>
        </div>


        <div className="lg:flex">
          <div className="lg:w-[50%] lg:py-44 lg:px-5 max-lg:hidden">
            <p className="lg:leading-9 lg:font-medium lg:text-2xl lg:text-muted-foreground lg:text-center">Você está convidado a conhecer de perto o seu futuro lar! Venha visitar nosso apartamento decorado e se encantar com cada detalhe pensado para o seu conforto e bem-estar. Nossa equipe da Visão Imóveis estará pronta para te receber, tirar todas as suas dúvidas e te ajudar em cada passo da realização do sonho da casa própria. Não perca essa oportunidade de visualizar o seu novo começo!</p>
          </div>

          <div className="py-5 px-5 lg:w-[50%]">
            <div className="py-3 lg:hidden">
              <h1 className="text-sm font-semibold uppercase">Agende uma visita</h1>
            </div>
            <video autoPlay loop muted className="w-full lg:h-[500px]">
              <source src="/Bahamas.mp4" />
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

          <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-2 lg:justify-items-center lg:py-3">
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
