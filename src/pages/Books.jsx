import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useBookAPI from '../hooks/useBookAPI'

const Books = () => {

    const [books, setBooks, loading, setLoading, error, setError]= useBookAPI('https://api.matgargano.com/api/books')
    


    return <div className=' flex justify-center align-middle items-center'>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <div className='inline-grid grid-cols-2 gap-4 justify-center'>
            {books.map(book => {
                return <div className=' flex-col relative items-center m-12'  key={book.id}>
                    <Link className='hover:underline' to={`/books/${book.id}`}><img className="rounded-xl border-2 w-fit border-zinc-900" src={book.imageURL}></img></Link>
                    <Link className='hover:underline' to={`/books/${book.id}`}><p className='text-3xl italic'>{book.title}</p></Link>
                    <Link to={`/books/${book.id}`}><p className='text-l'>{book.author}</p></Link>
                </div>
            })}
            </div>
        }

    
    </div>
}

export default Books;