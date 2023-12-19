

import { PrismaClient } from "@prisma/client";

const PrismaClientSinleton = ()=>{
  return new PrismaClient()
}

type PrismaClientSinleton = ReturnType<typeof PrismaClientSinleton>

const globalForPrisma = globalThis as unknown as {
  prisma : PrismaClientSinleton | undefined

}

const prisma = globalForPrisma.prisma ?? PrismaClientSinleton()

export default prisma

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma =prisma

