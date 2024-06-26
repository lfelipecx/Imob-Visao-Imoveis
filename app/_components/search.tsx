"use client"

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };
    
      const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    
        if (!search) {
          return;
        }
    
        router.push(`/enterprise?search=${search}`);
      };

    return ( 
        <form className="flex gap-2" onSubmit={handleSearchSubmit}>
            <Input 
                placeholder="Buscar Empreendimento"
                className="border-primary"
                onChange={handleChange}
                value={search}
            />
            <Button size="icon" type="submit">
                <SearchIcon size={20} className="text-zinc-900" />
            </Button>
        </form>
     );
}
 
export default Search;