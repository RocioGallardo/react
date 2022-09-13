import {Link} from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
function CartWidget() {
    const {cartList, cantidadTotal} = useCartContext()
    return (
        <>{
            cartList.length ?
            <Link className='nav-cart' to="/cart" >
                <img className='cesta' src="../img/cesta.svg" alt="carrito" />
                <p>{cantidadTotal()}</p>
            </Link> 
            : ""}
        </>
    )
}

export default CartWidget