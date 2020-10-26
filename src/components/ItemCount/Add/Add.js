import React from 'react';

const add = {
    display:"flex",
    alignText:"center",
    cursor:"pointer",
    backgroundColor:"pink",
    padding:15,
    justifyContent: 'center',
    border:"2px solid black",
    color: "black",
    fontSize: 15,
    fontWeight: 500,
    borderRadius:25,

}

export default function ItemCountAdd(props){
    return (
        <div className="agregar" style={add} onClick={props.onAdd}>agregar</div>
    )
};