import { Button } from "@/app/_components/ui/button";
import { Prisma } from "@prisma/client";
import { BathIcon, BedDouble, CarFrontIcon } from "lucide-react";

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
            <p className="uppercase text-lg font-semibold">{enterprise.name}</p>
            <p className="text-sm">{enterprise.city}</p>
            <p className="text-muted-foreground py-2">{enterprise.description}</p>
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
                Fazer uma simulação
            </Button>
        </div>
     );
}
 
export default EnterpriseDetails;