import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase/firebase'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    
    const {id} = useParams()
    const [item, setItem] = useState({})
    
    const getProducto = async () => {
        const document = doc(db, "productos", id)
        const response = await getDoc(document)
        const item = {id: response.id, ...response.data()}
        setItem(item)
    }
    useEffect(() => {
        getProducto()
    }, [id])
    
    return (
        <>
            {item.nombre ? <ItemDetail item={item} /> : <div className="lds-hourglass"></div>}
        </>
        
    )
}

export default ItemDetailContainer