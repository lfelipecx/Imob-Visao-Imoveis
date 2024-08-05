
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Building, Contact, HomeIcon, MenuIcon, Users } from "lucide-react";
import { Separator } from "./ui/separator";
import CategoryList from "./category-list";

const Header = () => {
    return ( 
        <div className="flex items-center justify-between px-5 rounded-b-lg border-2 border-b-zinc-900">
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

                        
                        <SheetClose>
                            <CategoryList />
                        </SheetClose>
                            
                        
                        
                        
                    </div>
                </SheetContent>
            </Sheet>

            

        </div>
     );
}
 
export default Header;