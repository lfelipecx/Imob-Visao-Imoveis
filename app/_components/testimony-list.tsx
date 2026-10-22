import { db } from "../_lib/prisma";
import TestimonyItem from "./testimony-item";
import TestimonyMotion from "./testimony-motion";

const TestimonyList = async () => {
    const testimonys = await db.testimony.findMany({})

    return ( 
        <TestimonyMotion>
            {testimonys.map((testimony) => (
                <TestimonyItem key={testimony.id} testimony={testimony} />
            ))}
        </TestimonyMotion>
     );
}
 
export default TestimonyList;