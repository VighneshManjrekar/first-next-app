// It defines a Prisma client singleton pattern, ensuring a single instance of the Prisma client is created and globally accessible, facilitating efficient database connections with optional global exposure (to facilitate hot-reloading or other development-related activities. no need to restart server) in non-production environments for development purposes.

import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;