import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList/ItemList";
import Pic1 from '../../img/remera1.jpg';
import Pic2 from '../../img/remera2.jpg';
import Pic3 from '../../img/remera3.jpg';

function getItems(id) {
    return new Promise((res) => {
        setTimeout (() => {
            const items = [{
                id: 1,
                name: "remera1",
                price: "$700",
                pic: Pic1
            }, {
                id: 2,
                name: "remera2",
                price: "$800",
                pic: Pic2,
            }, {
                id: 3,
                name: "remera3",
                price: "$900",
                pic: Pic3
            }];
            res(items);               
        }, 2000);
    });
}

function ItemListContainer({title, itemId}) {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // console.log('Initialized item list container');
        getItems().then(
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