import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div id='hero' className='bg-pink-50 border-b-2 border-b-black justify-center items-center flex w-[100%] pt-[120px]'>
        <div className='w-[85%] flex justify-between items-center'>
            <div className='w-[40%] flex flex-col gap-[20px]'>
                <p className='text-[35px] font-bold text-blue-600'>BECOME A FRONTEND DEVELOPER</p>
                <p className='text-[18px] text-blue-900 font-semibold'>Transform your passion into a career. Master frontend development and build dynamic, user-friendly websites and apps. Start your journey today!</p>
                <div>
                    <a href='#course' className='bg-blue-600 border-2 border-blue-600 py-[10px] hover:bg-transparent hover:text-blue-600 rounded-full px-[20px] font-bold text-white'>Enroll Now</a>
                </div>
            </div>
            <div className='background-image flex justify-end items-end w-[55%]'>
                <Image width={1000} height={1000} className='w-full h-full' src="/image/man.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero
