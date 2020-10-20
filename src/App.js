import React from 'react';
import CartWidget from './components/CartWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
 return (
  <div className="App">
   <NavBar />
   <ItemListContainer />
  </div>
)
};

export default App;