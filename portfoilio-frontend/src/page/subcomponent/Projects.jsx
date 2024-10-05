import React from 'react'
import Title from './Title'
import Spinner from '@/utils/Spinner';
import useFetch from '@/hooks/useFetch';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';

const Projects = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/v1/project/get-project');

    if (loading) {
        return <Spinner />
    }
    if (error) {
        alert(error);
        return;
    }
    return (
        <div className='w-full flex flex-col px-8 md:px-6 '>
            <Title title={'Projects'} />
            <h4 className='text-xl -mt-4 mb-2 font-semibold'>Total Projects : <span className='bg-slate-800 text-white dark:bg-slate-100 px-2 p-1 dark:text-black rounded-lg'>{data?.doc.length}</span></h4>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full sm:m-4 max-w-[1090px] mx-auto"
            >
                <CarouselContent>
                    {data?.doc?.map((item, index) => (
                        <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 ">
                                <Card>
                                    <CardContent className="transition-all ease-in duration-300 rounded-md  hover:scale-105  hover:dark:bg-slate-900 flex aspect-square flex-col items-center relative justify-center p-6">

                                        <p className='bg-orange-800 absolute bottom-1 left-1 mx-3 mt-7  mb-4 text-white  px-2 p-1  rounded-lg text-start w-fit'>{index + 1}</p>
                                        <Link to={`/project/${item?._id}`}>
                                            <img src={item?.project_poster?.project_poster_URL} alt="project_poster_URL" />
                                            <h3 className='text-xl mt-4 mb-2 md:mt-6 font-semibold'>{item?.project_name}</h3>
                                        </Link>

                                        <ul className="mt-4 md:mt-6  mb-12 md:mb-12  flex gap-3">
                                            <li>
                                                <Link to={item?.project_Github_link} target='_blank'>
                                                    <Button className='bg-slate-50 rounded-[30px] transition-all duration-300 ease-in hover:scale-110  w-fit flex items-center gap-2'>
                                                        <span><Github /></span>
                                                        <span>Github</span>
                                                    </Button>
                                                </Link>

                                            </li>
                                            {
                                                item?.project_deployed_link && <li>
                                                    <Link to={item?.project_deployed_link} target='_blank'>
                                                        <Button className='bg-slate-50 rounded-[30px] transition-all duration-300 ease-in0 hover:scale-110  w-fit flex items-center gap-2'>
                                                            <span><ExternalLink /></span>
                                                            <span>Live</span>
                                                        </Button>
                                                    </Link>

                                                </li>
                                            }

                                        </ul>


                                    </CardContent>

                                </Card>


                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div >
    )
}

export default Projects