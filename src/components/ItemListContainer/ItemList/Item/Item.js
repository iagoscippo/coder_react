import React from 'react';

function Item({ item }) {
    return <ul style={{listStyleType: "none"}}>
             { item.id, item.name }
            </ul>
};

export default Item;