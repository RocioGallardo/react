import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addItem = (id, cant, talle, precio) => {
        const findItemInCart = cartList.find(producto => producto.id === id && producto.talle === talle)
        if (findItemInCart) {
            findItemInCart.cant = findItemInCart.cant + cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, {id: id, cant: cant, talle: talle, precio: precio }])
        }
    }


    const removeItem = (itemId, talle) => {
        const filteredArray = cartList.filter(
            (item) => item.id !== itemId || item.talle!== talle
        )
        setCartList(filteredArray)
    }

    const clear = () => { setCartList([])}


    const cantidadTotal = () => {
        if(cartList.length > 0 ){
            const resultado = cartList.reduce((acc, curr) => acc + curr.cant, 0)
            return resultado
            }
        }   
    const totalCart = () => {
        return cartList.reduce((acc, curr) => acc + curr.cant * curr.precio, 0)
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, cantidadTotal, totalCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider, useCartContext } 