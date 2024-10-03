import useFetch from '@/hooks/useFetch';
import Spinner from '@/utils/Spinner';
import React from 'react'
import { toast } from 'react-toastify';
import Title from './Title';
import { Card } from '@/components/ui/card';

const Skill = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/v1/skill/get-skill');

    if (loading) {
        return <Spinner />
    }
    if (error) {
        toast.error(error);
        return;
    }
    return (
        <div className='w-full flex flex-col'>
            <Title title={"Skill"} />
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4">
                {
                    data?.doc?.map((item) => (
                        <Card key={item._id} className='h-fit p-7 transition-all ease-in-out duration-300 hover:bg-slate-300 hover:text-black hover:cursor-pointer hover:scale-110 flex flex-col w-fit m-2 justify-center items-center gap-3'>
                            <img className='object-cover h-[100px]  sm:h-24 w-[100px] md:w-auto' src={item?.icon_img?.icon_img_URL} alt="icon_image" />
                            <h3 className='text-center'>{item?.title}</h3>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}

export default Skill