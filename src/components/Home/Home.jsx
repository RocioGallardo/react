import Navbar2 from '../Navbar/Navbar2';
import { ItemListContainer } from '../Products/ItemListContainer/ItemListContainer'
import './Home.css';

function Home() {
    
    return (
        <div className="home-container">
            <Navbar2 />
            <img className='banner section1' id="img1" src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/muerdago.jpg?alt=media&token=230230ad-5556-4a1f-8743-546b9c18774b" alt="banner-brave" />
            <img className='banner section2' id="img2" src="https://firebasestorage.googleapis.com/v0/b/tienda-brave.appspot.com/o/aji.jpg?alt=media&token=8aadffea-1f96-4257-a9f5-a65a3f821da4" alt="banner-brave" />
            <div className='section3'>
                <ItemListContainer/>
            </div>
            
        </div>
    )
}

export default Home