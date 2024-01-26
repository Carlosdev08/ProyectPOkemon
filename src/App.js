import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <Router>
       <Routes>
        path "/" <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </Router>
  );
}

export default App;