import Counter from "./Counter"

export default function ItemListContainer({ titulo }) {
    function onAdd(cont){
        console.log(`se han seleccionado ${cont} productos`)

    }
    return (
        <div className="container">
            <h1>{titulo}</h1>
            <div className=" card card-body">
                <img src="./img/producto1.jpg" className="card-img-top img-producto" alt="imagen-producto1" width="50"/>
                <h5 className="card-title">Producto 1</h5>
                <Counter stock= {10} onAdd={onAdd} min = {1}/>
            </div>
        </div>
    )
}