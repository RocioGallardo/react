import useCounter from '../../Hooks/useCounter';

function Counter({stock, min, agregar, item}) {

    const {sumar, restar, reset, cont} = useCounter(stock, min)
    
    return (
        <>
        <div>
            <button className='btn-counter bold' onClick={restar}>-</button>
            <button className='btn-counter bold' onClick={reset}>Reset</button>
            <button className='btn-counter bold' onClick={sumar}>+</button>
        </div>
        <button className='btn' onClick={() => agregar(item.id)}>Añadir {cont} a la cesta</button>
        </>
    )
}

export default Counter
