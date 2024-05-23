import { Testimony } from "@prisma/client";
import { Card } from "./ui/card";
import Image from "next/image";

interface TestimonyItemProps {
    testimony: Testimony
}

const TestimonyItem = ( {testimony} : TestimonyItemProps ) => {
    return ( 
        <Card className="min-w-[300px] max-w-[300px] rounded-lg flex flex-col gap-4 items-center p-3 border-primary bg-zinc-900">
            <div className="flex items-center relative h-[130px] w-[130px]">
                <Image 
                    src={testimony.imageUrl}
                    alt={testimony.name}
                    fill                    
                    className="rounded-full object-cover object-center border-4 border-muted-foreground"
                />
            </div>
            <div className="flex flex-col gap-3 items-center">
                <h1 className="uppercase font-semibold">{testimony.name}</h1>
                <p className="text-sm text-muted-foreground text-center">{testimony.testimony}</p>
            </div>
        </Card>
     );
}
 
export default TestimonyItem;