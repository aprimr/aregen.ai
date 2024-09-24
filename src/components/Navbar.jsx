import React from 'react'
import { FaLinkedin , FaGithub  } from "react-icons/fa";
import aregGPT from "../assets/aregGPT.png"

function Navbar() {
  return (
    <nav className=' h-14 w-full bg-slate-800 flex justify-between items-center px-10 md:px-32 md:h-12'>
      <div className='h-full flex items-center gap-1 '>
        <img src={aregGPT} alt="logo" className='h-6 w-6 rounded rotate-12'  />
        <p id='logo'>reGen.ai</p>
      </div>
      <div className='flex gap-5 text-xl text-gray-300 '>
        <a href="https://github.com/aprimr/aregen.ai" target='_blank' className='hover:text-white transition-all duration-300'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aprimregmi0/" target='_blank' className='hover:text-white transition-all duration-300'><FaLinkedin /></a>
      </div>
    </nav>
  )
}

export default Navbar
