"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"
import { redirect } from "next/navigation"


export const getAllTasks = async ()=>{

  return await prisma.task.findMany()
}


export const createTask = async (formData)=>{
const content = formData.get("content")
    await prisma.task.create({
  data:{
    Content :content
  }
 
})
    revalidatePath("/tasks")
}

export const deleteTask = async (formData)=>{
  const id = formData.get("id")
  await prisma.task.delete({
    where:{id}

  })
  revalidatePath("/tasks")
}

 export const updateContent = async (formData)=>{

const updatedContent = formData.get("newContent")
const id = formData.get("id")

           await prisma.task.update({
            where:{
              id
              },
            data:{
              Content : updatedContent
            }
           })
 redirect("/tasks")
}