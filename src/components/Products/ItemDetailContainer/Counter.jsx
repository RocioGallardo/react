import useCounter from '../../Hooks/useCounter';

function Counter({stock, onAdd, min}) {
    const {sumar, restar, reset, cont} = useCounter(stock, min)
    return (
        <>
            <p>Cantidad: {cont}</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className='btn btn-outline-danger' onClick={restar}>-</button>
                    <button className='btn btn-sm btn-secondary' onClick={reset}>Reset</button>
                    <button className='btn btn-outline-success' onClick={sumar}>+</button>
                </div>
            <button className='btn btn-primary' onClick={() => onAdd(cont)}>Agregar al Carrito</button>
        </>
    )
}

export default Counter
