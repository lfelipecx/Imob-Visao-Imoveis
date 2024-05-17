import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
    return ( 
        <div className="w-full h-auto bg-zinc-900 p-3">
            
            <div className="flex flex-col">

                <div className="flex gap-10">

                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold uppercase">Visão Imóveis</h2>
                        <p className="text-sm">Rua Itália, nº 24, Parque Esplanada 3</p>
                        <p className="text-sm">Valparaíso de Goiás - GO</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Site</h2>
                        <p className="text-sm hover:text-primary">Home</p>
                        <p className="text-sm hover:text-primary">Imóveis</p>
                        <p className="text-sm hover:text-primary">Quem Somos</p>
                        <p className="text-sm hover:text-primary">Contato</p>
                    </div>

                    <div className="flex flex-col gap-2">
                            <h2 className="font-semibold">Sociais</h2>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <InstagramIcon size={18} />
                            <p className="text-sm">Instagram</p>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <FacebookIcon size={18} />
                            <p className="text-sm">Facebook</p> 
                        </div>                     
                       
                    </div>
                </div>

                <div className="py-6">
                    <Separator />
                </div>

                <p className="text-sm">Desenvolvidor por Luiz Felipe</p>

            </div>



        </div>
     );
}
 
export default Footer;