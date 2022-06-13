import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#7d6f5c] text-[#DFD8CF]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#A6967F]'>About</p>
                </div>
                <div></div>     
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl folt-bold'>
                    <p>Hi, I'm Ish! Feel free to take a look around.</p>
                </div>
                <div>
                    <p>I am a pasionate developer based out of OKC!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About