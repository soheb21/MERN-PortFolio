import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchOne = (id) => {
    const [data, setdata] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchOneAsync = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/project/get-project/details/" + id)
            setLoading(false);
            setdata(data.doc);

        } catch (e) {
            setLoading(false);
            setError(e.response ? e.response.data.message : e.message)
        }

    }
    useEffect(() => { fetchOneAsync() }, [id])
    return { data, loading, error };
}

export default useFetchOne