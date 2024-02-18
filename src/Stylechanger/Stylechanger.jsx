import React, { useState } from "react";

function Stylechanger() {

    const stylechange = {
        title: "CNC Web World",
        css: {
            color: "red",
            fontSize: "10px",
            border: "2px solid blue"
        }
    }

    const [fontstyle, setfontstyle] = useState(stylechange);

    function newstyle() {
        setfontstyle({
            title: "CNC By Prashant",
            css: {
                color: "red",
                fontSize: "20px",
                border: "10px dotted green"
            }
        })
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Style Changer</h2>
            <h2 style={ fontstyle.css }>{fontstyle.title}</h2>
            <button onClick={newstyle}> Click Me</button>
        </div>
    )
}

export default Stylechanger