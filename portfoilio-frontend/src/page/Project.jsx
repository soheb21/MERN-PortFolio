import useFetchOne from "@/hooks/useFetchOne";
import { Link, useParams } from "react-router-dom"
import Title from "./subcomponent/Title";
import Spinner from "@/utils/Spinner";
import { Button } from "@/components/ui/button";
import { Github, Link2 } from "lucide-react";

const Project = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetchOne(id)
    if (loading) {
        <Spinner />
        return;
    }
    if (error) {
        alert(error)
        return;
    }

    return (
        <div className="w-full px-10 md:px16  gap-3 flex flex-col justify-center">
            <Title title={"Project Details"} />
            <img className="max-w-[900px] mx-auto w-full  border-2 border-orange-500 rounded-lg" src={data?.project_poster.project_poster_URL} alt="project_poster_URL" />

            <h2 className="font-semibold tracking-[2px] text-[1.4rem] md:text-[2.2rem] lg:text-[2.4rem]">Title: <span className="text-orange-500 font-thin" >{data?.project_name}</span></h2>
            <ul className="flex md:justify-start gap-3 justify-between items-center">
                <li>
                    <Link to={data?.project_Github_link} target="_blank">
                        <Button><Github /> <span className="ml-2  ">Github</span></Button>
                    </Link>
                </li>
                <li>
                    {
                        data?.project_deployed_link && <Link to={data?.project_deployed_link} target="_blank">
                            <Button><Link2 /> <span className="ml-2  ">Deployed Link</span></Button>
                        </Link>
                    }
                </li>
            </ul>
            <ul className="flex flex-col md:flex-row md:justify-between md:mt-5">
                {data?.company_name && data?.company_name !== 'undefined' && <li className="font-semibold tracking-[2px] text-[1rem] md:text-[1.2rem] mt-3 mb-8 lg:text-[1.4rem]">Company Name: <span className="bg-orange-500 text-white px-2 py-1 rounded-lg "> {data?.company_name}</span></li>}
                {data?.company_period && data?.company_period !== 'undefined' && <li className="font-semibold tracking-[2px] text-[1rem] md:text-[1.2rem] mt-3 mb-8 lg:text-[1.4rem]">Company Period: <span className="bg-orange-500 text-white px-2 py-1 rounded-lg "> {data?.company_period}</span></li>}
                {data?.company_role && data?.company_role !== 'undefined' && <li className="font-semibold tracking-[2px] text-[1rem] md:text-[1.2rem] mt-3 mb-8 lg:text-[1.4rem]">Company Role: <span className="bg-orange-500 text-white px-2 py-1 rounded-lg "> {data?.company_role}</span></li>}
            </ul>


            <ul className="flex items-center flex-wrap">
                <li className="text-lg md:text-xl tracking-[3px] mr-2 md:mr-4  text-orange-100">Technologies</li>
                {
                    data?.project_tech?.split(",").map((i, ind) => <li key={ind} className="bg-white flex px-2 py-1 w-fit text-black mx-2 mt-1 rounded-lg">{i}</li>)
                }
            </ul>



            <p className="text-lg md:text-xl tracking-[3px] mb-8 text-orange-400 "><span className="text-slate-100 mr-4">Description:</span>{data?.project_des.split(".").map((i, ind) => <li key={ind} >{i}</li>)}</p>





        </div>
    )
}

export default Project