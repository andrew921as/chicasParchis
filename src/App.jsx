import React from "react";
import Header from "./components/header/Header";
import Cell from "./components/cell/Cell";
import Card from "./components/card/Card";


const positions = Array(68).fill(0);
console.log(positions);
const colors = ["#FF0505", "#1eabf1ff", "#04fc00ff",  "#f2ff00ff"];

 for(let j = 0; j < positions.length; j++){
    const grupo = Math.floor((j - 1) / 17);
    const color = j === 0 ? colors [0] : colors[grupo % colors.length]; 

  const cellProps = {
    id: j+1,
    color, 
    iscard: (j + 1) % 5 === 0
  };
  positions[j]=cellProps;
  console.log(j);
 }
console.log("despues del for", positions);


const tittlecolor = "red"


const App = () => {
  return (
    <div>
    <Header tittle="parchis" color={tittlecolor}/>

<div 
        style={{ 
          display: "flex", 
          flexWrap: "no-wrap",
          width: "800px",  
        }}>
        
        {}
        {positions.map((cell) => {
          console.log(cell.iscard)
          return (
            <Cell key={cell.id} props={cell} >
              { cell.iscard &&(
                  <Card />
              )
            }

            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default App;
