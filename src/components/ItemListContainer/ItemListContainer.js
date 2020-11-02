import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList/ItemList";


function getItems(id) {
    return new Promise((res, rej) => {
        setTimeout (() => {
            res(
                [{ id: 1, name: "remera 1" }, { id: 2, name: "remera 2" }, { id: 3, name: "remera 3" }]
                );
                rej("no pude encontrar la remera ", id);
                }, 2000);
    });
}

function ItemListContainer({title, itemId}) {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // console.log('Initialized item list container');
        getItems(itemId).then(
            items => {
                setList(items);
            },
            err => {
                setError(err);
            }
        );
    }, []);
    
    return (  
        <>
            <h3>originales de {title} </h3>
            {error && <p>{error}</p>}
            <ItemList items={list} />
        </>
    );
}

export default ItemListContainer;