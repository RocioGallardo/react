import {useState} from 'react';
import {Link} from 'react-router-dom'
import MenuCostado from './MenuCostado';
import './Navbar.css';
import CartWidget from '../Cart/CartWidget';
import { useUserContext } from "../../context/UserContext"



function NuevoNavbar() {

    const [classButton, setClassButton] = useState("menu-costado-inactivo")
    const { user, logout} = useUserContext()

    const switchButton = () => {
        if(classButton === "menu-costado-inactivo"){
            setClassButton("menu-costado-activo")
        } else {
            setClassButton("menu-costado-inactivo")
        }
    }
    const handleLogout = async () => {
        await logout()
    }
    
    return (
        <>
            <nav className='nav'>
                <div className='nav-div'>
                    <button>
                        <img className="img-btn-menu" src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/menu.svg?alt=media&token=f7c15f21-74bd-4211-88f9-8252c36ef502" alt="menu" onClick={() => {switchButton()}}/>
                    </button>
                    <Link to="/">
                        <img className='logo-brave' src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/brave2.svg?alt=media&token=b60842a9-241e-4284-bbe8-fe0c07535c20" alt="logo-brave"/>
                    </Link>
                </div>
                <div className='nav-div'>
                    <ul>
                        <li>
                            <Link to="/buscar" className="navbar-brand" > Buscar </Link>
                        </li>
                        {user ? 
                        <li onClick={handleLogout}>
                            Cerrar Sesión
                        </li>
                        :
                        <>
                            <li>
                                <Link to="/login" className="navbar-brand" > Iniciar sesion </Link>
                            </li> 
                            <li>
                                <Link to="/register" className="navbar-brand" > Registrarse </Link>
                            </li>
                        </>
                        
                        }
                        <li>
                            <Link to="/info" className="navbar-brand" > Ayuda </Link>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </nav>
            <MenuCostado classButton={classButton} setClassButton={setClassButton}/>
        </>
    )
}

export default NuevoNavbar