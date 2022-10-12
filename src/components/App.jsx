import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer'
import Home from './Home/Home';
import { ItemListContainer } from './Products/ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { CartContextProvider } from '../context/CartContext';
import { UserContextProvider} from '../context/UserContext'
import CartContainer from './Cart/CartContainer';
import Questions from './Info/Questions';
import Checkout from './Checkout/Checkout';
import Login from './User/Login';
import Register from './User/Register';
import Search from './Search/Search';


function App() {

  return (
    <CartContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/productos' element={<ItemListContainer />}></Route>
            <Route path='/buscar' element={<Search/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/detalles/:id' element={<ItemDetailContainer titulo="Detalles" />}></Route>
            <Route path='/info' element={<Questions />}></Route>
            <Route path='/cart' element={<CartContainer />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='*' element={<h1 className='error-404'>Error 404</h1>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;
