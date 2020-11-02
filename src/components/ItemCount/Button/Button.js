import React from 'react';

let button = {
    width: 25,
    height: 25,
    margin: 0,
    textAlign: "center",
    border: "3px solid pink",
    padding: "auto",
    color: 'pink',
    cursor: "pointer",
    backgroundColor: "black",
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    borderRadius:100,
    fontSize:"2rem"
}

export default function ItemCountButton(props) {
    let sign = props.add ? "+" : "-";
    let amount = props.add ? (props.counter + 1) : (props.counter - 1);    
    return (
        <button className="button" style={button} onClick={props.onClick(amount)}>{sign}</button>
    )
}