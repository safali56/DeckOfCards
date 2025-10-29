import React from 'react';
import '../styles/deck.css';

function Card({ suit, value }) {
//Determine the card color based on suit
     const isRed = suit === '♥' || suit === '♦';
     const cardColor = isRed ? 'text-danger' : 'text-dark';

  return (
    <div className="playing-card text-center">
      <div className="card-value">{value}</div>
      <div className="card-suit">{suit}</div>
    </div>
  );
}

export default Card;
