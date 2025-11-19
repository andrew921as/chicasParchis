import React from "react";

import "./Cell.css"; 

export default function Cell({ props, children}) { 
  return( 
      <div style={{backgroundColor: props.color, margin:"3px"}} className="jhon">
        {props.id} 
        {children}
      </div>
  );
}