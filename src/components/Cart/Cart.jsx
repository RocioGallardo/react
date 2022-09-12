import { useCartContext } from "../../context/CartContext";
import React from 'react'
import ItemCart from "./ItemCart";

function Cart() {
    const {cartList} = useCartContext()
    return (
        <div className="div-cartList">
            {cartList.map(item => <ItemCart id={item.id} key={item.id} cant={item.cant}/>)}
        </div>
    )
}

export default Cart