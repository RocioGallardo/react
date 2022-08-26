import {useState, useEffect}from 'react'
import Counter from './Counter'

const productos = [
        {nombre: "Corpiño con aro", precio: 3500, stock: 5, img: "./img/arco.jpg"},
        {nombre: "Corpiño triangulo", precio: 3200, stock: 3, img: "./img/triangulo.jpg"},
        {nombre: "Tanga", precio: 2000, stock: 7, img: "./img/tanga.jpg"},
        {nombre: "Vedetina", precio: 2200, stock: 10, img: "./img/vedetina.jpg"}
    ]
function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
            if(confirmacion) {
                res(productos)
            } else {
                rej("Acceso denegado")
            }
    })
}


const Productos = ({stock, onAdd, min}) => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        consultarPromesa(true)
        .then(data =>{
            const productosJSX = data.map((producto, indice)=> 
                <div className=" card card-body" key={indice}>
                    <img src={producto.img} className="card-img-top img-producto" alt="imagen-producto1" width="50"/>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <Counter stock= {producto.stock} onAdd={onAdd} min = {min}/>
                </div>
            )
            setProductos(productosJSX)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])


    return(
        <>{productos}
        </>
    )
}

export default Productos