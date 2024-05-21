import Link from "next/link";
import BannerItem from "./_components/banner-item";
import CategoryList from "./_components/category-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import EnterPriseList from "./_components/enterprise-list";


export default function Home() {
  return (
    <>
        

        <div className="p-5">
          <CategoryList />
        </div>

        <div className="px-5 py-5">
          <BannerItem
            src="/banner01.png"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="space-y-2 pb-5 pl-1">
          <div className="flex items-center justify-between px-5 pt-3">
            <h2 className="text-lg font-semibold">Empreendimentos em Destaques</h2>
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
            src="/logoVisao.png"
            alt="logo visão imóveis"
          />
        </div>


    </>
  );
}
