import { useState, useEffect } from "react";
import { Wrapper, Ul, Ol } from "../styles/Home";
import axios from "axios";
import { urlPrincipal } from "../settings";
export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fechPokemons = async () => {
      try {
        const response = await axios.get(urlPrincipal);

        const pokemons = response.data.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
          image: null,
          types: [],
        }));

        const pokemonsDetails = await Promise.all(
          pokemons.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
              ...pokemon,
              image: details.data.sprites.front_default,
              types: details.data.types.map((type) => type.type.name),
            };
          })
        );
        setList(pokemonsDetails);
        setFilterList(pokemonsDetails);
      } catch (error) {
        console.log("Erro ao buscar os pokémons: " + error);
      }
    };

    fechPokemons();
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

  const fetchPokemonAbilities = async (pokemonUrl) => {
    try {
      const response = await axios.get(pokemonUrl);
      const abilities = response.data.abilities.map((ability) => ability.ability.name);
      setSelectedPokemon(abilities);
    } catch (error) {
      console.log("Erro ao pegar as habilidades dos pokemons:" + error);
    }
  };

  const toggleAbilitie = () => {
    setToggle((prevAbilitie) => !prevAbilitie);
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
              <img src={pokemons.image} alt={pokemons.name} />
              <h4>{pokemons.name}</h4>
              <p>{pokemons.types.join(", ")}</p>
              <button
                onClick={() => {
                  fetchPokemonAbilities(pokemons.url);
                  toggleAbilitie();
                }}
              >
                Habilidade
              </button>
            </li>
          ))}
        </Ul>
      )}
      {toggle && (
        <Ol>
          <h2>Habilidades</h2>
          {selectedPokemon.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
          <button
            onClick={() => {
              toggleAbilitie();
            }}
          >
            Fechar
          </button>
        </Ol>
      )}
    </Wrapper>
  );
}
