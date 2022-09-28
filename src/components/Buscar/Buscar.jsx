import { Item } from '../Products/ItemListContainer/Item'
import './Buscar.css'
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';

function Buscar() {
    
    const [valorIngresado, setValorIngresado] = useState()
    const [productList, setProductList] = useState([{}])

    const handlerInputChange = (e) => {
        setValorIngresado(e.target.value.toLowerCase())
    }

    const getProducts = async (valorIngresado) => {
        const document = collection (db, "productos")
        const coleccion = await getDocs(document)
        const productos = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
        const productosFiltrados = productos.filter((el) => el.detalles.includes(valorIngresado))
        setProductList(productosFiltrados)
    }

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

export default Buscar