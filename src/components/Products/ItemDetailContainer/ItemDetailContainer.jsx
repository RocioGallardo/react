import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {productosjs} from '../productosjs'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    
    const {id} = useParams()

    const [item, setItem] = useState({})
    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() => res(productosjs.find(producto => producto.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    }, [])

    return (
        <>
            {item.nombre ? <ItemDetail item={item} /> : <div className="lds-hourglass"></div>}
        </>
        
    )
}

export default ItemDetailContainer