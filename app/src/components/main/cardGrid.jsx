import React from 'react';
import Cards from './../cards/cards';  // Asegúrate de que esta es la ruta correcta de tu componente
import './cardGrid.css';

const CardGrid = () => {
  const items = Array(10).fill(0); // Simula 10 tarjetas

  return (
    <div>   
    <div className="card-grid-container">
    <h1 className='text'>Condimentum consectetur</h1>
      <div className="filter-bar">
      <select className="game-select">
        <option value="">Select Game</option>
        <option value="game1">Game 1</option>
        <option value="game2">Game 2</option>
        <option value="game3">Game 3</option>
      </select>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
    </div>
      <span className='showing'>Showing 20 - from 125</span>
      <div className="card-grid">
        {items.map((item, index) => (
          <div key={index}>
            <Cards />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardGrid;