import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Course() {
    const course =[
        {
            planName: "Frontend Development Course",
            price: "$5/hr",
            package1:"HTML Full Course",
            packag2:"Css And Framework Full Course",
            package3:"Javascript Full Course ",
            package4:"React.Js And Hooks",
            packag5:"Real-Life Projects",
            package6:"Portfolio Development",
            icon: <IoCheckmarkCircleOutline />,
            btn: "Register Now"
        },
        {
            planName: "React.Js Development Course",
            price: "$5/hr",
            package1:"HTML Full Course",
            packag2:" Css And Framework Full Course",
            package3:"Javascript Full Course",
            package4:"React.Js And Hooks",
            packag5:"React.Js Based Projects",
            package6:"Portfolio Development",
            icon: <IoCheckmarkCircleOutline />,
            btn: "Register Now"
        },
        {
            planName: "Next.Js Development Course",
            price: "$5/hr",
            package1:"HTML Full Course",
            packag2:" Css And Framework Full Course",
            package3:"Javascript Full Course",
            package4:"Next.Js Full Course",
            packag5:"Next.Js Based Projects",
            package6:"Portfolio Development",
            icon: <IoCheckmarkCircleOutline />,
            btn: "Register Now"
        },
    ]
  return (
    <div className='w-[100%] bg-slate-100 flex flex-col justify-center items-center gap-[20px] py-[30px]'>
      <div  className='flex flex-col gap-3 justify-center items-center w-[80%]'>
        <p className='font-bold text-[20px] text-center'>Learn from the best</p>
        <h1 className='font-bold text-[30px] md:text-[50px] text-blue-900 text-center'>JOIN OUR CLASS TODAY</h1>
        <p id='course'  className='text-[#7A7A7A] font-semibold text-center'>Get access to all of the benefits mentioned below</p>
      </div>
      <div  className='lg:w-[80%] gap-[20px] lg:gap-[20px] w-[90%] flex flex-col lg:grid  lg:grid-cols-2  justify-between items-center'>
        {course.map((p, index)=>(
            <div className=' bg-white flex flex-col py-[30px] px-[20px] rounded-md justify-center items-center w-[100%] lg:w-[100%]' key={index}>
                <p className='font-semibold text-center text-[25px]'>{p.planName}</p>
                <h1 className='text-[30px] font-bold text-blue-900'>{p.price}</h1>
                <div className='w-[100%] gap-[15px] items-center py-[30px] flex-col flex justify-start '>
                    <div className='flex justify-start text-black w-[100%] items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.package1}</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-black'></div>
                    <div className='flex justify-start  text-black w-[100%] items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.packag2}</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-black'></div>
                    <div className='flex justify-start w-[100%]  text-black items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.package3}</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-black'></div>
                    <div className='flex justify-start  text-black w-[100%] items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.package4}</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-black'></div>
                    <div className='flex justify-start w-[100%]  text-black items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.packag5}</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-black'></div>
                    <div className='flex justify-start w-[100%]  text-black items-center gap-[15px]'>
                        <p className='font-extrabold text-[16px]'>{p.icon}</p>
                        <p className='font-semibold text-[16px]'>{p.package6}</p>
                    </div>
                    <div className='w-[100%] flex justify-center items-center pt-[20px]'>
                        <a href='/register' className='bg-blue-600 border-2 border-blue-600 transition-all duration-300 text-white py-[10px] rounded-[10px] px-[20px]  hover:bg-white hover:text-blue-600'>{p.btn}</a>
                    </div>
                    
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Course
