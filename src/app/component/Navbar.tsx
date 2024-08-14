import React from 'react'

function Navbar() {
  return (
    <div className='flex w-[100%] z-50 fixed bg-pink-100 py-[20px] items-center justify-around'>
        <p className='text-[23px] font-bold'>CHRISMI</p>
        <div className='flex gap-[20px]'>
            <a href="#hero"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Home</p></a>
            <a href="#about"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>About Us</p></a>
            <a href="#course"><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Course</p></a>
            <a href=""><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>FAQ</p></a>
            <a href=""><p className='text-[15px] hover:text-pink-600 text-black font-semibold'>Contact</p></a>
        </div>
        <div>
            <a href="#contact"><button className='transition duration-300 text-white py-[10px] font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 px-[15px] bg-gradient-to-r from-pink-700 to-blue-700'>Register Now</button></a>
        </div>
    </div>
  )
}

export default Navbar
