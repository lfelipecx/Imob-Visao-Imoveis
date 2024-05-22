"use server";

import { db } from "@/app/_lib/prisma";

export const searchForEnterprises = async (search: string) => {
  const enterprise = await db.enterprise.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    include: {
        category: {
            select: {
                name: true,
            }
        }
        
    }
  });

  return enterprise;
};