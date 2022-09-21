import { Link } from 'react-router-dom';
import './Item.css'


export const Item = ({item}) => {

    const { id, nombre,  precio,img, coleccion } = item

    return (
        <div className="card-productos" key={id}>
            <Link to={`/detalles/${id}`}>
                <img src={`${img}`} className="img-card-productos" alt="imagen-producto1"/>
                    {/* <button className=''>Ver mas detalles</button> */}
            </Link>
            <div className='detalles-card-productos'>
                <h5 className="card-title">{nombre} - {coleccion}</h5>
                <p className='card-text'>{precio} ARS</p>
            </div>
        </div>
    )
}