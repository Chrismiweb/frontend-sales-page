"use client";
import { useState } from "react"
import Link from "next/link";

export default function Faq(){
    const [answer, setAnswer] = useState(null)
    function handleAnswers(index:any){
        // setAnswer(!answer)
        setAnswer(answer === index ? null : index)
    }
    const faqs = [
        {
            question:"What is frontend development?",
            answer: "Frontend development involves creating the visual elements of a website or web application that users interact with, using languages like HTML, CSS, JavaScript, Frameworks, Libaries and Many More.",
        },
        {
            question:"Are there hands-on projects included in the training?",
            answer: "Yes, the program includes several hands-on projects that allow students to apply what they’ve learned in real-world scenarios.",

        },
        {
            question:"Is there any mentorship or support available during the course?",
            answer: "Yes, you will have access to mentors and a community forum where you can ask questions and receive support from both instructors and peers.",

        },
        {
            question:"How do I access course materials?",
            answer: "Course materials will be accessible through our online learning platform, which you can log into at any time.",

        },
        {
            question:"What learning formats are available ?",
            answer: "We provide personalized virtual lectures tailored to your chosen schedule, ensuring a thorough and engaging learning experience.",

        },
        {
            question: "How long does the training program last?",
            answer:"The training typically lasts 2-3 month, with flexible schedules that accommodate various learning paces.",
        },
    ]
    return(
    <div id="faq" className="w-[100%] bg-blue-100 flex-col gap-[50px] py-[50px] flex justify-center items-center">
         <div className="md:w-[80%] w-[90%] rounded-lg bg-blue-200 py-[20px] px-[30px]">
            <h1 className="text-blue-700 font-bold">FREQUENTLY ASKED QUESTIONS</h1>
        </div>    
       <div className="w-[80%]  flex flex-col gap-[20px]">
            {faqs.map((fq, index)=>(
            <div key={index} className="flex flex-col">
            <div onClick={()=>handleAnswers(index)} className="w-[100%] gap-3 py-[20px] rounded-t-[10px] cursor-pointer border-2 border-blue-300 flex justify-between items-center px-[15px] md:px-[40px]">
                <p className="text-[13px] text-black md:text-[15px] font-semibold">{fq.question}</p>
                <button className="font-bold text-black text-[20px]">{answer === index ? "-" : '+'}</button>
            </div>
            {answer === index&&
                <div className="w-[100%] py-[20px] rounded-b-[10px] border-t-0 border-2 border-blue-300 flex justify-between items-center  px-[15px] md:px-[40px]">
                   <p className="text-[13px] text-black md:text-[15px] font-semibold">{fq.answer}</p>
                </div>
            }
           
            </div>
            
            ))}
           
       </div>
       <div className="w-[100%] gap-[20px] justify-center items-center flex flex-col py-[70px] md:px-[20px] border-t-2 border-[#F8E7F8]">
            <h1 className="text-center text-[20px] font-bold text-blue-600">GET IN TOUCH</h1>
            <p className="text-[#00000099] font-semibold text-center text-[14px] w-[80%] lg:w-[50%]">We are dedicated to empowering individuals through comprehensive frontend development training. Whether you have a unique project idea, a technical obstacle to overcome, or simply wish to explore your learning needs, we’re eager to connect with you! Let’s work together to unlock your potential in the world of frontend development.</p>
            <Link href = '/register'>
                <button className=" px-[25px] bg-blue-600 border-2 hover:text-blue-600 border-blue-600 transition-all duration-300 hover:bg-transparent rounded-lg py-[10px] text-white font-semibold">Contact Us</button>
            </Link>
        </div>
        
    </div>
    )
}