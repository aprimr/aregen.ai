import React from 'react'
import aregGPT from "../assets/aregGPT.png"

function Body() {
  return (
    <div className='h-[90%] w-full px-3 py-44 flex justify-center items-center md:py-24'>
      <div className='h-[90%] w-[90%] flex flex-col justify-center items-center'>
        <div className='h-16 w-16 rotate-12'>
          <img src={aregGPT} alt="logo" className='rounded-xl'/>
        </div>
        <div className="h-full w-full bg-yello py-5">
          <p className='greet-text'>Hello User,</p>
          <p className='text-4xl font-semibold text-slate-300 md:text-5xl'>How can I help you today?</p>
        </div>
      </div>
    </div>
  )
}

export default Body