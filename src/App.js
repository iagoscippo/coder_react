import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  let available = 15;
  let initial = 1;

  let [stock, setStock] = useState(available);
  let [cart, setCart] = useState(0);

  /* useEffect(() => {
    console.log("Initialized");
  }, []); */

  const  handleAdd = ()=>{
  /* if (stock > 0) {
      let resto = stock - counter;
      setCart(counter + cart);
      setStock(resto);
      setCounter( (initial > resto) ? resto : initial); //opcional 
    } else {
      alert('no queda stock :(');
    } */
  }

  const info = {
    width: '100%',
    marginTop: 50,
    textAlign: 'center'
  }

  let itemCountProps = {stock, initial, handleAdd};

  return (
    <div className="App">
      <NavBar />
        <div className="info" style={info}>
          <ItemCount {...itemCountProps}/>
          <h3>carrito: {cart}</h3>
          <ItemListContainer title="FURIA PRINT"/>
      </div>
    </div>
  )
  };

export default App;