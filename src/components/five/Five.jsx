import React from "react";

import "./Five.css"; 

export default function Five ({color}) {

    console.log(color);

    return(
        <div style={{backgroundColor: color}} className="file">
        </div>
    )
}