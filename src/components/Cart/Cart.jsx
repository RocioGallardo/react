import { useCartContext } from "../../context/CartContext"
import React from 'react'
import ItemCart from "./ItemCart";
import {Link} from 'react-router-dom'

function Cart() {
    const {cartList, clear} = useCartContext()
    return (
    <>  
        <div className="div-cartList">
            {cartList.length ? 
            <button onClick={() => clear()}> limpiar carrito</button> 
            :<>
                <h1>Tu carrito está vacío</h1>
                <Link to="/productos">
                    <button className="btn">seguir viendo</button>
                </Link>
            </>
            
            }
            {cartList.map(item => <ItemCart id={item.id} key={item.id} cant={item.cant}/>)}
        </div>
    </>
        
    )
}

export default Cart