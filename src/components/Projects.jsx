import React from 'react'
import NewmanHomesImg from '../assets/img/newmanhomes.png';
import WeatherImg from '../assets/img/weatherproject.png';
import AttendanceTracerWebImg from '../assets/img/attendancetrackerwebproject.png';
import { FaEye } from "react-icons/fa";

const Projects = ({project}) => {

    const getImg = () =>{
        const projectName = project.name;

        switch(projectName.toLowerCase()){
            case 'newman homes':
                return NewmanHomesImg;
            case 'weather':
                return WeatherImg;
            case 'attendance tracker web':
                return AttendanceTracerWebImg;
            default:
                return null;
        }
        
    }

    const goToLink = (link) =>{
        window.open(link);
    }
  return (
    <div className='w-full grid grid-cols-1  gap-8 my-8
    lg:grid-cols-2 '>
        <img src={getImg()} alt="Newman Homes" />
        <div >
            <div className='text-3xl font-semibold text-black
            lg:text-4xl'>{project.name}</div>
            {project.collaborators !== null? (<div className='flex'>
                <span className='font-semibold text-lg'>Collaboratos:</span>
                {project.collaborators.map((collaborator,index)=>(
                    <span key={index} className='text-lg ml-2 inline-block'>{collaborator}</span>
                ))}
            </div>): null}
            <p className='text-lg text-gray-800 my-4'>{project.description}</p>
            <div className='flex flex-wrap gap-2'>
                
                {project.tech.map((tech, index)=>(
                    <div key={index} className='px-4 py-2 bg-secondary text-white '>{tech}</div>
                ))}
            </div>

            <div className='flex justify-end'>
                <button onClick={()=> project.link !== null? goToLink(project.link): null} className='border border-[#00B2FF] text-black px-4 py-2 text-lg flex items-center justify-center gap-2 my-4 rounded-md hover:bg-tertiary hover:text-white duration-500 ease-in-out ' style={{transition:'background-color 0.5s ease-in-out'}}>
                    <FaEye/>
                    <span>See Live</span></button>
            </div>
        </div>
    </div>
  )
}

export default Projects