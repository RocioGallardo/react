import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

function DetailDer({item, onAdd, min, show}) {
    return (
        <div>
                <h1 className="card-title">{item.nombre}</h1>
                <h3 className="card-text">{item.coleccion}</h3>
                <p className="card-text">{item.precio} ars</p>
                <p className="card-text">Stock: {item.stock}</p>
                {show ? 
                <>
                    <Link to="/talles">
                        <button className="">Encontrá tu talle</button>
                    </Link>
                    <Counter onAdd={onAdd} min={min} item={item} />
                </>
                : 
                <Link  to="/cart"><button className='btn' >Ir al Carrito</button></Link>}
        </div>
    )
}

export default DetailDer