

import Image from "next/image";
import Link from "next/link";
const url = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
 
 const fetchSingleDrink = async(id)=>{

 const response = await fetch(`${url}${id}`)

 if(!response.ok){
  throw new Error ("An Error Occured Please fix your url")
 }
 return response.json()
 
}

const SingleDrinkPage =async ({params}) => {

const drink = await fetchSingleDrink(params.id)


console.log(drink);


  return (
    <>

    <Link href='/drinks' className="btn btn-primary mt-8 mb-12">
     Back to drinks
    </Link>
    <div> <p className="text-4xl  mb-8">{drink?.drinks[0].strDrink}</p> 
    
    <Image className="rounded-lg shadow-lg mb-4" priority width={300} height={300} src={drink?.drinks[0].strDrinkThumb} alt="No 
    Preview" />
    
     </div>
     </>
  )
};

export default SingleDrinkPage
