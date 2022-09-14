import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DetailDer({ item, onAdd, min, show }) {

    const { tallesup, copa, talleinf, ligas} = item
    const [talleSelected, setTalleSelected] = useState(26)
    const [copaSelected, setCopaSelected] = useState("b")
    const [talleI, setTalleI] = useState("2xs")
    const [talleLigas, setTalleLigas] = useState(1)
    const [stock, setStock] = useState()

    const valort = (event) => {setTalleSelected(event.target.value)}
    const valorc = (event) => {setCopaSelected(event.target.value.toLowerCase())}
    const valorti = (event) => {setTalleI(event.target.value.toLowerCase())}
    const valorLigas = (event) => {setTalleLigas(event.target.value)}


    useEffect(() => {
        switch (item.categoria) {
            case "sujetadores":
                const tallecompleto = talleSelected + copaSelected
                const objetosup = item.arrayStock.filter((el) => el.talle === tallecompleto)
                setStock(objetosup[0].stock)
                break;
            case "bombachas":
                const objetoinf = item.arrayStock.filter((el) => el.talle === talleI)
                setStock(objetoinf[0].stock) 
                break;
            case "accesorios":
                const tallePortaYLigas = talleI + talleLigas
                const objetoacc = item.arrayStock.filter((el) => el.talle === tallePortaYLigas)
                setStock(objetoacc[0].stock) 
                break;
            default:
                break;
        }
        
    }, [item.categoria, item.arrayStock, talleSelected, copaSelected, talleI, talleLigas])

    return (
        <div>
            <h1 className="card-title">{item.nombre}</h1>
            <h3 className="card-text">{item.coleccion}</h3>
            <p className="card-text">{item.precio} ars</p>

            {tallesup.length ?
                <select name="talle" id="selecttalle" onChange={(e) => valort(e)}>
                    {tallesup.map((tallesup, i) => <option key={i} value={tallesup}>{tallesup}</option>)}
                </select>
                : ""}
            {copa.length ?
                <select name="copa" id="selectCopa" onChange={(e) => valorc(e)}>
                    {copa.map((copa, i) => <option key={i} value={copa}>{copa}</option>)}
                </select>
                : ""}
            {talleinf.length ?
                <select name="talle" id="selectinferior" onChange={(e) => valorti(e)}>
                    {talleinf.map((talleinf, i) => <option key={i} value={talleinf}>{talleinf}</option>)}
                </select>
                : ""}

            {ligas.length ?
                <select name="ligas" id="selectLigas" onChange={(e) => valorLigas(e)}>
                    {ligas.map((ligas, i) => <option key={i} value={ligas}>{ligas}</option>)}
                </select>
                : ""}

            <p className="card-text">Stock: {stock}</p>

            {show ?
                <>
                    <Link to="/talles">
                        <button className="">Encontrá tu talle</button>
                    </Link>
                    <Counter onAdd={onAdd} min={min} item={item} stock={stock} />
                </>
                :
                <Link to="/cart"><button className='btn' >Ir al Carrito</button></Link>}
        </div>
    )
}

export default DetailDer