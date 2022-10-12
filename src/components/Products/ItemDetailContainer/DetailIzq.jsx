import React from 'react'

function DetailIzq({item}) {
    return (
        <>
            <p>
                {item.detalles}
            </p>
            <div className="cuidados-container">
                <div className="cuidados">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cuidado1.jpg?alt=media&token=40247119-3886-4863-adfc-e377f3d4bc40" alt="lavar-a-mano" />
                    <p>Lavar a mano con agua fría</p>
                </div>
                <div className="cuidados">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cuidado2.jpg?alt=media&token=e0ba1674-fe7f-4b42-9246-84df9ef35fc5" alt="" />
                    <p>No centrifugar</p>
                </div>
                <div className="cuidados">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cuidado3.jpg?alt=media&token=7e0ee6d2-45db-49de-8587-068dacabfb93" alt="" />
                    <p>No usar lavandina</p>
                </div>
                <div className="cuidados">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cuidado4.jpg?alt=media&token=3ac117c5-8ebc-4e6b-8d41-51119f49f857" alt="" />
                    <p>No usar plancha</p>
                </div>
                <div className="cuidados">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cuidado5.jpg?alt=media&token=9715be80-58f9-40ad-910c-e3f8dbf107ba" alt="" />
                    <p>Secar a la sombra, extendido</p>
                </div>
            </div>
        </>
    )
}

export default DetailIzq