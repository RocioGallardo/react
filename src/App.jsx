import './App.css';

function App() {
  return (
    <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brave</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
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
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
