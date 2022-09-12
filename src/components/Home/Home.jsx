import Navbar2 from '../Navbar/Navbar2';
import { ItemListContainer } from '../Products/ItemListContainer/ItemListContainer'
import './Home.css';

function Home() {
    
    return (
        <div className="home-container">
            <Navbar2 />
            <img className='banner section1' id="img1" src="../img/muerdago.jpg" alt="banner-brave" />
            <img className='banner section2' id="img2" src="../img/aji.jpg" alt="banner-brave" />
            <div className='section3'>
                <ItemListContainer/>
            </div>
            
        </div>
    )
}

export default Home