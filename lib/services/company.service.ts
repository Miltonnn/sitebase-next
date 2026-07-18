import { prisma } from "@/lib/prisma";


export async function getCompany() {
    return await prisma.company.findFirst();
}