import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer'
import Home from './Home/Home';
import { ItemListContainer } from './Products/ItemListContainer/ItemListContainer';
import NuevoNavbar from './Navbar/NuevoNavbar';
import Footer from './Footer/Footer';
import { CartContextProvider } from '../context/CartContext';
import Cart from './Cart/Cart';




function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NuevoNavbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:categoria' element={<ItemListContainer titulo="Productos"/>}></Route>
            <Route path='/detalles/:id' element={<ItemDetailContainer titulo="Detalles"/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1 className='error-404'>Error 404</h1>}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
