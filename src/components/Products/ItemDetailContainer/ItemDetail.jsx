import Counter from "./Counter"
import React from 'react'

function ItemDetail({ item }) {

    function onAdd(cont) {
        console.log(`se han seleccionado ${cont} productos`)
    }
    return (
        
            <div className="card mb-3 card-detail" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`../${item.img}`} className="img-fluid rounded-start" alt={item.nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">${item.precio}</p>
                            <p className="card-text">Stock: {item.stock}</p>
                            <p className="card-text"><small>{item.detalles}</small></p>
                            <Counter stock={item.stock} onAdd={onAdd} min={1} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail




