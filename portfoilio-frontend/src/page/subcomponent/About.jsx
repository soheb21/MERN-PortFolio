import about_img from "../../assets/1.png"
import Spinner from '@/utils/Spinner'
import { toast } from 'react-toastify'
import Title from "./Title"

const About = ({ data, loading, error }) => {



    if (loading) {
        return <Spinner />
    }
    if (error) {
        toast.error(error);
        return;
    }
    return (
        <div id="about" className='w-full flex flex-col overflow-x-hidden'>
            <Title title={'About me'} />
            <div className="grid sm:grid-cols-1 place-content-center md:grid-cols-2 mb-8 sm:mb-20 gap-14">
                <img className='w-[350px]' src={about_img} alt="about-image" />
                <div className="flex flex-col gap-8">
                    <p>{data?.doc?.des}</p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <li>
                            <h3 className="text-orange-400 font-semibold">Name:</h3>
                            <p>{data?.doc?.fullname}</p>
                        </li>
                        <li>
                            <h3 className="text-orange-400 font-semibold">Degree:</h3>
                            <p>{data?.doc?.education}</p>
                        </li>  <li>
                            <h3 className="text-orange-400 font-semibold">E-mail:</h3>
                            <p>{data?.doc?.email}</p>
                        </li>  <li>
                            <h3 className="text-orange-400 font-semibold">Phone no:</h3>
                            <p>+91 {data?.doc?.phone}</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About