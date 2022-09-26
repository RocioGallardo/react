import './MenuCostado.css';
import {useState} from 'react';
import ListaCostado from './ListaCostado';



function MenuCostado({classButton, setClassButton}) {

    const [buttonClicked, setClassButtonClicked] = useState("prendas")

    return (
        <aside className={classButton}>
            <div className='div-botones-costado'>
                <button className={buttonClicked == "prendas" ? "button-menu-costado bold" : "button-menu-costado"} onClick={() => {setClassButtonClicked("prendas")}}>Prendas</button>
                <button className={buttonClicked == "colecciones" ? "button-menu-costado bold" : "button-menu-costado"}  onClick={() => {setClassButtonClicked("colecciones")}} >Colecciones </button>
                <button className={buttonClicked == "info" ? "button-menu-costado bold" : "button-menu-costado"}  onClick={() => {setClassButtonClicked("info")}}>Info</button>
            </div>
            <div className='div-lista-costado'>
                <ListaCostado buttonClicked={buttonClicked} setClassButton={setClassButton}/>
            </div>
        </aside>
    )
}

export default MenuCostado