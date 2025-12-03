import React from 'react'

export default function PokemonSelector() {
  const [currentIndexPokemon, setCurrentIndexPokemon] = React.useState(1);
  const [pokemonData, setPokemonData] = React.useState(null);
  const [pokemonName, setPokemonName] = React.useState("");

  React.useEffect(() => {
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
  }, [currentIndexPokemon]);

  const handleClick = (action) => {
    if (action === 'rest' && currentIndexPokemon - 1 > 0) {
      setCurrentIndexPokemon((prev) => prev - 1);
    } else if (action === 'add' && currentIndexPokemon + 1 <= 100) {
      setCurrentIndexPokemon((prev) => prev + 1);
    }
  }

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pokemonName.trim() === "") {
      return;
    }

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!res.ok) {
        throw new Error("Pokémon no encontrado");
      }

      const data = await res.json();
      setPokemonData(data)
      setCurrentIndexPokemon(data.id);
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="pokemonInput">Escribe un Pokémon:</label>
        <input
          id="pokemonInput"
          type="text"
          placeholder="pikachu, charizard..."
          value={pokemonName}
          onChange={(e) => handleNameChange(e)}
        />
      </form>
      {
        pokemonData && (
          <div>
            <h3>{pokemonData.name}</h3>
            <img src={pokemonData.sprites.front_default || '/loading.webp'}></img>
          </div>
        )
      }

      <div className="change_pokemon_buttons">
        <button style={{ background: "pink", fontFamily: "cursive", fontWeight: "bold", fontSize: "15px" }} onClick={() => handleClick('rest')}> - </button>
        <button style={{ background: "pink", fontFamily: "cursive", fontWeight: "bold", fontSize: "15px" }} onClick={() => handleClick('add')}> + </button>
      </div>

    </section>
  )
}
