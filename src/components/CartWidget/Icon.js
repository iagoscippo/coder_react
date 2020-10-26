import React from 'react';
import Icon from './Icon.svg';

let cart = {
    width: 40,
    height: 25,
    margin: 0,
    padding: "auto",
    cursor: "pointer",
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
}

function CartWidgetIcon() {
    return <img src={Icon} alt="Icon" className="cart" style={cart} />
};

export default CartWidgetIcon;