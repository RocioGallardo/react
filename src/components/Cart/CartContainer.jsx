import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import ItemCart from "./ItemCart"



function Cart() {
    const {cartList, clear, totalCart} = useCartContext()
    const key = (id, talle) => {
        return id+talle
    }
    return (
    <>  
        {cartList.length ? 
        <div className="carrito-lleno">
            {
            cartList.map(item => 
            <ItemCart id={item.id} key={key(item.id, item.talle)} cant={item.cant} talle={item.talle}/>)}
            <button className="btn" onClick={() => clear()}> limpiar carrito</button>
            <h1>total carrito : {totalCart()}</h1>
        </div>
        :
        <div className="carrito-vacio">
            <h1>Tu carrito está vacío</h1>
            <Link to="/productos">
                <button className="btn">ver productos</button>
            </Link>
        </div>}
    </>
    )
}

export default Cart