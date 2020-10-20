import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

class NavBar extends React.Component{
    render(){
      return (
        <div className="navbar">
            <a className="active" href="#home">home</a>
            <a href="#diseños">diseños</a>
            <a href="#método">método</a>
            <a href="#contacto">contacto</a>
            <a href="#cart"><CartWidget /></a>
        </div>
      )
    }
  }

export default NavBar;