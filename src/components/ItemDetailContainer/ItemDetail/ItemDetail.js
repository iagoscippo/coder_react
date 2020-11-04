import React from 'react';

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

function ItemDetail({item}) {
    return <div style={itemStyle}>
             <img src={item.pic} alt={item.name} style={picStyle} />
             <br />
             {item.price}
             <br />
             {item.detail}
            </div>
}

export default ItemDetail;