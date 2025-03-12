import React from 'react'

export default function Header() {
  return (
    <div className='border-b border-gray-300 w-full py-3 backdrop-blur-md sticky top-0 z-50 hidden md:block'>
        <div className="mx-auto w-11/12 flex justify-between gap-2 items-center">
            <a href="#" className='font-bold text-2xl'> Jihadur </a>
            <ul className='flex gap-5'>
                <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#skills"> Skills </a></li> 
                <li><a href="#portfolio"> Portfolio </a></li>
                <li><a href="#experience"> Experience </a></li>    
            </ul>
        </div>
    </div>
  )
}
