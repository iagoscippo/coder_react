import React from 'react';

const itemStyle = {
    margin: 50,
}

const picStyle = {
    height: 200,
    width: 200,
}

function Item({ item }) {
    return <div style={itemStyle}>
             <img src={item.pic} alt={item.name} style={picStyle} />
             <br/>
             {item.price}
            </div>
};

export default Item;