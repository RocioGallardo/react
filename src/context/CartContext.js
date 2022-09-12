import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addItem = (nombre, id, quantify) => {
        if (cartList.length === 0) {
            setCartList([{ nombre: nombre, id: id, cant: quantify }])
        } else {
            const findItemInCart = cartList.find(producto => producto.id === id)
            if (findItemInCart) {
                findItemInCart.cant = findItemInCart.cant + quantify
                setCartList([...cartList])
            } else {
                setCartList([...cartList, { nombre: nombre, id: id, cant: quantify }])
            }
        }
    }
    const removeItem = (itemId) => { }
    const clear = () => { }
    const isInCart = (id) => { }
    

    const cantidadTotal = () => {
        if(cartList.length === 0 ){
            return ""
        }else {
            const resultado = cartList.reduce((acc, curr) => acc + curr.cant, 0)
            return resultado
        }
    }    

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart, cantidadTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider, useCartContext } 