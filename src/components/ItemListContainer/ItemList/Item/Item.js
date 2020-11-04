import React from 'react';
import {Link} from 'react-router-dom';

const itemStyle = {
    width: 300,
    height: 300,
    margin: 50,
    justifyContent: 'space-around',
    border:"2px solid black",
    float: 'center',
}

const picStyle = {
    height: 200,
    width: 200,
}

function Item({ item }) {
    return <div style={itemStyle}>
             <Link exact to={"/item/:id"}>
             <img src={item.pic} alt={item.name} style={picStyle} />
             </Link>
             <br/>
             {item.price}
            </div>
};

export default Item;