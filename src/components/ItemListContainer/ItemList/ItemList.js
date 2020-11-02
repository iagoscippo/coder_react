import React from 'react';
import Item from './Item/Item';

function ItemList({items}) {
    return items.map(item =>{ return (<Item item={item}/>)}
    )
};

export default ItemList;