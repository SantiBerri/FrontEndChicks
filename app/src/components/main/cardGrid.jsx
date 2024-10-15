import React from 'react';
import Cards from './../cards/cards';  
import './cardGrid.css';

const CardGrid = () => {
  const items = Array(10).fill(0); 

  return (
    <div>   
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
      
      <div className="card-grid-container">
        {/* Contenedor para alinear el span y el select */}
        <div className="top-bar">
          <span className="showing">Showing 20 - from 125</span>
          <select className="filter-select">
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

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
