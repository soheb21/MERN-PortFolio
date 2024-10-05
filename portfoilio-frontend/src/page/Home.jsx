import React from 'react'
import Hero from './subcomponent/Hero'
import About from './subcomponent/About'
import Education from './subcomponent/Education'
import Skill from './subcomponent/Skill'
import Projects from './subcomponent/Projects'
import Contact from './subcomponent/Contact'
import useFetch from '@/hooks/useFetch'
import Navbar from './Navbar'

const Home = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/v1/about/get-about');

    return (
        <>
            <Navbar />
            <article className='px-5 mt-[120px] sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto flex flex-col w-full max-w-[1090px] gap-14'>
                <Hero />
                <About data={data} loading={loading} error={error} />
                <Education />
                <Skill />
                <Projects />
                <Contact data={data} loading={loading} error={error} />

            </article>
        </>

    )
}

export default Home