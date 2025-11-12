import React from "react";
import Header from "./components/header/Header";

const positions = Array(68).fill(0);
console.log(positions);
const colors = ["#FF0505", "#1eabf1ff", "#04fc00ff",  "#f2ff00ff"];

 for(let j = 0; j < positions.length; j++){
    const grupo = Math.floor((j - 1) / 17);
    const color = j === 0 ? colors [0] : colors[grupo % colors.length]; 

  const cellProps = {
    id: j+1,
    color
    
  }
  positions[j]=cellProps;
  console.log(j);
 }
console.log("despues del for", positions);


const tittlecolor = "blue"


const App = () => {
  return (
    <div>
    <Header tittle="parchis" color={tittlecolor}/>

    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      
      {positions.map((cell, i) => {
        return (
          <div
            className="jhon"
            key={cell.id}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: cell.color,
              color: "black",
              fontFamily: "times new roman",
              textAlign: "center",
              borderRadius: "10px",
              margin: "4px",
            }}
          >
            {cell.id}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default App;
