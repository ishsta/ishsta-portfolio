import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#7d6f5c] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/9d8e6b4f-746f-4d0d-a7fd-3bc856df2bf2' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#A6967F] text-[#EEECE8]'>Contact</p>
                <p className='text-[#EEECE8] py-4'>Submit the form below to contact me!</p>
            </div>
            <input className='bg-[#DFD8CF] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#DFD8CF]' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#DFD8CF] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#DFD8CF] px-4 py-3 my-8 mx-auto flex items-center'>Let's Work!</button>
        </form>
    </div>
  )
}

export default Contact