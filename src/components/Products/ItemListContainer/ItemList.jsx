import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productList }) => {

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            {
                productList.map(item => <Item item={item} />)
            }
        </div>

    )
}