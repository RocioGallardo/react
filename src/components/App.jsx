import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer titulo="Productos"/>
    </>
  );
}

export default App;
