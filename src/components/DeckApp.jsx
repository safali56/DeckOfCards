import React from 'react';
import Card from './card';
import '../styles/deck.css';


function DeckApp() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  //Initialize deck of 52 cards
  const initializeDeck = () => {
    let id = 0;
    const deck = [];
    suits.forEach((suit) => {
      values.forEach((value) => {
        deck.push({ id: id++, suit, value });
      });
    });
    return deck;
  };
  const [deck, setDeck] = useState(initializeDeck());
  const [drwanCards, setDrawnCards] = useState([]);

  //Click handler for deck rectangle(future logic)
  const handleDeckClick = () => {
    console.log('Deck clicked! Cards remaining:', deck.length);
  };
  return (
    <div>
      <div className="deck-rectangle mx-auto my-4"
        onClick={handleDeckClick}>
          {deck.length ===0 && <span className="text-white">No cards remaining</span>} 
      </div>

      
      <div className="deck-rectangle mx-auto my-4"></div>
      <div>
        <button className="btn btn-primary mx-1">Deal 5</button>
        <button className="btn btn-primary mx-1">Deal 7</button>
        <button className="btn btn-secondary mx-1">Reset</button>
        <button className="btn btn-danger mx-1">Toss</button>
        <button className="btn btn-warning mx-1">Wildcard</button>
        <button className="btn btn-info mx-1">Regroup</button>
      </div>
    </div>
  );
}

export default DeckApp;
