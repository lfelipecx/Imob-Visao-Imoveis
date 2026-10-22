import { Testimony } from "@prisma/client";
import { Card } from "./ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonyItemProps {
    testimony: Testimony
}

const TestimonyItem = ( {testimony} : TestimonyItemProps ) => {
    return ( 
        <Card className="testimony-card min-w-[250px] max-w-[250px] rounded-lg flex flex-col gap-4 items-center p-3 border-primary bg-zinc-900">
            <div className="flex items-center relative h-[90px] w-[90px] lg:hidden">
                <Image 
                    src={testimony.imageUrl}
                    alt={testimony.name}
                    fill                    
                    className="rounded-full object-cover object-center border-4 border-muted-foreground"
                />
            </div>
            <div className="flex flex-col gap-3 items-center lg:hidden">
                <h1 className="uppercase font-semibold">{testimony.name}</h1>
                <p className="text-sm text-muted-foreground text-center">{testimony.testimony}</p>
            </div>
            <figure className="testimony-desktop hidden lg:flex">
                <div className="testimony-quote-mark" aria-hidden="true"><Quote size={28} strokeWidth={1.5} /></div>
                <blockquote>{testimony.testimony}</blockquote>
                <figcaption>
                    <div className="testimony-avatar">
                        <Image src={testimony.imageUrl} alt={testimony.name} fill sizes="52px" className="object-cover" />
                    </div>
                    <span className="testimony-author">{testimony.name}</span>
                    <span className="testimony-author-accent" aria-hidden="true" />
                </figcaption>
            </figure>
        </Card>
     );
}
 
export default TestimonyItem;