import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category} : CategoryItemProps) => {
    return (

        <div>
            <Link
                href="/"
                // href={`/categories/${category.id}/products`}
                className="flex items-center justify-center rounded-full gap-3 px-3 py-3 bg-zinc-900"
            >
                
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    height={20}
                    width={20} 
                    className="rounded-full"                  
                /> 
                <span className="text-sm font-semibold hover:text-primary">{category.name}</span>
            </Link>
        </div>
        
     );
}
 
export default CategoryItem;