import { useEffect } from 'react';
import { useCartContext } from '../../../context/CartContext';
import useCounter from '../../Hooks/useCounter';


function Counter({min, item, onAdd, stock, talleContext}) {

    const {addItem} = useCartContext()

    const {sumar, restar, reset, cont} = useCounter(stock, min)

    const saveItemToCart = (id, cant, talle, precio) => {
        addItem(id, cant, talle, precio)
        onAdd()
    }
    useEffect(() => {
    
    }, [stock])
    

    return (
        <>
        <div>
            <button className='btn-counter bold' onClick={restar}>-</button>
            <button className='btn-counter bold' onClick={reset}>Reset</button>
            <button className='btn-counter bold' onClick={sumar}>+</button>
        </div>
        {stock >= 1 ? 
            <button className='btn' onClick={() => saveItemToCart(item.id, cont, talleContext, item.precio)}>Añadir {cont} a la cesta</button> : 
            <button className='btn btn-disabled' disabled> Sin Stock </button>
            }
        
        </>
    )
}

export default Counter
