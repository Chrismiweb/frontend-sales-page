import React from 'react'
import Image from 'next/image'
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function About() {
  return (
    <div id='about' className='bg-blue-50 border-b-2 justify-center items-center pb-[100px] flex w-[100%] pt-[120px]'>
        <div className='w-[85%] flex justify-between items-center'>
            <div className='background-imag flex justify-end items-end w-[50%]'>
                <Image width={1000} height={1000} className='w-full h-full' src="/image/man2.png" alt="" />
                <div className='w-[30%] py-[10px] px-[20px] flex flex-col gap-[5px] rounded-[5px] bg-blue-600 left-[150px] mb-[-80px] absolute'>
                    <h1 className='text-white font-semibold text-[20px]'>Our Mission</h1>
                    <p className='text-[13px] text-gray-100'>Our mission is to provide top-notch frontend training, turning your passion into expertise and advancing your tech career.</p>
                </div>
            </div>
            <div className='w-[50%] flex flex-col gap-[20px]'>
                <div className='flex justify-start gap-[10px] items-center'>
                    <div className='h-[3px] w-[10%] bg-blue-600'></div>
                    <p className='text-[17px] text-blue-600  font-semibold'>Welcome To Our Virtual Training Program!</p>
                </div>
                <p className='text-[25px] font-semibold text-blue-900 mb-4'>Learn Frontend Development From Comfort Of Your Home. Build Skills And Create Amazing Projects With Us!</p>
                <div className='grid grid-cols-2  gap-[20px]'>
                    <div className='w-[100%] gap-[15px] items-center flex'>
                        <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                        <p className='font-semibold text-black text-[17px]'>Flexible Learning</p>
                    </div>
                    <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Expert Guidance</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Real-World Experience</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Portfolio Development</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Affordable Learning</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Hands-On Projects</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Up-to-Date Skills</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Career Opportunities</p>
                </div>
                <div className='w-[100%] gap-[15px] items-center flex'>
                    <IoCheckmarkDoneCircle className='font-semibold text-blue-900 text-[17px]' />
                    <p className='font-semibold text-black text-[17px]'>Resource Access</p>
                </div>
                </div>

                <div>
                    <button className='bg-blue-600 border-2 border-blue-600 py-[10px] hover:bg-transparent hover:text-blue-600 rounded-full px-[20px] font-bold text-white'>Book A Consultation</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About