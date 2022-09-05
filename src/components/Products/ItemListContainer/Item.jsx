import { Link } from 'react-router-dom';


export const Item = ({ item }) => {
    const { nombre, img, precio, id } = item
    return (
        <div className=" card card-body card-productos" key={id}>
            <img src={`../${img}`} className="card-img-top img-producto" alt="imagen-producto1" />
            <h5 className="card-title">{nombre}</h5>
            <p className='card-text'>Precio: ${precio}</p>
            <Link to={`/detalles/${id}`}>
                <button className='btn btn-primary'>Ver mas detalles</button>
            </Link>
        </div>
    )
}