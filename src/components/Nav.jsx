import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return (
        <nav className="bg-blue-800 p-4 mb-5 flex justify-between">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white">Pokemons</Link>
                </li>
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Buscar Pokémon..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="p-2 rounded"
                />
            </div>
        </nav>
    );
};

export default Nav;
