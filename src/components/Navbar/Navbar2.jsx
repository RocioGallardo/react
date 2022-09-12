import {Link} from 'react-router-dom'
import './Navbar2.css';

function Navbar2() {

    return (
        <nav className='navbar-2'>
            <ul>
                <li className='li-navbar-2'>
                    <Link to="/sujetadores" className="link-navbar-2">Sujetadores</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/bombachas" className="link-navbar-2">Bombachas</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/accesorios" className="link-navbar-2">Accesorios</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/gitfcards" className="link-navbar-2">Giftcards</Link>
                </li>
                <li className='li-navbar-2'>
                    <Link to="/colecciones" className="link-navbar-2">Colecciones</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar2