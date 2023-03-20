import { useEffect, useState } from "react";

const useBookAPI =(apiURL) =>{


    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = ''+apiURL;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
            console.log(books)
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);




    return [
        books, 
        setBooks,
        loading,
        setLoading,
        error,
        setError
    ]

}

export default useBookAPI