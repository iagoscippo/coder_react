import React, {useState} from 'react';
import ItemCountAdd from './Add/Add';
import ItemCountButton from './Button/Button';
import ItemCountDisplay from './Display/Display';

const styles = {
    width:300,
    height:150,
    backgroundColor:'black',
    display: 'flex',
    flexDirection:'column',
    borderRadius: '10px',
    margin: '50px auto'
}

const upper = {
    display: 'flex',
    justifyContent: 'space-around',
    width:'100%',
    height:'40%',
    margin: '20px 0 0'
}

const lower = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    margin: "10px 0 20px 0" 
}

export default function ItemCount({stock, amount, initial, handleAdd}) {

    let [exceed,setExceed] = useState(false);
    let [counter, setCounter] = useState(initial);

    const handleClick = (amount) =>{
        return ()=>{
          let total = (amount < 0) ? 0 : amount;
          let limit = (stock < total) ? stock : total;
          setCounter(limit);
          setExceed(((stock - 1)< total) || (total === 0) ); //opcional
        }
       }
       
    return(
        <div className="itemCounter" style={styles}>
            <div className="upper" style={upper}>
                <ItemCountButton add={false} onClick = {handleClick} counter = {counter}/>
                <ItemCountDisplay counter = {counter} exceeded = {exceed}/>
                <ItemCountButton add={true} onClick = {handleClick} counter = {counter}/> 
            </div>
            <div className="lower" style={lower}>
                <ItemCountAdd onAdd = {handleAdd} />
            </div>
        </div>
    )
} 