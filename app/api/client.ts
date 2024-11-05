import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prismaInit = new PrismaClient();
} else {
    const globalWithPrisma = global as typeof global & { prisma?: PrismaClient };
    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new PrismaClient();
    }
    prismaInit = globalWithPrisma.prisma;
}

export const prisma = prismaInit;
