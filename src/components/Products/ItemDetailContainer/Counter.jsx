import { useCartContext } from '../../../context/CartContext';
import useCounter from '../../Hooks/useCounter';


function Counter({min, item, onAdd, stock}) {

    const {addItem} = useCartContext()

    const {sumar, restar, reset, cont} = useCounter(stock, min)

    const saveItemToCart = (nombre, id, cant) => {
        addItem(nombre, id, cant)
        onAdd()
    }
    return (
        <>
        <div>
            <button className='btn-counter bold' onClick={restar}>-</button>
            <button className='btn-counter bold' onClick={reset}>Reset</button>
            <button className='btn-counter bold' onClick={sumar}>+</button>
        </div>
        <button className='btn' onClick={() => saveItemToCart(item.nombre, item.id, cont)}>Añadir {cont} a la cesta</button>
        </>
    )
}

export default Counter
