import React from 'react'
import { useCartContext } from "../../context/CartContext"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useState, useEffect } from 'react'

function ItemsCheckout(id, cant, talle) {
    const { removeItem } = useCartContext()

    const [item, setItem] = useState()
    const getProducto = async () => {
        const document = doc(db, "productos", id)
        const response = await getDoc(document)
        setItem({ id: response.id, ...response.data() })
    }
    useEffect(() => {
        getProducto()
    }, [])

    const key = id + talle
    return (
        item ?
        <div className='div-card-cart' key={key}>
            <img className="img-card-cart" src={item.img} alt={item.nombre} />
            <div className='info-card-cart'>
                <p>{item.nombre}</p>
                <p>Talle : {talle}</p>
                <p>Cantidad: {cant}</p>
                <p>Precio por unidad : {item.precio} ars</p>
                <p>Precio total : {item.precio * cant} ars</p>
            </div>
            <button onClick={() => removeItem(id, talle)}>
                <img className='cesta' src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/eliminar.svg?alt=media&token=0adac4c8-04f4-4f81-ac0d-a6087b9b6ae3" alt="eliminar" />
            </button>
        </div>
        : <></>
    )
}

export default ItemsCheckout
