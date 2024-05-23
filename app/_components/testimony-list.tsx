import { db } from "../_lib/prisma";
import TestimonyItem from "./testimony-item";

const TestimonyList = async () => {
    const testimonys = await db.testimony.findMany({})

    return ( 
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {testimonys.map((testimony) => (
                <TestimonyItem key={testimony.id} testimony={testimony} />
            ))}
        </div>
     );
}
 
export default TestimonyList;