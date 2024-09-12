import React from 'react'
import{text} from "../Contstants/index"
import wave from "../assets/wave.svg"
import lap from "../assets/lap1.webp"
import {data} from "../Contstants/index"
function AboutMe() {
  return (
    <div className='mt-36'>
      {/* <img src={wave} className=' h-[300px] absolute w-full'/> */}
      <img src={lap} className='absolute md:mt-[-100px] mt-[-100px]  md:w-[250px] w-[180px] rounded-md'/>
      <div className='h-[300px] w-full bg-pink-700 '>
   
        <h2 className='text-[50px] font-bold text-white text-center'> {text.about} <span className='text-black'>{text.me}</span></h2>
         <h2 className='text-white mt-10 text-center px-10 md:px-64 lg:px-60 absolute'>{text.aboutdesc}</h2>
      </div>
      <div className='md:flex-row flex flex-col items-center w-full justify-aroundd px-32'>
        {
          data.map((item,ind)=>{
         return <div>
            <img src={item.img} className='w-[230px] h-[230px] object-cover'/>
            <h2 className='font-bold'>{item.title}</h2>
            <h2 className='text-[12px] text-gray-500 text-center'>{item.desc}</h2>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default AboutMe