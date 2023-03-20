import Container from '../components/Container';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useBookAPI from '../hooks/useBookAPI';

const Home = () => {

    const randBook= 1001+Math.floor(Math.random() * 10)
    const [book, setBook, loading, setLoading, error, setError]= useBookAPI(`https://api.matgargano.com/api/books/${randBook}`)
   
    return (<Container className='flex'>
        <div className=' w-2/3 mr-8  ' >
        <p className='text-6xl text-center mb-8'>Bamazon Books</p>
        <p className='text-l text-center mb-8'>Welcome to Blamazon Books! The official bookstore of Blamazon! Feel free to browse our inventory and check out our products today!</p>


        </div>
        <div className='flex-col items-center  rounded-xl border-4 border-zinc-900' >
            <p className='text-4xl text-center mb-8'>CHECK OUT:</p>
            <Link className='hover:underline' to={`/books/${book.id}`}><img className="rounded-xl border-2 w-fit ml-4 mr-4 border-zinc-900" src={book.imageURL}></img></Link>
            <Link className='hover:underline' to={`/books/${book.id}`}><p className='text-l text-center italic'>{book.title}</p></Link>
        </div>
        











        
    </Container>)
}

export default Home;