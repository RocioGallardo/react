import { setDoc, doc, collection, getDocs, getDoc} from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { useUserContext } from "../../context/UserContext"
import { db } from "../../firebase/firebase"
import './Checkout.css'
import ItemsCheckout from "./ItemsCheckout"


function Checkout() {
    const { cartList, totalCart, clear } = useCartContext()
    const {user} = useUserContext()

    const [numVenta, setNumVenta] = useState()
    const [selected, setSelected] = useState({
        envio: "",
        pago: "",
    })

    const handlerSelected = (e) => {
        setSelected({
            ...selected,
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

    const FinalizarCompra = () => {
        const items = cartList.map((item) => { return { id: item.id, talle: item.talle, cantidad: item.cant, precio: item.precio } })
        const date = new Date()
        const total = totalCart()
        const comprador = user.email
        const data = { comprador, items, date, total, selected }
        generarOrden(data)
        updateStock(items)
    }

    
    return (
        !numVenta ? 
        
        <div className="checkout-container">
            
            <div>
                <p>Mátodo de entrega</p>
            <select name="envio" onChange={handlerSelected}>
                <option value="sucursal" >Envío gratuito a sucursal de Correo Argentino</option>
                <option value="retira" >Retiro por el taller</option>
            </select>
            <p>Mátodo de pago</p>
            <select name="pago" onChange={handlerSelected}>
                <option value="eectivo">Efectivo</option>
                <option value="transferencia">Transferencia Bancaria</option>
            </select>
            <p>Usuario : {user.email}</p>
            <button className="btn" onClick={() => FinalizarCompra()}> Confirmar</button>
            
            </div>
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