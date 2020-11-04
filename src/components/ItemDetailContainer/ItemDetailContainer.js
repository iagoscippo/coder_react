import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Pic1 from '../../img/remera1.jpg';
import Pic2 from '../../img/remera2.jpg';
import Pic3 from '../../img/remera3.jpg';

function getItem(id) {
    return new Promise((res) => {
        setTimeout (() => {
            const item = [
                {id: 1, name: "remera1", price: "$700", pic: Pic1, detail: 'dragon ball, goku y sheng long. impresión digital.'} ,
                {id: 2, name: "remera2", price: "$800", pic: Pic2, detail: 'dragon ball z, trunks del futuro. impresión digital'},
                {id: 3, name: "remera3", price: "$900", pic: Pic3, detail: 'shingeki no kyojin, titán fundador. impresión digital.'}
                ].filter(
                    item => item.id === id
                    );
            res(item);
    }, 2000)})
};

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    let available = 15;
    let initial = 1;
    let [stock, setStock] = useState(available);
    // const [loading, setLoading] = useState(null);

    useEffect (() => {
        console.log('Changed to id: ', id);
        // setLoading(true);
        getItem(id).then(res => {
            // setLoading(false);
            setItem(res[0]);
        })
    }, {id})

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
        {item && < ItemDetail item={item} />}
        <ItemCount {...itemCountProps}/>
    </>;
}

export default ItemDetailContainer;