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


    return ( 
        <div className="flex flex-col gap-4 pb-5">
            <EnterpriseImages name={enterprise?.name} imageUrls={enterprise?.imageUrls} />
            <EnterpriseDetails enterprise={enterprise} />

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
        </div>
     );
}
 
export default EnterprisesDetails;