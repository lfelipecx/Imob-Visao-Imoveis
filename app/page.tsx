import Link from "next/link";
import BannerItem from "./_components/banner-item";
import CategoryList from "./_components/category-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import EnterPriseList from "./_components/enterprise-list";
import Search from "./_components/search";
import TestimonyList from "./_components/testimony-list";


export default function Home() {
  return (
    <>
        <div className="px-5 pt-5">
          <Search />
        </div>

        <div className="px-5 pt-5">
          <CategoryList />
        </div>

        <div className="px-5 py-5">
          <BannerItem
            src="/banner01.png"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="space-y-3 pb-5 pl-1">
          <div className="flex items-center justify-between px-5 pt-3">
            <h2 className="text-sm font-semibold uppercase">Empreendimentos em Destaques</h2>
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
            <EnterPriseList />

        </div>

        <div className="px-5 py-5">
          <BannerItem
            src="/banner02.png"
            alt="logo visão imóveis"
          />
        </div>

        <div className="pb-5 px-2">
          <div className="p-3 px-5">
            <h1 className="text-sm font-semibold uppercase">O que nossos clientes dizem</h1>
          </div>
          <TestimonyList />
        </div>

        <div className="px-5 pb-5">
          <BannerItem
            src="/MCMV.png"
            alt="minha casa minha vida"
          />
        </div>


    </>
  );
}
