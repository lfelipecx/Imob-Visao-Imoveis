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
        }
    })


    return ( 
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {enterprises.map((enterprise) => (
                <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
            ))}
        </div>
     );
}
 
export default EnterPriseList;