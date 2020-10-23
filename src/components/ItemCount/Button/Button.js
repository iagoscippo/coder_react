import React from 'react';

let button = {
    width: 50,
    height: 50,
    margin: 0,
    textAlign: "center",
    border: "2px solid pink",
    padding: "auto",
    cursor: "pointer",
    backgroundColor: "grey",
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    borderRadius:20,
    fontSize:"2rem"
}

export default function ItemCountButton(props) {
    let sign = props.add ? "+" : "-";
    let amount = props.add ? (props.counter + 1) : (props.counter - 1);    
    return (
        <button className="button" style={button} onClick={props.onClick(amount)}>{sign}</button>
    )
}