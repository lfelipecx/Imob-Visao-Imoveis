import EnterpriseItem from "@/app/_components/enterprise-item";
import Search from "@/app/_components/search";
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
            <div className="lg:flex lg:justify-center">
                <Search />
            </div>
            <h1 className="uppercase text-primary text-xl font-semibold my-6">Empreendimentos</h1>

            <div className="flex flex-col gap-4 items-center lg:grid lg:grid-cols-4">
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