import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        setLoading(true);  // start loading
        try {
            const { data } = await axios.get(url, { withCredentials: true });
            setdata(data)

        } catch (e) {
            if (e.response && e.response.data.message) {
                toast.error(e.response.data.message || 'something went wrong')
            } else {
                toast.error(e.message);
            }
        }
        finally {
            setLoading(false);  // loading finished
        }

    }
    useEffect(() => {
        fetchData();
    }, [url])
    return { data, loading }
}

export default useFetch