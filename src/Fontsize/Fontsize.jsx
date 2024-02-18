import React, { useState } from "react";
import './Fontsize.css';

function Fontsize() {
    const [fsize,setfsize]=useState('');

    function getValue(e){
        // console.log(e.target.value);
        let value=e.target.value+'px';
        setfsize(value);
    }
    
    let getColor =(e)=>{
        // console.log(e.target.value);
        let color=e.target.value;
        setfsize(color);
    }
    return (
        <>
            <hr />
            <h2 style={{ textAlign: 'center' }}>Font Size Changer</h2>
            <h2 style={{ fontSize: fsize,color:fsize }}>CNC Web World</h2>

            <input type="range" name="range" onChange={getValue} step={5}/>
            <input type="color" name="color" onChange={getColor}/>
        </>
    )
}
export default Fontsize