import {Link} from 'react-router-dom'

export default function Dropdown() {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <Link to="/categoria/sujetadores" className="dropdown-item" >Sujetadores</Link>
                    <Link to="/categoria/bombachas" className="dropdown-item" >Bombachas</Link>
                    <Link to="/categoria/accesorios" className="dropdown-item" >Accesorios</Link>
                    <div className="dropdown-divider" />
                    <Link to="/productos" className="dropdown-item" >Giftcards</Link>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Info</a>
                <div className="dropdown-menu">
                    <Link to="/talles" className="dropdown-item" >Guia de talles</Link>
                    <Link to="/preguntas" className="dropdown-item" >Preguntas Frecuentes</Link>
                </div>
            </li>
        </>
    )
}
