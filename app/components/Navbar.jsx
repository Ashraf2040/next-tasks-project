import Link from 'next/link'
import React from 'react'




const list = ["client","drinks","prisma","tasks"]




const Navbar = () => {
  
  return (
    <nav className='bg-base-300 py-4   '>
    <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>

    <Link className='btn btn-primary' href="/">Next.js Tutorial</Link>
    <ul className='menu menu-horizontal md:ml-8 gap-8  '>
    {list.map((list)=><Link className='capitalize' key={list} href={`/${list}`}>{`${list}`}</Link>)}
    </ul>
    </div>
    
    </nav>
  )
}


export default Navbar
