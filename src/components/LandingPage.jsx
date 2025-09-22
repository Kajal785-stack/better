import React from 'react'
import { FaStopwatch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const LandingPage = () => {
  return (

    <div>
      


      <div className="flex items-center flex-col py-16 gap-8 bg-[#382775] text-white">
        <h1 className='text-8xl text-center'>The first <br /> AI-powered Mortgage</h1>
        <p className='text-3xl text-center'>Our tech unlocks lower rates, higher chances of approval, <br />
          and a lightning‑fast process from approval to closing. Over $100 billion funded.</p>
        <div className="">

          <button className='border py-4 px-10 rounded-full bg-white text-black text-bold'>Start my pre Approval</button>
          <div className=" flex gap-2 items-center mt-2">
            <FaStopwatch />
            <p>3 min | No hard credit check</p>
          </div>
        </div>

        <img className="w-[40%]" src="https://media.better.com/better-com/homepage/ai-powered-fico.webp" alt="" />

      </div>

     
    </div>
  )
}

export default LandingPage