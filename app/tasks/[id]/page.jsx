import { updateContent } from "@/utils/action";

const editSingleTask = ({params}) => {

  const id = params.id

  return (
    <form action={updateContent}>
    <label htmlFor="content">New Content : </label>
    <input className="mx-4 py-2 rounded-md px-2" type="text"   id="content" name="newContent"/>
    <input  type="hidden" name="id"  value={id}  />
    <button className="btn btn-accent btn-xs ">Submit</button>
    </form>
  )
};

export default editSingleTask
