import React from 'react'
import { Item } from './Item'

export const ItemList = ({productList}) => {

    return (
        <>
        <div className='container-cards-productos'>
            {productList.map(item => <Item item={item} key={item.id}/>)}
        </div>
        </>
    )
}