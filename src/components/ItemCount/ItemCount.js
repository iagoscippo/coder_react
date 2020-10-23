import React from 'react';
import ItemCountAdd from './Add/Add';
import ItemCountButton from './Button/Button';
import ItemCountDisplay from './Display/Display';

const styles = {
    width:350,
    height:160,
    backgroundColor:'black',
    display: 'flex',
    flexDirection:'column',
    borderRadius: '20px',
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

export default function ItemCount(props) {
    return(
        <div className="itemCounter" style={styles}>
            <div className="upper" style={upper}>
                <ItemCountButton add={false} onClick = {props.handleClick} counter = {props.counter}/>
                <ItemCountDisplay/>
                <ItemCountButton add={true} onClick = {props.handleClick} counter = {props.counter}/> 
            </div>
            <div className="lower" style={lower}>
                <ItemCountAdd onAdd = {props.handleAdd} />
            </div>
        </div>
    )


} 