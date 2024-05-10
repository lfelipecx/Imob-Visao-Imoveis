import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category} : CategoryItemProps) => {
    return (

        
            <Link
                href="/"
                // href={`/categories/${category.id}/products`}
                className="flex items-center justify-center gap-3 rounded-full px-3 py-3 shadow-md bg-zinc-900"
            >
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    height={20}
                    width={20}
                    className="rounded-full"
                />
                <span className="font-semibold">{category.name}</span>
            </Link>
        
     );
}
 
export default CategoryItem;