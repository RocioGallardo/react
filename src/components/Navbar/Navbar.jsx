import CartWidget from './CartWidget';
import Dropdown from './Dropdown';

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
                                <a className="nav-link active" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <Dropdown />
                        </ul>
                        <a className="navbar-brand" href="#">
                                    <img src="./img/brave2.jpg" alt="" width="70"/>
                                </a>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
