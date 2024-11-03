import { useState, useEffect } from "react";
import { Wrapper, Ul } from "../styles/Home";
import axios from "axios";
import { urlPrincipal } from "../settings";
export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    axios
      .get(urlPrincipal)
      .then((response) => {
        const pokemons = response.data.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
          image: null,
          types: [],
        }));
        setList(pokemons);
        setFilterList(pokemons);

        pokemons.forEach((pokemon, index) => {
          axios.get(pokemon.url).then((response) => {
            const updatedPokemon = {
              ...pokemon,
              image: response.data.sprites.front_default,
              types: response.data.types.map((type) => type.type.name),
            };

            setList((prevList) => {
              const newList = [...prevList];
              newList[index] = updatedPokemon;
              return newList;
            });

            setFilterList((prevList) => {
              const newList = [...prevList];
              newList[index] = updatedPokemon;
              return newList;
            });
          });
        });
      })
      .catch((error) => {
        console.log("Erro ao achar os pokemons: " + error);
      });
  }, []);

  const handleChange = (event) => {
    let pokeName = event.target.value;

    setName(pokeName);

    const pokemonFiltrado = list.filter(
      (poke) =>
        poke.name.toLowerCase().includes(pokeName.toLowerCase()) ||
        poke.types.some((type) =>
          type.toLowerCase().includes(pokeName.toLowerCase())
        )
    );

    setFilterList(pokemonFiltrado);
  };

  return (
    <Wrapper>
      <h2>Lista de Pokemons</h2>
      <h4>Total de pokémons: {filterList.length}</h4>
      <input
        type="text"
        name="pokemon"
        value={name}
        placeholder="Qual pokemon você procura ?"
        onChange={handleChange}
      />
      {filterList.length === 0 ? (
        <p>Nenhum pokémon encontrado.</p>
      ) : (
        <Ul>
          {filterList.map((pokemons, index) => (
            <li key={index}>
              <img src={pokemons.image} />
              <h4>{pokemons.name}</h4>
              <p>{pokemons.types.join(", ")}</p>
              <button>Habilidade</button>
            </li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
}
