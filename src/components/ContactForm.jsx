import React from 'react'
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
    return (
        <div className='max-w-[700px] my-8'>
            <div className='text-white text-xl my-4'>Let me get to know you better</div>
            <form className='w-full'>
                <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-2'>
                    <input id='firstName' type="text" placeholder='First name' className='w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF]' />
                    <input id='lastName' type="text" placeholder='Last name' className='w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF]' />

                </div>
                <input id='email' type="email" placeholder='Email' className='w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2' />
                <input id='phoneNumber' type="phoneNumber" placeholder='Phone number (Optional)' className='w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2' />
                <textarea id='message'placeholder='Message' rows={4} className='w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2' />
            </form>

            <button className='group my-2 text-white bg-tertiary px-6 py-4 rounded-lg flex items-center hover:bg-[#37a1cf]  '>
                <span>Send message</span>
                <IoSend className='ml-4 text-xl group-hover:translate-x-2  transition-transform duration-500 ease-in-out' /></button>


        </div>
    )
}

export default ContactForm
