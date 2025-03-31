import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_ICON } from "../_constants/category-icon";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category} : CategoryItemProps) => {
    return (

        
            <Link
                href={`/categories/${category.id}`}
                className="flex items-center justify-center rounded-full gap-1 px-2 py-2 bg-zinc-900 hover:text-primary lg:gap-2 lg:px-3"
            >
                
                {/* <Image
                    src={category.imageUrl}
                    alt={category.name}
                    height={18}
                    width={18}
                    className="rounded-full h-4"                  
                />  */}

                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="text-sm font-semibold lg:text-base">{category.name}</span>
            </Link>
        
        
     );
}
 
export default CategoryItem;