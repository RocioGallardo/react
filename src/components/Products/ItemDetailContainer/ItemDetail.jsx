import './ItemDetail.css'
import { useState } from "react"
import DetailDer from "./DetailDer"
import DetailIzq from "./DetailIzq"
import DetailCen from "./DetailCen"




function ItemDetail({ item }) {

    const [show, setshow] = useState(true)

    const onAdd = () => {
        setshow(false)
    }
    return (
        <div className="div-card-detail" >
            <div className="div-card-detail-izq">
                <DetailIzq item={item}/>
            </div>
            <div className="div-card-detail-center">
                <DetailCen item={item}/>
            </div>
            <div className="div-card-detail-der">
                <DetailDer item={item} onAdd={onAdd} min={1} show={show}/>
            </div>
        </div>
    )
}

export default ItemDetail




