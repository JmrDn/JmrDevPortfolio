import React from 'react';
import Jmr from '../assets/img/jmsuit.jpg';

const ContactImg = () => {
  
  return (
    <div className='w-[200px] h-[200px] rounded-full overflow-hidden shadow-md hover:animate-ring '>
        <img src={Jmr} alt="Jomari Danao" className='w-full h-full object-cover object-center'  />
    </div>
  )
}

export default ContactImg