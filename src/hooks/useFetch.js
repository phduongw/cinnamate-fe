import { useEffect, useState } from 'react';

const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&query=${queryTerm ? queryTerm : ''}`;
    console.log("ACCESS TOKEN: ", process.env.REACT_APP_BEARER_TOKEN)
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            }
        };
        async function fetchMovies() {
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json.results)
        }

        fetchMovies()
    }, [url]);
    return { data };
};

export default useFetch;