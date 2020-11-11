import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import Pic1 from '../../img/remera1.jpg';
import Pic2 from '../../img/remera2.jpg';
import Pic3 from '../../img/remera3.jpg';

const getItem = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            const items = [
                {id: 1, name: "remera1", price: "$700", pic: Pic1, detail: 'dragon ball, goku y sheng long. impresión digital.'} ,
                {id: 2, name: "remera2", price: "$800", pic: Pic2, detail: 'dragon ball z, trunks del futuro. impresión digital'},
                {id: 3, name: "remera3", price: "$900", pic: Pic3, detail: 'shingeki no kyojin, titán fundador. impresión digital.'}
                ].find(
                    i => i.id === id
                    );
            res(items);
    }, 2000)})
};

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    console.log(item);
    const { id } = useParams();
    let available = 15;
    let initial = 1;
    let [stock, setStock] = useState(available);
    // const [loading, setLoading] = useState(null);
    console.log('Recieved id: ', id);

    useEffect (() => {
        console.log('Changed to id: ', id);
        // setLoading(true);
        getItem(id).then(res => {
            // setLoading(false);
            setItem(res);
        })
    }, [id])

  const  handleAdd = ()=>{
    if (stock > 0) {
      /*  let resto = stock - counter;
        setCart(counter + cart);
        setStock(resto);
        setCounter( (initial > resto) ? resto : initial); */
      } else {
        alert('no queda stock :(');
      }
    }
  
let itemCountProps = {stock, initial, handleAdd};
    
    return <>
        <p> ID ITEM: {id}</p>
        <ItemDetail item={item}>
          <ItemCount {...itemCountProps}/>
        </ItemDetail>
    </>;
}

export default ItemDetailContainer;