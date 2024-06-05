import { Button } from "@/app/_components/ui/button";
import { Prisma } from "@prisma/client";
import { BathIcon, BedDouble, CarFrontIcon } from "lucide-react";
import Link from "next/link";

interface EnterpriseDetailsProps {
    enterprise: Prisma.EnterpriseGetPayload<{
        include: {
            category: {
                select: {
                    name: true,
                }
            }
        }
    }>
}

const EnterpriseDetails = ({enterprise} : EnterpriseDetailsProps) => {
    return ( 
        <div className="p-4">
            <div className="flex items-center justify-between">
                <p className="uppercase text-sm font-semibold">{enterprise.name}</p>
                <p className="text-xs font-semibold rounded-full bg-primary px-2 py-1 text-zinc-900">{enterprise.category.name}</p>
            </div>
            <p className="text-sm">{enterprise.city}</p>
            <p className="text-muted-foreground text-sm py-2">{enterprise.description}</p>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <BedDouble size={16} />
                    <p className="text-sm">{enterprise.room} Quartos</p>
                </div>
                <div className="flex items-center gap-1">
                    <BathIcon size={16} />
                    <p className="text-sm">{enterprise.bathroom} Banheiro</p>
                </div>
                <div className="flex items-center gap-1">
                    <CarFrontIcon size={16} />
                    <p className="text-sm">{enterprise.garage} Garagem</p>
                </div>
            </div>
            <Button className="mt-5 w-full uppercase text-zinc-900 font-semibold">
                <Link href="https://wa.me/5561982435887?text=Gostaria+de+fazer+uma+simula%C3%A7%C3%A3o+de+financiamento.">
                    Fazer uma simulação
                </Link>
            </Button>
        </div>
     );
}
 
export default EnterpriseDetails;