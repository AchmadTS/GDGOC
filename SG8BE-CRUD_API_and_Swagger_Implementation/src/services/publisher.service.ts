import { prisma } from "../config/prisma.js"

export const createPublisher=(data:any)=>{
  return prisma.publisher.create({data})
}

export const getPublishers=()=>{
  return prisma.publisher.findMany({
    include:{books:true}
  })
}

export const getPublisher=(id:number)=>{
  return prisma.publisher.findUnique({where:{id}})
}

export const updatePublisher=(id:number,data:any)=>{
  return prisma.publisher.update({
    where:{id},
    data
  })
}

export const deletePublisher=(id:number)=>{
  return prisma.publisher.delete({
    where:{id}
  })
}