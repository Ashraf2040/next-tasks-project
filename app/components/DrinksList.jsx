"use client"

import Image from "next/image";
import Link from "next/link";

const DrinksList = ({data}) => {

  console.log(data)
  return (
    <ul className="menu menu-vertical pl-0 sm:grid sm:grid-cols-2 gap-4">
    {data.map((drink)=>  <Link href={`/drinks/${drink.idDrink}`} key={drink.id}>
      
      <p className="font-medium text-xl">{drink.strDrink}</p>
      <Image className="rounded-lg" width={250} height={200} src={drink.strDrinkThumb} alt="No Preview found" />
    
    </Link>)}

    </ul>
  )
};

export default DrinksList
