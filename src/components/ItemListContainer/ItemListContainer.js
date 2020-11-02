import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList/ItemList";


function getItems(id) {
    return new Promise((res, rej) => {
        setTimeout (() => {
            res(
                [{ id: 1, name: "item1" }, { id: 2, name: "item2" }, { id: 3, name: "item3" }]
                .filter(
                    item => item.id === id
                    )
                );
                rej("no pude encontrar la remera ", id);
                }, 1500);
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