import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Cell from "./components/cell/Cell";
import Five from "./components/five/five";
import Footer from "./components/footer/Footer";

import './App.css';
import PokemonSelector from "./components/pokemonSelector/PokemonSelector";

const positions = Array(68).fill(0);
const colors = ["#FF0505", "#1eabf1ff", "#04fc00ff", "#f2ff00ff"];

for (let j = 0; j < positions.length; j++) {
  const grupo = Math.floor((j - 1) / 17);
  const color = j === 0 ? colors[0] : colors[grupo % colors.length];

  const cellProps = {
    id: j + 1,
    color,
    isCard: (j + 1) % 5 === 0 //el % es un modulo
  }
  positions[j] = cellProps;
}


const tittlecolor = "red"
const filecolor = "purple"


const App = () => {

  return (
    <div>
      <Header tittle="parchis" color={tittlecolor} />

      <main id="parchis">
        {positions.map((cell) => {
          return (
            <Cell key={cell.id} props={cell} >
              {cell.isCard && (
                <Five color={filecolor} />
              )
              }
            </Cell>
          );
        })}
      </main>

      <PokemonSelector/>

      <Footer></Footer>
    </div>
  );
};

export default App;
