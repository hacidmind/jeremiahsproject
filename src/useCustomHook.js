import { useEffect, useState } from 'react';

const UseCustomHook = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        // code block
        fetch(url)
            .then(response => response.json())
            // .then(json => console.log(json))
            .then((data) => {
                setIsLoading(false)
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
                console.log(error.message);
            })

    }, [url])
    return {data, isLoading, isError}
}

export default UseCustomHook;
