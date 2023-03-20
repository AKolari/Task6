import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import useBookAPI from '../hooks/useBookAPI';


import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import 'react-loading-skeleton/dist/skeleton.css'

const Book = () => {
    const params = useParams();
    const [book, setBook, loading, setLoading, error, setError]= useBookAPI(`https://api.matgargano.com/api/books/${params.id}`)



    

    return (<Container className="h-5/6" >

        <div className="flex  rounded-xl p-8 md:p-0 bg-slate-700 border-2 border-zinc-900">
            {error && <ErrorAlert>{error}</ErrorAlert>}
            {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
            {!error && !loading && 
            <img className="rounded-l-xl border-2 border-zinc-900" src={book.imageURL}></img>
            }
            <div className="flex flex-col relative justify-center items-center w-full ">
            <h1 className='text-5xl italic flex  text-center text-white'>{book.title}</h1>
            
            <h2 className='text-xl flex  text-center text-white'>{book.author}</h2>
            <p className='text-s flex  italic absolute  bottom-0 text-right text-white '>{book.pages} Pages. Published in {book.year} by {book.publisher} </p>
            

            </div>
            

        </div>
        
    </Container>)
}

export default Book;