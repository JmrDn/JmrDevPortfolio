import React from 'react';
import JmrCorporate from '../assets/img/jmrcorporate.jpg';
import JmrGraduate from '../assets/img/jmrgraduate.jpg';

const AboutPicture = () => {
  return (
    <div className='h-[400px] relative w-full max-w-[700px]
    md:h-[550px]  '>

        <div className='w-[60%] h-[60%] absolute top-0 left-0 rounded-xl overflow-hidden shadow-lg'> <img src={JmrGraduate} alt="Jmr Graduate" className='object-cover object-top w-[100%] h-[100%]'  /></div>
        <div className='w-[60%] h-[60%] absolute bottom-0 right-0 rounded-xl overflow-hidden shadow-lg'> <img src={JmrCorporate} alt="Jmr Corparate" className='object-cover object-top w-[100%] h-[100%]' /></div>
  
      
    </div>
  )
}

export default AboutPicture