import React from 'react'
import { text } from '../Contstants'
import { home } from '../assets/index'
function Home() {
  return (
    <div className='m-4 flex md:px-20 px-4 justify-between md:flex-row flex-col items-center'>
      <div><h1 className='text-[40px] font-bold'>{text.hello}</h1>
      <h1 className='text-[40px] font-bold inline mr-3'>{text.Iam}</h1>
      <span className='text-blue-700 text-[40px] font-bold'>{text.name}</span>
      <h1 className='text-gray-400 mt-3'>{text.Intro}</h1>
      <h1 className='text-gray-400 mt-3'>{text.about}</h1>
      <button className=' transition-all ease-in-out hover:scale-110 bg-blue-700 p-2 px-3 rounded-md mt-3 text-white'>Resume</button>
      
      </div>
      <img src={home} className='mt-3 w-[400px] md:w-[500px] rounded-md bg-transparent'/>
    </div>
  )
}

export default Home;