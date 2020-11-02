import React from 'react';
import Pic1 from './remera1.jpg';
import Pic2 from './remera2.jpg';
import Pic3 from './remera3.jpg';

const itemStyle = {
    height: 200,
    width: 200,
    alignText:"center",
    fontSize: 20,
    fontWeight: 500,
    alignItems: 'center',
    border:"2px solid black",
    margin: 0,
    padding: "auto",
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',

    
}

function Item({ item }) {


    return <div style={itemStyle}>
             { item.id, item.name, item.price, item.pic }
            </div>
};

export default Item;