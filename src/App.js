import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

 /* useEffect(() => {
    console.log("Initialized");
  }, []); */

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer title="catálogo"/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer title="detalle" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
  };

export default App;