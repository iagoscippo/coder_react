import React from 'react';

const add = {
    display:"flex",
    alignText:"center",
    cursor:"pointer",
    backgroundColor:"pink",
    padding:20,
    border:"2px solid grey",
    color: "black",
    fontSize: 20,
    height:10,
    borderRadius:10,

}

export default function ItemCountAdd(props){
    return (
        <div className="agregar" style={add} onClick={props.handleAdd}>agregar</div>
    )
};