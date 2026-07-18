import { prisma } from "./prisma";

export async function getCompany() {
    const company = await prisma.company.findFirst();

    return company;
}