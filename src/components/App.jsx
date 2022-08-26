import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { useState } from 'react';
import Productos from './ItemListContainer/Productos';

function App() {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer titulo="Productos"/>
      <img className='banner' src="./img/banner-aji.jpg" alt="banner-brave" />
    </>
  );
}

export default App;
