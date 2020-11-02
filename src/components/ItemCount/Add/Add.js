import React from 'react';

const add = {
    width:50,
    height:15,
    display:"flex",
    alignText:"center",
    cursor:"pointer",
    backgroundColor:"pink",
    padding:10,
    justifyContent: 'center',
    border:"2px solid black",
    color: "black",
    fontSize: 14,
    fontWeight: 600,
    borderRadius:25,

}

export default function ItemCountAdd(props){
    return (
        <div className="agregar" style={add} onClick={props.onAdd}>agregar</div>
    )
};