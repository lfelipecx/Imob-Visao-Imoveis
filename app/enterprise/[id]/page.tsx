import DesktopGallery from "./components/desktop-gallery";
import EnterpriseItem from "@/app/_components/enterprise-item";
import { BathIcon, BedDouble, CarFrontIcon, MapPin, CheckCircle, CalendarDays, MessageCircle } from "lucide-react";
import { db } from "@/app/_lib/prisma";
import EnterpriseImages from "./components/enterprise-image";
import EnterpriseDetails from "./components/enterprise-details";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import EnterPriseList from "@/app/_components/enterprise-list";

interface EnterpriseDetailsProps {
    params: {
        id: string;
    }
}

const EnterprisesDetails = async ({params: {id} } : EnterpriseDetailsProps) => {
    const enterprise = await db.enterprise.findUnique({
        where: {
            id,
        },
        include: {
            category: {
                select: {
                    name: true,
                }
            }
        }
    })

    if(!enterprise) return null

    const related = await db.enterprise.findMany({ where: { id: { not: id }, OR: [{ categoryId: enterprise.categoryId }, { city: enterprise.city }] }, include: { category: { select: { name: true } } } });
    related.sort((a,b) => Number(b.categoryId === enterprise.categoryId) + Number(b.city === enterprise.city) - Number(a.categoryId === enterprise.categoryId) - Number(a.city === enterprise.city));
    const contact = (intent: string) => `https://wa.me/5561982435887?text=${encodeURIComponent(`${intent}: ${enterprise.name}`)}`;


    return ( 
        <>
        <div className="flex flex-col gap-4 pb-5 lg:hidden">
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:ml-2">
                    <EnterpriseImages name={enterprise?.name} imageUrls={enterprise?.imageUrls} />
                </div>
                <div className="lg:w-[50%] lg:p-4">
                    <EnterpriseDetails enterprise={enterprise} />
                </div>
            </div>

            <div className="space-y-2 pb-5 pl-1">
                <div className="flex items-center justify-between px-5 pt-3">
                    <h2 className="text-sm font-semibold lg:text-lg">Empreendimentos em Destaques</h2>
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
        </div>
        <div className="hidden lg:block home-desktop">
          <Link href="/enterprise/recommended" className="text-sm text-muted-foreground hover:text-primary">‹ Voltar para imóveis</Link>
          <header className="my-7">
            <p className="text-primary text-sm uppercase tracking-widest">{enterprise.category.name}</p>
            <h1 className="text-4xl font-medium mt-2">{enterprise.name}</h1>
            <p className="flex items-center gap-2 mt-3 text-muted-foreground"><MapPin size={18} className="text-primary"/>{enterprise.city}</p>
          </header>
          <div className="grid grid-cols-[minmax(0,65fr)_minmax(0,35fr)] gap-8 items-start">
            <main className="min-w-0 space-y-8">
              <DesktopGallery name={enterprise.name} imageUrls={enterprise.imageUrls}/>
              <div className="grid grid-cols-3 rounded-[14px] border border-[#303133] bg-[#1b1c1e] p-6">
                {[[BedDouble, enterprise.room, "Quartos"], [BathIcon, enterprise.bathroom, "Banheiros"], [CarFrontIcon, enterprise.garage, "Vagas"]] .map(([Icon, count, label]) => {
                  const FeatureIcon = Icon as typeof BedDouble;
                  return <div key={String(label)} className="flex flex-col items-center gap-2"><FeatureIcon className="text-primary" size={28}/><strong className="text-xl">{String(count)}</strong><span className="text-sm text-muted-foreground">{String(label)}</span></div>;
                })}
              </div>
              <section><h2 className="home-section-title text-2xl font-medium mb-4">Sobre o empreendimento</h2><p className="whitespace-pre-line leading-relaxed text-muted-foreground">{enterprise.description}</p></section>
              <section className="border-t border-[#303133] pt-6"><h2 className="text-2xl font-medium mb-4">Localização</h2><p className="flex items-center gap-2"><MapPin className="text-primary" size={20}/>{enterprise.address} · {enterprise.city}</p><a className="inline-block mt-3 text-primary underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enterprise.address + ", " + enterprise.city)}`} target="_blank" rel="noopener noreferrer">Ver no mapa</a></section>
            </main>
            <aside className="sticky top-24 rounded-[18px] border border-[#40372e] bg-[#1b1c1e] p-6 xl:p-8 space-y-5">
              <p className="text-primary text-xs tracking-widest">REALIZE SUA CONQUISTA</p>
              <h2 className="text-2xl font-medium">Seu novo imóvel começa aqui.</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">Descubra as condições de financiamento disponíveis para seu perfil.</p>
              <div className="border-t border-[#303133] pt-5 space-y-3">{["Simulação sem compromisso","Atendimento personalizado","Assessoria imobiliária"].map(label => <p key={label} className="flex items-center gap-2 text-sm"><CheckCircle size={17} className="text-primary shrink-0"/>{label}</p>)}</div>
              <a href={contact("Gostaria de simular o financiamento")} className="block rounded-lg bg-primary p-3 text-center font-semibold text-zinc-900 hover:opacity-90">Simular financiamento</a>
              <a href={contact("Gostaria de agendar uma visita")} className="flex items-center justify-center gap-2 rounded-lg border border-primary p-3 text-primary hover:bg-primary/10"><CalendarDays size={18}/> Agendar visita</a>
              <a href={contact("Gostaria de falar com um corretor")} className="flex items-center justify-center gap-2 text-sm hover:text-primary"><MessageCircle size={18} className="text-green-400"/> Falar com um corretor</a>
            </aside>
          </div>
          {related.length > 0 && <section className="mt-16 border-t border-[#303133] pt-8">
            <div className="flex items-center justify-between mb-6"><h2 className="home-section-title text-2xl font-medium">Você também pode gostar</h2><Link href="/enterprise/recommended" className="text-primary text-sm">Ver todos ›</Link></div>
            <div className="grid grid-cols-3 gap-6 [&>a]:min-w-0 [&>a]:w-full [&_.enterprise-card]:h-full">{related.slice(0,3).map(item => <EnterpriseItem key={item.id} enterprise={item}/>)}</div>
          </section>}
        </div>
        </>
     );
}
 
export default EnterprisesDetails;