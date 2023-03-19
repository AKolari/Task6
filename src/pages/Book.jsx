import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import 'react-loading-skeleton/dist/skeleton.css'

const Book = () => {


    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${params.id}`;
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


    const params = useParams();

    return (<Container className="h-5/6" >

        <div className="flex  rounded-xl p-8 md:p-0 bg-slate-700 border-2 border-zinc-900">
            {error && <ErrorAlert>{error}</ErrorAlert>}
            {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
            {!error && !loading && 
            <img className="rounded-xl border-2 border-zinc-900" src={books.imageURL}></img>
            }
            <div className="flex flex-col justify-center items-center w-full ">
            <h1 className='text-5xl flex  text-center text-white'>{books.title}</h1>
            
            <h2 className='text-xl flex  text-center text-white'>{books.author}</h2>

            </div>
            

        </div>
        
    </Container>)
}

export default Book;