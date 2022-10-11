import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useState, useEffect } from 'react'


function ItemsCheckout({ id, cant, talle}) {

    const [item, setItem] = useState()

    const getProducto = async () => {
        const document = doc(db, "productos", id)
        const response = await getDoc(document)
        setItem({id: response.id, ...response.data()})
    }
    useEffect(() => {
        getProducto()
    }, [])

    const key = id + talle

    return (
        item ? 
            <div className='card-checkout' key={key}>
                <img className="img-card-checkout" src={item.img} alt={item.nombre} />
                <div className='info-card-checkout'>
                    <p>{cant} {item.nombre} {item.coleccion}</p>
                    <p>talle : {talle}</p>
                    <p>total : {item.precio * cant} ars</p>
                </div>
            </div>
        : <></>
    )
}

export default ItemsCheckout