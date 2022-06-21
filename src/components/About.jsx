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
                    <p>I am a pasionate front-end developer based in the OKC Area!</p>
                </div>
                <div>
                    <p>I enjoy learning and creating. I strive to get better at my craft every day and create an amazing front-end experience.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About