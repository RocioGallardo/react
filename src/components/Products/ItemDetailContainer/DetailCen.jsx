import React from 'react'

function DetailCen({item}) {
    const {nombre, arrayImg, id} = item

    return (
        <>
        {arrayImg.map(img => <img className="img-card-detail" key={id} src={`../${img}`}  alt={nombre} />)}
        </>
    )
}

export default DetailCen