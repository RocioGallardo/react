import {Link} from 'react-router-dom'
import './NuevoNavbar.css';

function NuevoNavbar() {
    return (
        <nav className='nav'>
            <div className='nav-div'>
                <button>
                    <img className="img-btn-menu" src="../img/menu.svg" alt="menu" />
                </button>
                <Link to="/">
                    <img className='logo-brave' src="../img/brave2.svg" alt="logo-brave"/>
                </Link>
            </div>
            <div className='nav-div'>
                <ul>
                    <li>
                        <Link to="/buscar" className="navbar-brand" > Buscar </Link>
                    </li>
                    <li>
                        <Link to="/iniciar-sesion" className="navbar-brand" > Iniciar sesion </Link>
                    </li>
                    <li>
                        <Link to="/buscar" className="navbar-brand" > Ayuda </Link>
                    </li>
                    <li>
                    <Link to="/carrito">
                    <img className='cesta' src="../img/cesta.svg" alt="logo-brave"/>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NuevoNavbar