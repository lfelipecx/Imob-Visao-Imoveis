import EnterpriseItem from "@/app/_components/enterprise-item";
import { db } from "@/app/_lib/prisma";

const RecommendedEnterprises = async () => {
    const enterprises = await db.enterprise.findMany({
        include: {
            category: {
                select: {
                    name: true,
                }
            }
        }
    })
    return ( 
        <div className="p-5">
            <h1 className="uppercase text-primary mb-2">Empreendimentos</h1>

            <div className="flex flex-col gap-4 items-center">
                {enterprises.map((enterprise) => (
                    <EnterpriseItem
                        key={enterprise.name}
                        enterprise={enterprise}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default RecommendedEnterprises;