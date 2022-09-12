import './MenuCostado.css';
import {useState} from 'react';
import ListaCostado from './ListaCostado';



function MenuCostado({classButton}) {

    const [buttonClicked, setClassButtonClicked] = useState("prendas")
    const [className, setClassName] = useState("button-menu-costado bold    ")

    const event = (contenido) =>{ setClassButtonClicked(contenido)}
    const switchClassNamee = () => {
        if(className === "button-menu-costado"){
            setClassName("button-menu-costado bold")
            } else {
                setClassName("button-menu-costado")
            }
        }
    return (
        <aside className={classButton}>
            <div className='div-botones-costado'>
                <button className={className} onClick={() => {switchClassNamee()}}>Prendas</button>
                <button className='button-menu-costado' onClick={() => {event("prendas")}} >Colecciones </button>
                <button className='button-menu-costado' onClick={() => {event("Info")}}>Info</button>
            </div>
            <div className='div-lista-costado'>
                <ListaCostado buttonClicked={buttonClicked}/>
            </div>
        </aside>
    )
}

export default MenuCostado