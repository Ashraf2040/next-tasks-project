
import prisma from '@/utils/db'

import React from 'react'

 const prismaHandler = async()=>{
    await prisma.task.create({
      data:{
        Content : ""
      },
    })
    const allTasks = await prisma.task.findMany()
    return allTasks
  } 
const PrismaExample =async () => {

  const tasks = await prismaHandler()

 
  return (
    <div>
     <h1 className='text-7xl'> Prisma Examples</h1>
     {tasks.map((task)=><h2 className='text-xl py-2' key={task.id}>{task.Content}</h2>
     )}
    </div>
  )
}

export default PrismaExample
