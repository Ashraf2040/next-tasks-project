

import React from 'react'
// import { resolve } from 'styled-jsx/css'
import DrinksList from '../components/DrinksList'


const fetchDrinks = async()=>{

await new Promise((resolve)=>setTimeout(resolve ,1000))
  const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

 const response = await fetch(url)

 if(!response.ok){
  throw new Error ("An Error Occured Please fix your url")
 }

 const data = await response.json()
 return data
}
const Drinkspage =async () => {
 const data =await fetchDrinks()
 const drinks = data.drinks
 
  return (
    <div>

      <DrinksList data={drinks} />
    </div>
  )
}

export default  Drinkspage
