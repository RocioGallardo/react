import React from 'react'
import { ItemListContainer } from '../Products/ItemListContainer/ItemListContainer'

function Home() {
    return (
        <>
            <img className='banner' src="../img/banner-aji.jpg" alt="banner-brave" />
            <ItemListContainer titulo="Productos"/>
        </>
    )
}

export default Home