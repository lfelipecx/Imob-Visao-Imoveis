import { Prisma } from "@prisma/client";
import { BathIcon, BedDouble, CarFrontIcon } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

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
        <Link href={`/enterprise/${enterprise.id}`}>
            <Card className="min-w-[350px] max-w-[360px] space-y-4 bg-zinc-900 rounded-lg">
                {/** IMAGEM */}
                <div className="relative h-[240px] w-full">
                    <Image 
                        src={enterprise.imageUrls[0]}
                        alt={enterprise.name}
                        fill
                        className="rounded-lg object-cover"
                    />

                    <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1">
                        <p className="text-sm font-semibold text-zinc-900">{enterprise.category.name}</p>
                    </div>
                </div>
                {/** TEXTO */}
                <div className="px-3 pb-2">
                    <h2 className="text-xl font-semibold">{enterprise.name}</h2>
                    <p>{enterprise.city}</p>
                    <p>{enterprise.address}</p>
                    <div className="h-[170px] my-4">
                        <p className="text-sm text-muted-foreground">{enterprise.description}</p>
                    </div>

                    <div className="flex items-center gap-3">
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
                </div>
            </Card>
        </Link>
     );
}
 
export default EnterpriseItem;