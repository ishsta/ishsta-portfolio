import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#7d6f5c]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#A6967F]'>Ish</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#DFD8CF]'> The Developer</h2>
            <p className='text-[#DFD8CF] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A6967F]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home