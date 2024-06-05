import EnterpriseItem from "@/app/_components/enterprise-item";
import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";

interface CategoriesPageProps {
    params: {
        id: string;
    }
}

const CategoriesPage = async ({ params : {id} } : CategoriesPageProps) => {
    const category = await db.category.findUnique({
        where: {
            id,
        },
        include: {
            enterprises: {
                include: {
                    category: {
                        select: {
                            name: true,
                        }
                    }
                }
            } 
            
        },
        
    })

    if(!category) return notFound()


    return ( 
        <div className="p-5">

            <h1 className="uppercase text-primary text-xl font-semibold mb-4">{category.name}</h1>

            <div className="flex flex-col gap-4 items-center">
                {category.enterprises.map((enterprise) => (
                    <div key={enterprise.name} className="flex flex-col items-center">
                        <EnterpriseItem  enterprise={enterprise} />
                    </div>
                ))}
            </div>



        </div>
     );
}
 
export default CategoriesPage;