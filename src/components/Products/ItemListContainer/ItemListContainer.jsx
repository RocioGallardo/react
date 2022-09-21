import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';



export const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { categoria } = useParams()

    const getProducts = async (categoria) => {
        const document = categoria ? query(collection (db, "productos"), where("categoria", "==", categoria)) : collection (db, "productos")
        const coleccion = await getDocs(document)
        const productos = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
        setProductList(productos)
    }

    useEffect(() => {
        getProducts(categoria)
    }, [categoria])

    return (
        <>
            {productList.length ? <ItemList productList={productList}/> : <div className="lds-hourglass"></div>}
        </>
    )
}