import {Link} from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
function CartWidget() {
    const {cartList, cantidadTotal} = useCartContext()
    return (
        <>{
            cartList.length ?
            <Link className='nav-cart' to="/cart" >
                <img className='cesta' src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/cesta.svg?alt=media&token=ee73a39b-4c6a-4347-8714-f9530de804f1" alt="carrito" />
                <p>{cantidadTotal()}</p>
            </Link> 
            : ""}
        </>
    )
}

export default CartWidget