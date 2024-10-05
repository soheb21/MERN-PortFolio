import { Button } from '@/components/ui/button'
import useFetch from '@/hooks/useFetch'
import Spinner from '@/utils/Spinner'
import { ExternalLink, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/v1/home/gethome')
    if (loading) {
        return <Spinner />
    }

    if (error) {
        alert(error);
        return;
    }
    return (
        <div className='w-full'>
            <div className="flex items-center gap-2 mb-2">
                <span className='bg-green-500 rounded-full h-2 w-2'></span>
                <p>Welcome</p>
            </div>
            <h1 className='overflow-x-hidden text-[1.3rem] sm:[1.6rem] md:text-[2.2rem] lg:text=[2.8rem] tracking-[2px] mb-2'>
                Hey, I'm {data?.doc?.fullname}
            </h1>
            <h1 className=' uppercase overflow-x-hidden text-orange-200 text-[1.3rem] sm:[1.7rem] md:text-[2.2rem] lg:text=[2.8rem] tracking-[15px] mb-2'>
                <Typewriter
                    words={data?.doc?.position.split(",")}
                    cursor
                    loop={50}
                />
            </h1>
            <div className="w-fit bg-slate-50 px-5 py-2 rounded-[20px] flex items-center gap-5 mt-4 md:mt-8 lg:mt-10">

                <Link to={data?.doc?.github_url} target="_blank">
                    <Github className='text-gray-700 h-7 w-7 transition-all  hover:scale-125' />
                </Link>
                <Link to={data?.doc?.linkdin_url} target="_blank" >
                    <Linkedin className='text-blue-500 h-7 w-7 transition-all hover:scale-125' />
                </Link>

                <Link to={data?.doc?.insta_url} target="_blank">
                    <Instagram className='text-pink-500 h-7 w-7 transition-all hover:scale-125' />
                </Link>
                <Link to={data?.doc?.twitter_url} target="_blank">
                    <Twitter className='text-blue-500 h-7 w-7 transition-all hover:scale-125' />
                </Link>
            </div>
            <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3 ">
                <Link to={data?.doc?.github_url} target='_blank'>
                    <Button className='bg-slate-50 rounded-[30px] transition-all delay-50 hover:scale-110  w-fit flex items-center gap-2'>
                        <span><Github /></span>
                        <span>Github</span>
                    </Button>
                </Link>
                <Link to={data?.doc?.resume.resume_URL} target='_blank'>
                    <Button className='bg-slate-50 rounded-[30px] transition-all delay-50 hover:scale-110  w-fit flex items-center gap-2'>
                        <span><ExternalLink /></span>
                        <span>Resume</span>
                    </Button>
                </Link>
            </div>
            <p className='mt-8 text-xl tracking-[2px]'>{data?.doc?.short_des}</p>
            <hr className='my-8 md:my10' />
        </div >
    )
}

export default Hero;