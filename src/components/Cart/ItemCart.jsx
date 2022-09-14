import './cart.css'
import { useCartContext } from "../../context/CartContext"
import { productosjs } from '../Products/productosjs'


function ItemCart({ id, cant}) {
    const { removeItem } = useCartContext()
    const producto = productosjs.find((el) => el.id === id)
    return (
        <>
        <div className='div-card-cart' key={producto.id}>
            <img className="img-card-cart" src={producto.img} alt={producto.nombre} />
            <div className='info-card-cart'>
                <p>{producto.nombre}</p>
                <p>Cantidad: {cant}</p>
                <p>Precio por unidad : {producto.precio} ars</p>
                <p>Precio total : {producto.precio * cant} ars</p>
            </div>
            <button onClick={() => removeItem(id)}>
                <img className='cesta' src="../img/eliminar.svg" alt="eliminar" />
            </button>
        </div>
        
        </>
        
        
    )
}

export default ItemCart