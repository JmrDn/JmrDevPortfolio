import React from 'react';
import Jmr from '../assets/img/jmr.png';

const DisplayPicture = () => {
  return (
    <div className='bg-primary  h-[600px] min-h-[600px] w-[400px] -mt-[150px]  rounded-[50px] shadow-md relative overflow-hidden
     md:h-[600px] md:max-h-[600px] md:-mt-[300px] md: ml-[50px]
     lg:h-full lg:max-h-[800px]
    
    '>
      <div className='absolute bottom-0 select-none w-full'>
        <img src={Jmr} alt="Jmr.Dev" className=' object-cover object-right w-full  ' />
      </div>
    </div>
  )
}

export default DisplayPicture