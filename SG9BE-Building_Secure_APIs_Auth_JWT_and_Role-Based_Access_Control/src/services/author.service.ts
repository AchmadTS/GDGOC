import { prisma } from "../config/prisma.js"

export const createAuthor=(data:any)=>{
  return prisma.author.create({data})
}

export const getAuthors=()=>{
  return prisma.author.findMany({
    include:{
      books:true,
      profile:true
    }
  })
}

export const getAuthor=(id:number)=>{
  return prisma.author.findUnique({
    where:{id},
    include:{profile:true,books:true}
  })
}

export const updateAuthor=(id:number,data:any)=>{
  return prisma.author.update({
    where:{id},
    data
  })
}

export const deleteAuthor=(id:number)=>{
  return prisma.author.delete({
    where:{id}
  })
}