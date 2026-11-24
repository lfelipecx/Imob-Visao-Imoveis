import EnterpriseItem from "@/app/_components/enterprise-item";
import Search from "@/app/_components/search";
import { db } from "@/app/_lib/prisma";
import DesktopFilters from "./desktop-filters";

export default async function RecommendedEnterprises() {
  const enterprises = await db.enterprise.findMany({
    include: { category: { select: { name: true } } },
  });

  return (
    <>
      <div className="p-5 lg:hidden">
        <Search />
        <h1 className="uppercase text-primary text-xl font-semibold my-6">Empreendimentos</h1>
        <div className="flex flex-col gap-4 items-center">
          {enterprises.map(enterprise => <EnterpriseItem key={enterprise.id} enterprise={enterprise} />)}
        </div>
      </div>
      <div className="hidden lg:block home-desktop">
        <header className="mb-8">
          <p className="text-sm text-primary tracking-widest uppercase">Visão Imóveis · DF e Entorno</p>
          <h1 className="mt-3 text-4xl font-medium">Encontre seu próximo imóvel.</h1>
          <p className="mt-2 text-muted-foreground">O imóvel ideal para uma nova etapa da sua vida.</p>
        </header>
        <div className="mb-8"><Search /></div>
        <DesktopFilters items={enterprises.map(enterprise => ({
          id: enterprise.id, category: enterprise.category.name, city: enterprise.city,
          card: <EnterpriseItem enterprise={enterprise} />,
        }))} />
      </div>
    </>
  );
}
