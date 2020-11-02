import React from 'react';

let display = {
    height:25,
    width:50,
    backgroundColor:"white",
    border:"2px solid pink",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"700",
    fontSize:15,
    borderRadius:50,
}

export default function ItemCountDisplay(props){
    return (
        <div className="display" style={display}>{props.counter}</div>
    )
}

/* export default function ItemCountDisplay(props){
    let color = {color:props.exceed ? "red" : "black"};
    let styles = {display, color};

    return (
        <div className="display" style={styles}>{props.counter}</div>
    )
} */