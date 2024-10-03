import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        setLoading(true);  // start loading
        setError(null);    // reset error state
        try {
            const { data } = await axios.get(url);
            setdata(data)

        } catch (e) {
            if (e.response && e.response.data.message) {
                setError(e.response.data.message || 'something went wrong')
            } else {
                setError(e.message);
            }
        }
        finally {
            setLoading(false);  // loading finished
        }

    }
    useEffect(() => {
        fetchData();
    }, [url])
    return { data, loading, error }
}

export default useFetch