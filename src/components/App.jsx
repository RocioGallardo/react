import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer'
import Home from './Home/Home';
import Contacto from './Contacto/Contacto';
import { ItemListContainer } from './Products/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer titulo="Productos"/>}></Route>
          <Route path='/detalles/:id' element={<ItemDetailContainer titulo="Detalles"/>}></Route>
          <Route path='*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
