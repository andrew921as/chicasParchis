import React from "react";

const positions = Array(68).fill(0);
console.log(positions);
//  for(let j = 0; j <= positions.length; j++){
//   positions[j]=j+1;
//   console.log(j);
//  }
console.log("despues del for", positions);

//  const repeticiones = 2;
//   const repetir=[]
//   const colores = ["#FF0505", "#1eabf1ff", "#04fc00ff",  "#f2ff00ff"];
//   console.log("1, " , repetir)
//   for(let i = 1; i <= repeticiones; i++)
//   {
//     const grupo = Math.floor((i - 1) / 17);
//     const color = colores[grupo % colores.length];

//     repetir.push(
//       <div className='jhon'
//         key={i}
//         style={
//           {
//             width: "100px",
//             height: "100px",
//             backgroundColor: color,
//             color: "black",
//             fontFamily: "times new roman",
//             textAlign: "center",
//             borderRadius: "10px",
//             margin:"4px",
//           }
//         } >
//         {i}

//       </div>
//     );
//   }
const App = () => {
  // console.log("2, " , repetir)

  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      {positions.map((inicio, i) => {
        return (
          <div
            className="jhon"
            key={i}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "yellow",
              color: "black",
              fontFamily: "times new roman",
              textAlign: "center",
              borderRadius: "10px",
              margin: "4px",
            }}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default App;
