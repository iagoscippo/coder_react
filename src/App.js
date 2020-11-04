import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  let [cart, setCart] = useState(0);

 /* useEffect(() => {
    console.log("Initialized");
  }, []); */

   const info = {
    width: '100%',
    marginTop: 50,
    textAlign: 'center'
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
        <div className="info" style={info}>
          <ItemListContainer title="catálogo"/>
          <h3>carrito: {cart}</h3>      
        </div>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer title="detalle" id={"id"} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
  };

export default App;