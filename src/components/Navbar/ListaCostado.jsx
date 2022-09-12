import React from 'react'
import { productosjs } from '../Products/productosjs'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'





const coleccionesRep = productosjs.map((la) => la.coleccion)
const colecciones = coleccionesRep.reduce((a,e) => {
        if(!a.find(d => d === e)){
            a.push(e)
        } 
        return a
}, [])


const categoriaRep = productosjs.map((la) => la.categoria)

const categorias = categoriaRep.reduce((a,e) => {
    if(!a.find(d => d === e)){
        a.push(e)
    } 
    return a
}, [])


function ListaCostado({buttonClicked}) {
    
    const [lista, setlista] = useState(categorias.map((categoria) => <li className='li-lista-costado' key={categoria}> <Link to="/categoria/">{categoria}</Link></li>))
    
    useEffect(() => {
        switch (buttonClicked) {
            case "prendas": 
                setlista(categorias.map((categoria) => 
                <li className='li-lista-costado' key={categoria} >
                    <Link to={`/${categoria}`}>{categoria}</Link>
                    </li>))
                break;
            case "colecciones": setlista(colecciones.map((coleccion) => <li className='li-lista-costado' key={coleccion} ><Link to="/categoria/">{coleccion}</Link></li>))
                break;
            case "info":setlista(<><li className='li-lista-costado'><Link to="/categoria/">Guia de talles</Link></li><li className='li-lista-costado'><Link to="/categoria/">Preguntas Frecuentes</Link></li></>)
                break;
        }
    }, [])


    return (
        <ul className='ul-lista-costado'>
            {lista}
        </ul>
    )
}

export default ListaCostado