import './Search.css'
import { Item } from '../Products/ItemListContainer/Item'
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';

function Search() {
    
    const [valorIngresado, setValorIngresado] = useState()
    const [productList, setProductList] = useState([{}])

    const handlerInputChange = (e) => {
        setValorIngresado(e.target.value.toLowerCase())
    }

    // consulto a Firebase los productos que coincidan con el valor ingresado por el usuario

    const getProducts = async (valorIngresado) => {
        const document = collection (db, "productos")
        const coleccion = await getDocs(document)
        const productos = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
        const productosFiltrados = productos.filter((el) => el.nombre.includes(valorIngresado) || el.detalles.includes(valorIngresado))
        setProductList(productosFiltrados)
    }

    //  Cada vez que el input del buscador cambie, filtrar los productos que coincidan con la búsqueda y mostrar las cards
    useEffect(() => {
        getProducts(valorIngresado)
    }, [valorIngresado])
    
    return (
        <main>
            <input className='input-buscar' type="text" placeholder='Escribe para buscar' onChange={handlerInputChange}/>
            <div className='container-cards-productos'>
                {productList.map(item => <Item item={item} key={item.id}/>)}
            </div>
        </main>
    )
}

export default Search