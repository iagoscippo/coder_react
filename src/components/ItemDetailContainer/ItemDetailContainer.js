import React, {useState, useEffect} from 'react';
import ItemListContainer from '../ItemListContainer';
import ItemDetail from './ItemDetail/ItemDetail';

/* function getItems(id) {
    return new Promise((res, rej) => {
        setTimeout (() => {
            res(
                [{ item.id, item.pic, item.details }].filter(
                    item => item.id === id
                    )
                );
            rej("no existe la remera ", id);
        }, 2000);
    });
}; */

function ItemDetailContainer({items}) {
    return <></>
}


export default ItemDetailContainer;