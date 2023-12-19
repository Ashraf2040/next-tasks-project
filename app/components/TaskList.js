import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/action";

const TaskList =async () => {

  const tasks = await getAllTasks()
  if(tasks.length === 0){
    return <h2 className="text-lg mt-8 font-medium"> No Tasks to show ....</h2>
  }
  return (
    <ul className="mt-8">
 {tasks.map((task)=>{
return( <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 rounded-lg bordered border-base-300 shadow-lg">
 
 <h2 className={`text-lg capitalize ${task.completed ?"line-through":null}`}>{task.Content}</h2>
 
 <div className="flex justify-center items-center gap-6">
 <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
 Edit
 </Link>
 <DeleteForm  id={task.id}/>
 </div>
 
 </li>)})} 
    </ul>
  )
};

export default TaskList
