import Link from "next/link";
import BannerItem from "./_components/banner-item";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import EnterPriseList from "./_components/enterprise-list";


export default function Home() {
  return (
    <>
        <Header />

        <div className="p-5">
          <CategoryList />
        </div>

        <div className="px-5">
          <BannerItem
            src="/banner01.png"
            alt="Realize seu sonho da casa própria"
          />
        </div>

        <div className="space-y-2 pb-5">
          <div className="flex items-center justify-between px-5 pt-3">
            <h2 className="font-semibold">Empreendimentos em Destaques</h2>
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


    </>
  );
}
