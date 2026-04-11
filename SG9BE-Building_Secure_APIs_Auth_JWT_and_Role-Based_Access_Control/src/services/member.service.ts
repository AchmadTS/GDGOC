import { prisma } from "../config/prisma.js"

export const createMember = (data:any) => {
  return prisma.member.create({ data })
}

export const getMembers = () => {
  return prisma.member.findMany({
    include:{
      loans:true
    }
  })
}

export const getMember = (id:number) => {
  return prisma.member.findUnique({
    where:{id},
    include:{
      loans:{
        include:{
          book:true
        }
      }
    }
  })
}

export const updateMember = (id:number,data:any) => {
  return prisma.member.update({
    where:{id},
    data
  })
}

export const deleteMember = (id:number) => {
  return prisma.member.delete({
    where:{id}
  })
}