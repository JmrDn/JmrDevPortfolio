import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetails = () => {
    return (
        <div className="text-white flex flex-col items-center gap-2 md:gap-4 md:items-start">
            <div className="text-xl md:text-2xl text-center md:text-start font-semibold ">Let's build something great together!</div>
            <div className="flex gap-2 items-center  ">
                <IoMdMail className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">jomaridanao07@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center  ">
                <FaPhoneAlt className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">+639062275671</span>
            </div>
            <div className="flex gap-2 items-center  ">
                <FaLocationDot className="text-secondary text-2xl " />
                <span className="text-lg md:text-xl">Taguig, Metro Manila, Philippines</span>
            </div>
        </div>
    )
}

export default ContactDetails