import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: `AIzaSyBoXNmuojWTmJqmNhCWCCteK74WajCBA8A`,
    authDomain: "tienda-brave.firebaseapp.com",
    projectId: "tienda-brave",
    storageBucket: "tienda-brave.appspot.com",
    messagingSenderId: "834608275764",
    appId: "1:834608275764:web:1fa8e74fb5e7cb854a4561"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()


async function cargarBaseDeDatos() {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            precio: producto.precio,
            arrayImg: producto.arrayImg,
            img: producto.img,
            tallesup: producto.tallesup,
            copa: producto.copa,
            talleinf: producto.talleinf,
            ligas: producto.ligas,
            arrayStock: producto.arrayStock,
            coleccion: producto.coleccion,
            categoria: producto.categoria,
            tipoDePrenda: producto.tipoDePrenda,
            detalles: producto.detalles
        });
    })
}

const auth = getAuth(app)


export { db, app, cargarBaseDeDatos, auth }
