import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = 'https://api.matgargano.com/api/books';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return <div className=' flex justify-center align-middle items-center'>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <div className='inline-grid grid-cols-2 gap-4 justify-center'>
            {books.map(book => {
                return <div className=' w-fit m-12'  key={book.id}>
                    <img className="rounded-xl border-2 border-zinc-900" src={book.imageURL}></img>
                    <Link className='hover:underline' to={`/books/${book.id}`}>{book.title}</Link>
                </div>
            })}
            </div>
        }

    
    </div>
}

export default Books;