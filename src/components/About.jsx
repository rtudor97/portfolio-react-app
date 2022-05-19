import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff5757]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Ryan, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about software develoment and creating applications that will help to better the lives of others. I have experience in building java applications, and am constantly learning and improving my development skills.</p>
                    </div>
                </div>
            </div>
         </div>

  )
}

export default About
