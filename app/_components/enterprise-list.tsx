import { db } from "../_lib/prisma";
import EnterpriseItem from "./enterprise-item";

const EnterPriseList = async () => {
    const enterprises = await db.enterprise.findMany({
        include: {
            category: {
                select: {
                    name: true,
                }
            }
        },
        take: 4,
    })


    return ( 
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-2 lg:justify-items-center lg:py-3">
            {enterprises.map((enterprise) => (
                <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
            ))}
        </div>
     );
}
 
export default EnterPriseList;