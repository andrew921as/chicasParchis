import React from "react";

import "./Cell.css"; 

//children nos sirve para que React sepa que vamos a agregar algo al objeto
export default function Cell({ props, children}) { 
  return( 
      <div style={{backgroundColor: props.color}} className="jhon">
        {props.id} 
        {children}
      </div>
  );
}