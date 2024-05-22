"use client"

import { Category, Enterprise } from "@prisma/client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchForEnterprises } from "../_actions/search";
import EnterpriseItem from "@/app/_components/enterprise-item";


const Enterprises = () => {
    const searchParams = useSearchParams();
    const [enterprises, setEnterprises] = useState<Enterprise[] | Category[]>([]);

    const searchFor = searchParams.get("search");

    useEffect(() => {
        const fetchEnterprises = async () => {
            if (!searchFor) return;
            const foundEnterprises = await searchForEnterprises(searchFor);
            setEnterprises(foundEnterprises);
        };

        fetchEnterprises();
    }, [searchFor]);

    if (!searchFor) {
        return notFound();
    }
    return ( 
        <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold text-primary uppercase">Empreendimentos Encontrados</h2>
        <div className="flex flex-col items-center gap-6">
          {enterprises.map((enterprise : any) => (
            <EnterpriseItem
              key={enterprise.id}
              enterprise={enterprise}
            />
          ))}
        </div>
      </div>
     );
}
 
export default Enterprises;