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
import Image from "next/image";
import CompanyResults from "./_components/company-results";



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
    <div className="home-desktop lg:mx-8">
      <section className="desktop-hero hidden lg:grid">
        <div className="desktop-hero-copy">
          <p className="eyebrow">VISÃO IMÓVEIS · DF E ENTORNO</p>
          <h1>Um novo endereço.<br /><span>Uma nova história.</span></h1>
          <p className="hero-description">Encontre o imóvel que combina com o seu momento. Da primeira visita à entrega das chaves, conte com a nossa equipe.</p>
          <Link href="/enterprise/recommended" className="desktop-contact">Explore nossos imóveis <span aria-hidden="true">→</span></Link>
          <div className="hero-caption"><span /> Seu próximo passo começa com uma boa escolha.</div>
        </div>
        <div className="desktop-hero-image">
          <Image src="/familia-fachada-hero-desktop.webp" alt="Família brasileira em frente à sua residência" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="hero-image-note"><span>MAIS PERTO DA SUA CONQUISTA</span><strong>Imóveis. Pessoas. Novos começos.</strong></div>
        </div>
      </section>
      
      <div className="desktop-search-panel lg:flex lg:justify-center lg:flex-col lg:items-center">
        <div className="px-5 pt-5">
          <Search />
        </div>

        <div className="px-5 pt-5">
          <CategoryList />
        </div>
      </div>

        <div className="lg:hidden animate-fade-up animate-duration-1000 animate-delay-500 animate-ease-linear px-5 py-5">
          <BannerItem
            src="/homebanner02.jpeg"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="desktop-list-section space-y-3 pb-5 pl-1">
          <div className="flex items-center justify-between px-3 py-3">
            <h2 className="home-section-title text-sm font-semibold uppercase lg:text-xl">Empreendimentos em Destaques</h2>
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

        

        <div className="desktop-feature lg:flex lg:mt-2">
          <div className="px-5 py-5 relative lg:w-[50%]">
            <div className="lg:hidden">
              <BannerItem src="/bannerSubsidio.jpeg" alt="banner subsídio" />
            </div>
            <div className="desktop-subsidy-photo hidden lg:block">
              <Image src="/subsidio-desktop.webp" alt="Chaves de um novo apartamento em condomínio residencial" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="">
                <Button className="absolute right-10 bottom-10 uppercase text-zinc-900 text-xs font-semibold w-[150px] lg:bottom-32 lg:right-20 lg:w-[200px] lg:font-bold lg:text-sm ">                  
                  <Link href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+fazer+uma+simula%C3%A7%C3%A3o+de+financiamento.">
                    fazer uma simulação
                  </Link>
                </Button>
            </div>            
          </div>

          <div className="lg:w-[50%] lg:py-44 lg:px-5 max-lg:hidden">
            <div className="desktop-feature-copy">
              <p className="eyebrow">SEU PRIMEIRO PASSO</p>
              <h2>Subsídios de até <span className="text-primary">R$ 100 mil.</span></h2>
              <p>Conheça as possibilidades de financiamento para o seu perfil. Nossa equipe ajuda você a entender cada etapa da compra do seu imóvel.</p>
              <p className="subsidy-condition">Valores sujeitos às regras dos programas e à análise do perfil do comprador.</p>
              <Link className="desktop-contact" href="https://wa.me/5561982435887?text=Gostaria+de+simular+meu+financiamento">Simular financiamento <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>


        <div className="desktop-feature desktop-visit lg:flex">
          <div className="lg:w-[50%] lg:py-44 lg:px-5 max-lg:hidden">
            <div className="desktop-feature-copy">
              <p className="eyebrow">CONHEÇA DE PERTO</p>
              <h2>Imagine seu novo começo.</h2>
              <p>Visite nosso apartamento decorado, conheça os detalhes e tire suas dúvidas com a equipe da Visão Imóveis.</p>
              <Link className="desktop-contact" href="https://wa.me/5561982435887?text=Gostaria+de+agendar+uma+visita">Agendar uma visita <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="py-5 px-5 lg:w-[50%]">
            <div className="py-3 lg:hidden">
              <h1 className="text-sm font-semibold uppercase">Agende uma visita</h1>
            </div>
            <video autoPlay loop muted className="w-full lg:h-[500px]">
              <source src="/Villagio.mp4" />
            </video>
          </div>
        </div>



        

        <div className="desktop-list-section space-y-3 pb-5 pl-1">
          <div className="flex items-center justify-between px-3 pt-3">
            <h2 className="home-section-title text-sm font-semibold uppercase lg:text-xl">Valparaíso de Goiás</h2>
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


        <div className="desktop-testimonials pb-5 px-2">
          <div className="p-3 px-3">
            <h1 className="home-section-title text-sm font-semibold uppercase lg:text-xl lg:text-center">O que nossos clientes dizem</h1>
          </div>

          <div className="lg:flex lg:justify-center">
            <TestimonyList />
          </div>
        </div>

        <CompanyResults />

        <div className="desktop-bottom-banner px-5 pb-5 lg:hidden">
          <BannerItem
            src="/MCMV.png"
            alt="minha casa minha vida"
          />
        </div>


        


    </div>
  );
}
export default Home
