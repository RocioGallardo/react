import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <img className='banner' src="./img/banner-aji.jpg" alt="banner-brave" />
      <ItemListContainer titulo="Productos"/>
    </>
  );
}

export default App;
