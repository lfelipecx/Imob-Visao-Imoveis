import { FacebookIcon, InstagramIcon, MapPin, Phone, UsersRound } from "lucide-react";
import { Card } from "../_components/ui/card";
import { Separator } from "../_components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
    return ( 
        <div className="p-5 space-y-3">
            <h1 className="uppercase text-xl text-primary font-semibold">Contate-nos</h1>
            <Card className="bg-zinc-900 px-3 pt-5">
                <div className="flex justify-center pb-2">
                    <MapPin size={40} className="text-primary"/>
                </div>
                <h1 className="text-center font-semibold pb-2 uppercase">Escritório</h1>
                <p className="text-sm text-center pb-5">Rua Grécia, qd. 54, lt 01, loja 07,<br /> Parque Esplanada 3<br />Valparaíso de Goiás - GO</p>
                <Separator />

                <div className="flex flex-col gap-2 justify-center items-center py-5">
                    <Phone size={40} className="text-primary"/>
                    <h1 className="font-semibold uppercase">Suporte Whatsapp</h1>
                    <Link href="/" className="flex gap-2 items-center rounded-full px-2 py-2 bg-primary hover:bg-primary/90">
                        <div className="relative h-[25px] w-[25px]">
                            <Image 
                                src="/whatsapp.png" 
                                alt="whatsapp"
                                fill 
                                className="object-cover rounded-full" />
                        </div>
                        <p className="text-sm text-zinc-900 font-semibold">61 98243-5887</p>
                    </Link>
                </div>

                <Separator />

                <div className="flex justify-center pt-5">
                    <UsersRound size={40} className="text-primary"/>
                </div>
                <h1 className="text-center font-semibold py-2 uppercase">Redes Sociais</h1>
                
                <div className="flex flex-col gap-1 items-center justify-center pb-5">
                    <Link href="/"  className="flex gap-2 hover:text-primary">
                        <InstagramIcon size={18} />
                        <p className="text-sm">Instagram</p>
                    </Link>
                    <Link href="/"  className="flex gap-2 hover:text-primary">
                        <FacebookIcon size={18} />
                        <p className="text-sm">Facebook</p>
                    </Link>
                </div>


            </Card>
        </div>
     );
}
 
export default ContactPage;