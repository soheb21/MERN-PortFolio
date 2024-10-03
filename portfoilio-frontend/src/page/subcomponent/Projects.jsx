import React from 'react'
import Title from './Title'
import Spinner from '@/utils/Spinner';
import { toast } from 'react-toastify';
import useFetch from '@/hooks/useFetch';

const Projects = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/v1/project/get-project');
    console.log(data)

    if (loading) {
        return <Spinner />
    }
    if (error) {
        toast.error(error);
        return;
    }
    return (
        <div className='w-full flex flex-col'>
            <Title title={'Projects'} />
        </div>
    )
}

export default Projects