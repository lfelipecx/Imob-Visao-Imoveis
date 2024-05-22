import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category} : CategoryItemProps) => {
    return (

        
            <Link
                href={`/categories/${category.id}`}
                className="flex items-center justify-center rounded-full gap-3 px-2 py-2 bg-zinc-900"
            >
                
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    height={18}
                    width={18}
                    className="rounded-full h-4"                  
                /> 
                <span className="text-sm font-semibold hover:text-primary">{category.name}</span>
            </Link>
        
        
     );
}
 
export default CategoryItem;