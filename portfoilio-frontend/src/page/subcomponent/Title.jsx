import React from 'react'

const Title = ({ title }) => {
    return (
        <div className="relative flex justify-center mb-8 sm:mb-20">
            <h1 className='uppercase rounded-md dark:bg-[#020817] text-center text-[2rem] w-fit  sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] tracking-[15px font-bold]'>{title}</h1>
            <span className='absolute w-full h-1 top-7 z-[-1] sm:top-7 md:top-8 lg:top-11 bg-slate-200'></span>
        </div>
    )
}

export default Title