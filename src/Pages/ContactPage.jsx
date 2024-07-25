import React from 'react'
import ContactImg from '../components/ContactImg'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'
const ContactPage = () => {
  return (
    <div className='w-screen bg-secondary' id='contact'>
        <div className='container mx-auto  p-8 flex flex-col items-center
        lg:px-[100px]'>
            <div className='flex mt-8 gap-8 flex-col items-center
            md:flex-row'>
                <ContactImg/>
                <ContactDetails/>
            </div>

            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactPage