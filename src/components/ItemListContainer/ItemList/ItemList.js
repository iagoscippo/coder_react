import React from 'react';
import Item from './Item/Item';

const listStyle = {
    height: 200,
    width: 200,
    alignText:"center",
    fontSize: 18,
    fontWeight: 600,
    alignItems: 'center',
    border:"2px solid black",
    margin: 100,
    padding: "auto",
    display: 'flex',
    justifyContent: 'space-around',
}

function ItemList({items}) {
    return items.map(item =>{ return (
    <Item item={item} style={listStyle}/>
    )}
)};

export default ItemList;