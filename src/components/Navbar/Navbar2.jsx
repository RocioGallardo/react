import {Link} from 'react-router-dom'
import './Navbar2.css';

function Navbar2() {

    return (
        <nav className='navbar-2'>
            <ul>
                <li>
                    <a href="#img1">1</a>
                </li>
                <li>
                    <a href="#img2">2</a>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/news" className="link-navbar-2 bold" > New  </Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/categoria/sujetadores" className="link-navbar-2">Sujetadores</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/categoria/bombachas" className="link-navbar-2">Bombachas</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/categoria/accesorios" className="link-navbar-2">Accesorios</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/categoria/gitfcards" className="link-navbar-2">Giftcards</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/colecciones" className="link-navbar-2">Colecciones</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar2