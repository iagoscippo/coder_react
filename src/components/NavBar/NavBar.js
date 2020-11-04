import React from 'react';
import './NavBar.css'
import CartWidgetIcon from '../CartWidget/Icon'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
    render(){
      return (
        <div className="navbar">
            <NavLink exact to="/">furia print</NavLink>
            <a href="#método">método</a>
            <a href="#contacto">contacto</a>
            <NavLink exact to="/cart"><CartWidgetIcon /></NavLink>
        </div>
      )
    }
  }

export default NavBar;