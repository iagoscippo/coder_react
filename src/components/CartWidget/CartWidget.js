import React from 'react';
import cartIcon from './cartIcon.svg';
import './CartWidget.css';

function CartWidget() {
    return <img src={cartIcon} className="cartIcon" alt="cartIcon" />
};

export default CartWidget;