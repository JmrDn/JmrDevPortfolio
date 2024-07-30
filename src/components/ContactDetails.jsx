import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetails = () => {

    const gotoEmail = () => {
        const recipient = 'jomaridanao07@gmail.com';
        const subject = 'Jmr Dev Portfolio';
        const body = '';
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, '_blank')
    }

    const makePhoneCall = () => {
        const phoneNumber = '+639062275671';
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
    }

    const gotoLocation = () =>{
        window.open('https://maps.app.goo.gl/w3vF75dvs27WK6xX7', '_blank');
    }
    return (
        <div className="text-white flex flex-col items-center gap-2 md:gap-4 md:items-start">
            <div className="text-xl md:text-2xl text-center md:text-start font-semibold ">Let's build something great together!</div>
            <div className="flex gap-2 items-center cursor-pointer " onClick={gotoEmail}>
                <IoMdMail className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">jomaridanao07@gmail.com</span>
            
            </div>
            <div className="flex gap-2 items-center cursor-pointer" onClick={makePhoneCall}>
                <FaPhoneAlt className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">+639062275671</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer " onClick={gotoLocation}>
                <FaLocationDot className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">Taguig, Metro Manila, Philippines</span>
            </div>
        </div>
    )
}

export default ContactDetails