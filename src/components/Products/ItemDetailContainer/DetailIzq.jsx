import React from 'react'

function DetailIzq({item}) {
    return (
        <>
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
        </>
    )
}

export default DetailIzq