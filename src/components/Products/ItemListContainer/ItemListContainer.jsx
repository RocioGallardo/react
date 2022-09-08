import React, { useEffect, useState } from 'react'
import {productosjs} from '../productosjs'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { categoria } = useParams()

    const getProducts = () => new Promise((resolve, reject) => {
        if (categoria) {
            setTimeout(() => resolve(productosjs.filter(item => item.categoria === categoria)), 2000)
        } else {
            setTimeout(() => resolve(productosjs), 2000)
        }
    })

    useEffect(() => {
        getProducts()
            .then(products => setProductList(products))
            .catch(error => console.error(error))
        return () => {
            setProductList([])
        }
    }, [categoria])



    return (
        <>
            {productList.length ? <ItemList productList={productList}/> : <div className="lds-hourglass"></div>}
        </>
    )
}