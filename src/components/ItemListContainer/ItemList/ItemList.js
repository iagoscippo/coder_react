import React, {useState, useEffect} from 'react';
import Item from './Item/Item';

function ItemList({items}) {
    return (
        <ul>
            {items.map(item => (
                <li>
                    {item.id} - {item.name}
                </li>
            ))}
        </ul>
    );
}

export default ItemList;