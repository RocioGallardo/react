import { setDoc, doc, collection, getDocs, getDoc} from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/firebase"
import ItemCart from "../Cart/ItemCart"
import './Checkout.css'
import ItemsCheckout from "./ItemsCheckout"


function Checkout() {
    const { cartList, totalCart, clear } = useCartContext()

    const [numVenta, setNumVenta] = useState()
    const [comprador, setComprador] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })
    const { nombre, email, telefono } = comprador

    const handlerInputChange = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
    const key = (id, talle) => {
        return id + talle
    }

    const generarOrden = async (data) => {
        const col = collection(db, "ventas")
        let size = await getDocs(col).then(res => {let resultado = res.size 
            return resultado})
        const numeroDeOrden = (size + 1).toString()
        setNumVenta(numeroDeOrden)
        await setDoc(doc(col, numeroDeOrden), data)
        clear()

    }


        const updateStock = async (items) => {
        await items.forEach(async (item) => {
        const {id, talle, cantidad} = item
        const itemRef = doc(db, "productos", id)
        const docu = await getDoc(itemRef)
        const result = {...docu.data()}
        const arraYStockFiltrado = result.arrayStock.filter((el) => el.talle !== talle)
        const stockArr = result.arrayStock.filter((el) => el.talle === talle)
        const stock = stockArr[0].stock
        const nuevoStock = stock - cantidad
        arraYStockFiltrado.push({talle: talle, stock: nuevoStock})
        await setDoc(itemRef, {arrayStock: [...arraYStockFiltrado]}, {merge:true})
        })
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        const items = cartList.map((item) => { return { id: item.id, talle: item.talle, cantidad: item.cant, precio: item.precio } })
        const date = new Date()
        const total = totalCart()
        const data = { comprador, items, date, total }
        generarOrden(data)
        updateStock(items)
    }
    
    return (
        !numVenta ? 
        
        <div className="checkout-container">
            <div className="div-items-checkout">
                <h2 className="h2-div-items-checkout">Mi compra</h2>
                <hr />
                {cartList.map(item => 
                    <ItemsCheckout id={item.id} key={key(item.id, item.talle)} cant={item.cant} talle={item.talle}/>)}
                <div className="div-montos-checkout">
                    <p className="p-items-checkout subtotal" >subtotal : {totalCart()}</p>
                    <p className="p-items-checkout montoSubtotal" >{totalCart()}</p>
                    <p className="p-items-checkout envio">envio : </p>
                    <p className="p-items-checkout montoEnvio" >0</p>
                    <p className="p-items-checkout total">total carrito : {totalCart()}</p>
                    <p className="p-items-checkout montoTotal" >{totalCart()}</p>
                </div>
                
            </div>
            <form className="form-checkout"onSubmit={handlerSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    required
                    onChange={handlerInputChange} />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    required
                    onChange={handlerInputChange} />
                <br />
                <input
                    type="number"
                    name="telefono"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={handlerInputChange} />
                <br />
                <input
                    type="submit"
                    value="Finalizar Compra"
                    className="btn" />
            </form>
        </div>
            :
            <div className="cartel-checkout">
                <h2>Felicitaciones</h2>
                <h3>tu compra ha sido realizada</h3>
                <h3> Orden nro : {numVenta}</h3>
            </div>
    )
}

export default Checkout