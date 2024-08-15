import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div id='hero' className='bg-pink-50 border-b-2 border-b-black justify-center items-center flex w-[100%] pt-[50px] lg:pt-[120px]'>
        <div className='lg:w-[85%] w-[90%] gap-[50px] lg:gap-0 flex lg:flex-row flex-col justify-center lg:justify-between items-center'>
            <div className='lg:w-[40%] w-[100%] gap-[30px] items-center flex flex-col lg:gap-[20px]'>
                <p className='md:text-[35px] text-[30px] text-center lg:text-start font-bold text-blue-600'>BECOME A FRONTEND DEVELOPER</p>
                <p className='text-[18px] text-center lg:text-start text-blue-900 font-semibold'>Transform your passion into a career. Master frontend development and build dynamic, user-friendly websites and apps. Start your journey today!</p>
                <div className='w-[100%] flex justify-center items-center lg:justify-start lg:items-start '>
                    <a href='#course' className='bg-blue-600 border-2 border-blue-600 py-[10px] hover:bg-transparent hover:text-blue-600 rounded-full px-[20px] font-bold text-white'>Enroll Now</a>
                </div>
            </div>
            <div className='background-image flex justify-end items-end w-[100%] lg:w-[55%]'>
                <Image width={1000} height={1000} className='w-full h-full' src="/image/man.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero
