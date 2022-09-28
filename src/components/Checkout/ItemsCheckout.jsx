// import React from 'react'
// import { doc, getDoc } from 'firebase/firestore'
// import { db } from '../../firebase/firebase'
// import { useState, useEffect } from 'react'

// function ItemsCheckout(id, cant, talle) {

//     const [item, setItem] = useState()

//     const getProducto = async () => {
//         const document = doc(db, "productos", id)
//         const response = await getDoc(document)
//         setItem({ id: response.id, ...response.data() })
//         console.log(item)
//     }

//     useEffect(() => {
//         getProducto()
//     }, [])

//     const key = id + talle
//     return (
//         item ?
//         <div className='div-card-checkout' key={key}>
//             <img className="img-card-checkout" src={item.img} alt={item.nombre} />
//             <div className='info-card-checkout'>
//                 {/* <button onClick={() => removeItem(id, talle)}>
//                     <img className='cesta' src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/eliminar.svg?alt=media&token=0adac4c8-04f4-4f81-ac0d-a6087b9b6ae3" alt="eliminar" />
//                 </button> */}
//                 <p> {item.nombre} x{cant}</p>
//                 <p>talle : {talle}</p>
//                 <p>total : {item.precio * cant} ars</p>
//             </div>
//         </div>
//         :
//         <h1>false</h1>
//     )
// }




import { useCartContext } from "../../context/CartContext"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useState, useEffect } from 'react'


function ItemsCheckout({ id, cant, talle}) {

    const { removeItem } = useCartContext()
    
    const [item, setItem] = useState()

    // const producto = productosjs.find((el) => el.id === id)

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