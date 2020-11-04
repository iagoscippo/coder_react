import React from 'react';
import Item from './Item/Item';

const listStyle = {
    height: 200,
    width: 200,
    alignText:"center",
    fontSize: 20,
    fontWeight: 600,
    alignItems: 'center',
    margin: 0,
    padding: "auto",
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
}

function ItemList({items}) {
    return items.map(item =>{ return (
    <Item item={item} style={listStyle}/>
    )}
)};

export default ItemList;