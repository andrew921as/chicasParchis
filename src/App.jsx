import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Cell from "./components/cell/Cell";
import Five from "./components/five/five";
import Footer from "./components/footer/Footer";

const positions = Array(68).fill(0);
console.log(positions);
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
  console.log(j);
}
console.log("despues del for", positions);


const tittlecolor = "red"
const filecolor = "purple"


const App = () => {

  //Vemos el Hook, que hace un ciclo de vida
  const [contador, setContador] = React.useState(0);
  const [currentIndexPokemon, setcurrentIndexPokemon] = React.useState(1);
  const [pokemonData, setPokemonData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //gett: obtener datos
        //post: enviar datos
        //put: actualizar datos
        //patch: modificar datos parcialmente
        //delete: eliminar datos
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + currentIndexPokemon);
        const data = await response.json();
        console.log(data)
        setPokemonData(data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  },[currentPokemon]);

  const handleClick = () => {
    //aqui puede ir cualquier nombre porque eso esta en el setContador y ese pertenece al contador
    setContador((prevContador) => prevContador + 1);
    console.log(contador);
  }


const App = () => {
  return (
    <div>
      <Header tittle="parchis" color={tittlecolor} />

      <div
        style={{
          display: "flex",
          flexWrap: "no-wrap",
          width: "800px",
        }}>

        { }
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
      </div>

      {contador}

      <div  className="button">
        <button style={{background: "pink", fontFamily: "cursive", fontWeight: "bold", fontSize: "15px"}} onClick={handleClick}> Oprime </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
