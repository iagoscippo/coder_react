import React /*, {useState, useEffect}*/ from 'react';

/* const getItems = () => {
    return new Promise((res, rej) => {
        setTimeout (() => {
        // res( [ item1, item2, item3]);   
        }, 2000)
    });
} */

function ItemListContainer({title}) {
 /*   const [items, setItems] = useState();


    useEffect(() => {
        console.log('Initialized item list container');

        getItems().then(items => {
            // Guardan en un estado
            setItems(items);
        });
    }, []);
    
*/
    return  <h3>mirá qué piola que está {title} </h3>;
};



export default ItemListContainer;