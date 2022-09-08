import Counter from "./Counter"
import React from 'react'
import './ItemDetail.css'
import {Link} from 'react-router-dom'

function ItemDetail({ item }) {
    function agregarAlCarrito(producto){
        console.log(producto)
        const productoCarrito = {id: producto.id, cantidad: 1}
    }

    function onAdd(cont) {
        console.log(`se han seleccionado ${cont} productos`)
    }
    return (
            <div className="div-card-detail" >
                <div className="div-card-detail-izq">
                    <h3 className="bold">Informacion de la derecha</h3>
                    <p>
                        {item.detalles}
                    </p>
                    <div className="cuidados-container">
                        <div className="cuidados">
                            <img src="../img/cuidado1.jpg" alt="lavar-a-mano" />
                            <p>Lavar a mano con agua fría</p>
                        </div>
                        <div className="cuidados">
                            <img src="../img/cuidado2.jpg" alt="" />
                            <p>No centrifugar</p>
                        </div>
                        <div className="cuidados">
                            <img src="../img/cuidado3.jpg" alt="" />
                            <p>No usar lavandina</p>
                        </div>
                        <div className="cuidados">
                            <img src="../img/cuidado4.jpg" alt="" />
                            <p>No usar plancha</p>
                        </div>
                        <div className="cuidados">
                            <img src="../img/cuidado5.jpg" alt="" />
                            <p>Secar a la sombra, extendido</p>
                        </div>
                    </div>

                </div>
                <div className="div-card-detail-center">
                    <img src={`../${item.img}`} className="img-card-detail" alt={item.nombre}/>
                </div>
                <div className="div-card-detail-der">
                    <h1 className="card-title">{item.nombre}</h1>
                    <h3 className="card-text">{item.coleccion}</h3>
                    <p className="card-text">{item.precio} ars</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <Counter stock={item.stock} onAdd={onAdd} min={1} agregar={agregarAlCarrito} item={item}/>
                    <Link to="/talles">
                        <button className="btn">Encontrá tu talle</button>
                    </Link>
                </div>
            </div>
    )
}

export default ItemDetail




