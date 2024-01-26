// src/components/PokemonCard.js
import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  if (!pokemon || !pokemon.sprites) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow bg-slate-400 cursor-pointer">
      <div className="relative group bg-white border rounded-full w-40 h-40 mx-auto mb-4">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 rounded-t-full"></div>
        <div className="absolute inset-x-0 top-1/2 transform  font-outfit font-semibold -translate-y-1/2 h-2 bg-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full border-2 border-white"></div>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-48 h-48 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{pokemon.name}</h3>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"
      >
        Ver detalles
      </Link>
    </div>
  );
};

export default PokemonCard;