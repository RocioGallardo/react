
export default function Dropdown() {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Sujetadores</a>
                    <a className="dropdown-item" href="#">Bombachas</a>
                    <a className="dropdown-item" href="#">Accesorios</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Giftcards</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Info</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Guia de talles</a>
                    <a className="dropdown-item" href="#">Preguntas Frecuentes</a>
                </div>
            </li>
        </>
    )
}
