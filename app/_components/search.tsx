"use client"

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";


 
const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: "Digite o nome do empreendimento"
  }),
})


const Search = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        search: "",
      },
    })

    const router = useRouter()    
    
    const handleSearchSubmit = (data: z.infer<typeof formSchema>) => {
      router.push(`/enterprise?search=${data.search}`);
    };


    return ( 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSearchSubmit)} className="flex gap-2 md:w-[500px]">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-full">                  
                  <FormControl>
                    <Input className="border-primary" placeholder="Buscar Empreendimento" {...field} />
                  </FormControl>                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="icon" type="submit">
                <SearchIcon size={20} className="text-zinc-900" />
            </Button>
          </form>
        </Form>
      
     );
}
 
export default Search;