import Navbar2 from '../Navbar/Navbar2';
import { ItemListContainer } from '../Products/ItemListContainer/ItemListContainer'
import './Home.css';
import { useState, useEffect } from 'react';

function Home() {

    // const [valueY, setValueY] = useState(0)
    // useEffect(() => {
    //     const autoScroll = () => {
    //         let size = window.screen.height
    //         window.scrollTo({top: valueY})
    //         setValueY(valueY + size)
    //         if(valueY > 2300){
    //             setValueY(0)
    //         }
    //     }
    //     setInterval(autoScroll, 7000)
    // })
    
    return (
        <div>
            <Navbar2 />
            <img className='banner' id="img1" src="../img/muerdago.jpg" alt="banner-brave" />
            <img className='banner' id="img2" src="../img/aji.jpg" alt="banner-brave" />
            
            <ItemListContainer titulo="Productos" />
        </div>
    )
}

export default Home