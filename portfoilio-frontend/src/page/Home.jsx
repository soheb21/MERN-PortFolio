import React, { Suspense, lazy } from 'react'
import Hero from './subcomponent/Hero'
import About from './subcomponent/About'
import Education from './subcomponent/Education'
const Skill = lazy(() => import("./subcomponent/Skill"))
const Projects = lazy(() => import("./subcomponent/Projects"))
import Contact from './subcomponent/Contact'
import useFetch from '@/hooks/useFetch'
import Navbar from './Navbar'
import Spinner from '@/utils/Spinner'

const Home = () => {
    const { data, loading } = useFetch('https://mern-portfolio-lmf4.onrender.com/api/v1/about/get-about');

    return (
        <>
            <Navbar />
            <article className='px-5 mt-[120px] sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto flex flex-col w-full max-w-[1090px] gap-14'>
                <Hero />
                <About data={data} loading={loading} />
                <Education loading={loading} />
                <Suspense fallback={<Spinner />}>
                    <Skill />
                    <Projects />
                </Suspense>

                <Contact data={data} loading={loading} />

            </article>
        </>

    )
}

export default Home