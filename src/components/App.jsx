import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer'
import Home from './Home/Home';
import { ItemListContainer } from './Products/ItemListContainer/ItemListContainer';
import NuevoNavbar from './Navbar/NuevoNavbar';
import Footer from './Footer/Footer';
import { CartContextProvider } from '../context/CartContext';
import CartContainer from './Cart/CartContainer';
import Questions from './Info/Questions';
import Checkout from './Checkout/Checkout';




function App() {

  return (
    <CartContextProvider>
        <BrowserRouter>
          <NuevoNavbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/productos' element={<ItemListContainer />}></Route>
            <Route path='/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/detalles/:id' element={<ItemDetailContainer titulo="Detalles" />}></Route>
            <Route path='/info' element={<Questions />}></Route>
            <Route path='/cart' element={<CartContainer />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='*' element={<h1 className='error-404'>Error 404</h1>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
