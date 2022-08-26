import {useState} from 'react'

const useCounter = (stock, min) => {
    const [cont, setCont] = useState(min)
    function sumar(){
        if(cont < stock){
            setCont(cont + 1)
        }
    }
    function restar(){
        if(cont > 1)
        setCont(cont - 1)
    }
    function reset(){
        setCont(min)
    }
    return {
    sumar, restar, reset, cont
    }
}

export default useCounter