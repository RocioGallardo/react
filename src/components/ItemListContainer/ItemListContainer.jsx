import Productos from "./Productos"


export default function ItemListContainer({ titulo }) {
    function onAdd(cont){
        console.log(`se han seleccionado ${cont} productos`)
    }
    return (
        <div className="container row">
            <h1>{titulo}</h1>
            <Productos onAdd={onAdd} min = {1}/>
        </div>
    )
}