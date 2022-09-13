import {useState} from 'react';
import {Link} from 'react-router-dom'
import MenuCostado from './MenuCostado';
import './NuevoNavbar.css';
import CartWidget from '../Cart/CartWidget';


function NuevoNavbar() {

    const [classButton, setClassButton] = useState("menu-costado-inactivo")

    const switchButton = () => {
        if(classButton === "menu-costado-inactivo"){
            setClassButton("menu-costado-activo")
        } else {
            setClassButton("menu-costado-inactivo")
        }
    }
    return (
        <>
            <nav className='nav'>
                <div className='nav-div'>
                    <button>
                        <img className="img-btn-menu" src="../img/menu.svg" alt="menu" onClick={() => {switchButton()}}/>
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
                            <Link to="/info" className="navbar-brand" > Ayuda </Link>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </nav>
            <MenuCostado classButton={classButton}/>
        </>
    )
}

export default NuevoNavbar