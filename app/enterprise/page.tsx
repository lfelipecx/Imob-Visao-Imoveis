import EnterpriseItem from "../_components/enterprise-item";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface EnterprisesPageProps {
  searchParams: {
    search?: string;
    city?: string;
  }
}


const EnterprisesPage = async ({ searchParams } : EnterprisesPageProps) => {

  const enterprise = await db.enterprise.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
      city: {
        contains: searchParams?.city,
        mode: "insensitive",
      }
    },
    include: {
        category: {
            select: {
                name: true,
            }
        }        
    },
    
  });


  return (
    <div>
      
      <div className="px-5 py-6">
        <Search />
        <h2 className="my-6 text-lg font-semibold text-primary uppercase">Resultados para &quot;{searchParams?.search || searchParams?.city}&quot;</h2>
        <div className="flex flex-col items-center gap-6">
            {enterprise.map((enterprise : any) => (
              <EnterpriseItem
                key={enterprise.id}
                enterprise={enterprise}
              />
            ))}
          </div>
      </div>

    </div>
  );
};

export default EnterprisesPage;