import React from 'react'

function DetailCen({item}) {
    const {nombre, arrayImg, id} = item

    return (
        <>
        {arrayImg.map(img => <img className="img-card-detail" key={img} src={`../${img}`}  alt={nombre} />)}
        </>
    )
}

export default DetailCen