import React from 'react'
import Hero from './subcomponent/Hero'
import About from './subcomponent/About'
import Education from './subcomponent/Education'
import Skill from './subcomponent/Skill'
import Projects from './subcomponent/Projects'
import Contact from './subcomponent/Contact'

const Home = () => {
    return (
        <article className='px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto flex flex-col w-full max-w-[1090px] gap-14'>
            <Hero />
            <About />
            <Education />
            <Skill />
            <Projects />
            <Contact />

        </article>
    )
}

export default Home