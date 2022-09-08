import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer'
import Home from './Home/Home';
import { ItemListContainer } from './Products/ItemListContainer/ItemListContainer';
import NuevoNavbar from './Navbar/NuevoNavbar';
import Footer from './Footer/Footer';


function App() {
  
  return (
    <>
      <BrowserRouter>
      <NuevoNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/news' element={<ItemListContainer titulo="Productos"/>}></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer titulo="Productos"/>}></Route>
          <Route path='/detalles/:id' element={<ItemDetailContainer titulo="Detalles"/>}></Route>
          <Route path='*' element={<h1 className='error-404'>Error 404</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
