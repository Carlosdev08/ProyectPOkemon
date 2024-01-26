import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const generateColor = (id) => {
  const hue = id * 147.508; // //usar la imaginacion para cambiar el background
  return `hsl(${hue}, 50%, 75%)`;
};


const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemon(response.data);
    });
  }, [id]);

  if (!pokemon) {
    return <div className="text-2xl col-span-6 bg-slate-700 text-white p-4">Cargando datos... ⏳ ⌛</div>;
  }

  return (
    <div style={{ backgroundColor: generateColor(pokemon.id) }} className="max-w-xs mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-slate-400">
    <div className="max-w-xs mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-slate-700 -400">
      <div className="flex justify-between items-center">
        <Link to="/">
          <button className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Volver
          </button>
        </Link>
        <h3 className="text-2xl font-bold text-center capitalize">{pokemon.name}</h3>
      </div>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        className="mx-auto p-4"
      />
      <div className="bg-white p-4 rounded-b-lg">
        <div className="mb-4">
          <h4 className="font-bold">Abilities</h4>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="text-sm">{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Moves</h4>
          <ul className="overflow-y-scroll h-24">
            {pokemon.moves.map((move, index) => (
              <li key={index} className="text-sm">{move.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PokemonDetails;
