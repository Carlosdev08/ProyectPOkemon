import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemon, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=60')
        
            .then(response => {
                const pokemonDetailsPromises = response.data.results.map(pokemon => axios.get(pokemon.url));
              
                Promise.all(pokemonDetailsPromises)
                    .then(responses => {
                        setPokemons(responses.map(detail => detail.data));
                        setIsLoading(false);
                    })
                    .catch(error => {
                        setError(error);
                        setIsLoading(false);
                    });
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toString() === searchTerm
    );

    if (isLoading) return <p>Cargando Pokémon...</p>;
    if (error) return <p>Ha ocurrido un error al cargar los Pokémon.</p>;

    return (
        <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 bg-gray-800 p-4'>
            <input 
                type="text" 
                placeholder="Buscar por nombre o ID" 
                className="col-span-full mb-4 w-auto h-10 p-2 rounded border"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {filteredPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}

export default PokemonList;
