import React from 'react'
import { productosjs } from '../Products/productosjs'
import './cart.css'


function ItemCart({id, cant}) {
    const resultado = productosjs.find((el) => el.id === id)
    return (
        <div className='div-card-cart' key ={id}>
            <img className="img-card-cart" src={resultado.img} alt={resultado.nombre}/>
            <div className='info-card-cart'>
                <p>{resultado.nombre}</p>
                <p>Cantidad: {cant}</p>
                <p>Precio por unidad : {resultado.precio} ars</p>
                <p>Precio total : {resultado.precio * cant} ars</p>
            </div>
        </div>
    )
}

export default ItemCart