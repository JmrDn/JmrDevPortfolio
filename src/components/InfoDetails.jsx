import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

const InfoDetails = () => {
  const handleClickAccounts = (socmed) =>{
    if (socmed === 'fb') return window.open('https://www.facebook.com/jomsdan/')
    else if (socmed === 'github') return window.open('https://github.com/JmrDn')
    else if (socmed === 'linkedin') return window.open('https://www.linkedin.com/in/jomari-danao-36b996293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
    else if (socmed === 'ig') return window.open('https://www.instagram.com/jomadanao?igsh=MXR5bDBnMmQ1aTEyZg==')
   
  }

  return (
    <div className=' mt-8  flex flex-col justify-center
    md:ml-[50px]'>
        <div className='font-semibold text-md
        md:text-lg 
        lg:text-xl 
       '>Hello, I'm</div>
        <div className='text-nowrap font-semibold text-4xl  
        md:text-5xl 
        lg:text-7xl '>Jomari Danao</div>
        <div className=' text-secondary mt-4 font-semibold text-3xl text-nowrap
        md:text-4xl
        lg:text-5xl'>
        <Typewriter
            words={['Web Developer', 'Android Developer']}
            loop={999}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={2000}
          
          />
        </div>

        <div className='flex mt-4 text-gray-600 text-3xl gap-4
        md:gap-8 md:text-4xl '>
          <FaFacebook onClick={()=> handleClickAccounts('fb')} className='hover:text-secondary hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer'/>
          <FaGithub onClick={()=> handleClickAccounts('github')} className='hover:text-secondary hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer'/>
          <FaLinkedin onClick={()=> handleClickAccounts('linkedin')} className='hover:text-secondary hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer'/>
          <AiFillInstagram onClick={()=> handleClickAccounts('ig')}  className='hover:text-secondary hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer'/>
        </div>
    </div>
  )
}

export default InfoDetails