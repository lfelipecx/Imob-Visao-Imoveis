
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Building, Contact, HomeIcon, MenuIcon, Users } from "lucide-react";
import { Separator } from "./ui/separator";
import { quickSearchOptions } from "../_constants/search-city";

const Header = () => {
    return ( 
        <div className="flex items-center justify-between px-5 rounded-b-lg border-2 border-b-zinc-900 lg:border-none">
            <Link href="/" className="relative h-[80px] w-[100px]">
                <Image src="/logo01.png" alt="Logo Visão" fill className="object-cover" />
            </Link>

            <Sheet>
                <SheetTrigger>
                    <Button 
                        size="icon" 
                        variant="outline" 
                        className="border-none bg-transparent"
                    >
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-left">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="mt-10 space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                            asChild
                        >
                            <SheetClose asChild>
                                <Link href="/">
                                    <HomeIcon size={16} />
                                    <span className="block">Início</span>
                                </Link>
                            </SheetClose>
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                            asChild
                        >
                            <SheetClose asChild>
                                <Link href="/enterprise/recommended">
                                    <Building size={16} />
                                    <span className="block">Imóveis</span>
                                </Link>
                            </SheetClose>
                        </Button>

                        
                        <Button
                            variant="ghost"
                            className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                            asChild
                        >
                            <SheetClose asChild>
                                <Link href="/about">
                                    <Users size={16} />
                                    <span className="block">Quem Somos</span>
                                </Link>
                            </SheetClose>
                        </Button>
                       
                        <Button
                            variant="ghost"
                            className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                            asChild
                        >   
                            <SheetClose asChild>
                                <Link href="/contact">
                                    <Contact size={16} />
                                    <span className="block">Contato</span>
                                </Link>
                            </SheetClose>
                        </Button>


                        <Separator />

                        <div className="py-2">
                            <h3 className="text-primary">Buscar imóvel por cidade</h3>
                        </div>

                        <div className="flex flex-col gap-2">
                            {quickSearchOptions.map((option) => (
                                <SheetClose key={option.title} asChild>
                                    <Button className="justify-start rounded-full text-sm font-normal" variant="ghost" asChild>
                                    <Link href={`/enterprise?city=${option.title}`}>
                                        <span>{option.title}</span>
                                    </Link>
                                    </Button>
                                </SheetClose>
                            ))}
                        </div>
                       
                        
                            
                        
                        
                        
                    </div>
                </SheetContent>
            </Sheet>

            

        </div>
     );
}
 
export default Header;