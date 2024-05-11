import { Prisma } from "@prisma/client";
import { BathIcon, BedDouble, CarFrontIcon } from "lucide-react";
import Image from "next/image";

interface EnterpriseItemProps {
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

const EnterpriseItem = ({enterprise} : EnterpriseItemProps) => {
    return ( 
        <div className="min-w-[380px] max-w-[380px] space-y-4 bg-zinc-900 rounded-lg">
            {/** IMAGEM */}
            <div className="relative h-[250px] w-full">
                <Image 
                    src={enterprise.imageUrls[0]}
                    alt={enterprise.name}
                    fill
                    className="rounded-lg object-cover"
                />

                <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1">
                    <p className="text-sm font-semibold">{enterprise.category.name}</p>
                </div>
            </div>
            {/** TEXTO */}
            <div className="px-3 pb-2">
                <h2 className="text-xl font-semibold">{enterprise.name}</h2>
                <p>{enterprise.city}</p>
                <p>{enterprise.address}</p>
                <p className="text-sm py-3">{enterprise.description}</p>

                <div className="flex items-center gap-2">
                    <BedDouble size={16} />
                    <p className="text-sm">{enterprise.room} Quartos</p>
                    <BathIcon size={16} />
                    <p className="text-sm">{enterprise.bathroom} Banheiro</p>
                    <CarFrontIcon size={16} />
                    <p className="text-sm">{enterprise.garage} Garagem</p>
                </div>
            </div>
        </div>
     );
}
 
export default EnterpriseItem;