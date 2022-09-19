import './cart.css'
import { useCartContext } from "../../context/CartContext"
import { productosjs } from '../Products/productosjs'


function ItemCart({ id, cant, talle}) {
    const { removeItem } = useCartContext()
    const producto = productosjs.find((el) => el.id === id)
    const key = producto.id + talle

    return (
        <>{console.log(key)}
        <div className='div-card-cart' key={key}>
            <img className="img-card-cart" src={producto.img} alt={producto.nombre} />
            <div className='info-card-cart'>
                <p>{producto.nombre}</p>
                <p>Talle : {talle}</p>
                <p>Cantidad: {cant}</p>
                <p>Precio por unidad : {producto.precio} ars</p>
                <p>Precio total : {producto.precio * cant} ars</p>
            </div>
            <button onClick={() => removeItem(id, talle)}>
                <img className='cesta' src="../img/eliminar.svg" alt="eliminar" />
            </button>
        </div>
        
        </>
        
        
    )
}

export default ItemCart