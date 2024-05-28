import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
    return ( 
        <div className="w-full h-auto bg-zinc-900 p-3">
            
            <div className="flex flex-col">

                <div className="flex flex-col gap-7">

                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm font-semibold uppercase text-primary">Visão Imóveis</h2>
                        <p className="text-xs">Rua Grécia, qd. 54, lt 01, loja 07, Parque Esplanada 3</p>
                        <p className="text-xs">Valparaíso de Goiás - GO</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-semibold text-primary">Site</h2>
                        <p className="text-xs hover:text-primary">Home</p>
                        <p className="text-xs hover:text-primary">Imóveis</p>
                        <p className="text-xs hover:text-primary">Quem Somos</p>
                        <p className="text-xs hover:text-primary">Contato</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-semibold text-primary">Redes Sociais</h2>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <InstagramIcon size={15} />
                            <p className="text-xs">Instagram</p>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <FacebookIcon size={15} />
                            <p className="text-xs">Facebook</p> 
                        </div>                     
                       
                    </div>
                </div>

                <div className="py-6">
                    <Separator />
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-xs">Desenvolvidor por Luiz Felipe</p>
                    <p className="text-xs">61 98664-9103</p>
                </div>

            </div>



        </div>
     );
}
 
export default Footer;