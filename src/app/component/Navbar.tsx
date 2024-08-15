
'use client'
import React, { useState } from 'react'
// import register from '../register/Register'
import Link from 'next/link'
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


function Navbar() {
      const [dropdown, setDropdown] = useState(false)
      async function handleDropdown(){
        setDropdown(!dropdown)
      }
  return (
    <div className='flex flex-col w-[100%] z-50 md:flex bg-pink-100 py-[20px] items-center justify-around'>
        <div className='flex w-[100%] bg-pink-100 items-center justify-around'>
            <p className='text-[23px] font-bold'>CHRISMI</p>
            <div className=' hidden lg:flex-row lg:flex  gap-[20px]'>
                <a href="#hero"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Home</p></a>
                <a href="#about"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>About Us</p></a>
                <a href="#course"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Course</p></a>
                <a href="#faq"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>FAQ</p></a>
                <a href="/register"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Contact</p></a>
            </div>
            <div className='hidden lg:flex-row lg:flex '>
                <a href='/register'><button className='transition duration-300 text-white py-[10px] font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 px-[15px] bg-gradient-to-r from-pink-700 to-blue-700'>Register Now</button></a>
            </div>
            <button onClick={handleDropdown} className='lg:hidden flex font-bold text-[20px]'>{dropdown? <IoClose/> : <RiMenu4Fill />}</button>
        </div>
        {
          dropdown && 
          <div className='w-[100%] gap-4 py-[30px] justify-center items-center flex flex-col'>
            <div className=' flex flex-col justify-center items-center lg:hidden  gap-[20px]'>
                <a href="#hero"><p className='text-[17px] hover:text-pink-600 text-black font-semibold'>Home</p></a>
                <a href="#about"><p className='text-[17px] hover:text-pink-600 text-black font-semibold'>About Us</p></a>
                <a href="#course"><p className='text-[17px] hover:text-pink-600 text-black font-semibold'>Course</p></a>
                <a href="#faq"><p className='text-[17px] hover:text-pink-600 text-black font-semibold'>FAQ</p></a>
                <a href="/register"><p className='text-[17px] hover:text-pink-600 text-black font-semibold'>Contact</p></a>
            </div>
            <div className='flex lg:hidden '>
                <a href='/register'><button className='transition duration-300 text-white py-[10px] font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 px-[15px] bg-gradient-to-r from-pink-700 to-blue-700'>Register Now</button></a>
            </div>
          </div>
        }

    </div>
  )
}

export default Navbar
