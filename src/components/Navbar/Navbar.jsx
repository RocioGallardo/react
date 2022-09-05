import CartWidget from './CartWidget';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Inicio</Link>
                            </li>
                            <Dropdown/>
                            <li className="nav-item">
                                <Link to="/Contacto" className="nav-link" >Contacto</Link>
                            </li>
                        </ul>
                        <Link to="/" className="navbar-brand" >
                            <img src="./img/brave2.jpg" alt="" width="70"/>
                        </Link>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
