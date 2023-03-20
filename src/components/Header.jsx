import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';

const Header = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:text-red-400 transition duration-300  `
    }

    return <Container className=" bg-slate-700 text-white ">
        <nav className="flex items-baseline justify-between  gap-4">
            <RouterLink className={getClassName} to="/"><p className='text-2xl'>Blamazon Books</p></RouterLink>
            <div className="flex items-baseline  gap-4">
            <RouterLink className={getClassName} to="/">Home</RouterLink>
            <RouterLink className={getClassName} to="/about">About</RouterLink>
            <RouterLink className={getClassName} to="/books">Books</RouterLink>
            </div>
        </nav>
    </Container>
}

export default Header;