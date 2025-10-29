/**StAuth10244: I Safali BC Senchuri, 000931218, certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else." */
import React from 'react';
import Card from './card';
import '../styles/deck.css';
import { useState } from 'react';


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
  const [drawnCards, setDrawnCards] = useState([]);
  const [pickedCardId, setPickedCardId] = useState(null);
  const[wildcardId, setWildcardId] = useState(1000); //Unique ID for wildcards

  //Pick a random card from the deck
const pickRandomCard = (currentDeck) => {
    const randomIndex = Math.floor(Math.random() * currentDeck.length);
    const selectedCard = currentDeck[randomIndex];
    const newDeck = [...currentDeck];
    newDeck.splice(randomIndex, 1); //Remove selected card from deck
    return { selectedCard, newDeck }

    };

  //Click handler for deck rectangle

  const handleDeckClick = () => {
    if(deck.length === 0) return;
    const { selectedCard, newDeck } = pickRandomCard(deck);
    setDeck(newDeck);
    setDrawnCards([...drawnCards, selectedCard]);
  };

  //Reset Button Handler
  const handleReset = () => {
    setDeck([...deck, ...drawnCards]);
    setDrawnCards([]);
  };

  // Pick a card from drawnCards (handled by the swap-capable handler defined below)
  // Note: the full click/swapping behavior is implemented later in this file.

  //Toss picked card
  const handleToss = () => {
    if(pickedCardId === null) return;
    setDrawnCards(drawnCards.filter(card => card.id !== pickedCardId));
    setPickedCardId(null);
  };
  //Regroup drawn cards back into deck
  const handleRegroup = () => {
    const shuffled = [...drawnCards];
    for(let i = shuffled.length -1; i>0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDrawnCards(shuffled);
    setPickedCardId(null);
  };

  //Wildcard button handler
  const handleWildcard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const newCard = { id: wildcardId, suit: randomSuit, value: randomValue };
    setWildcardId(prev => prev + 1);
    setDrawnCards([...drawnCards, newCard]);
    setPickedCardId(null);
};
// === Deal n cards handler ===
  const handleDeal = (n) => {
    let currentDeck = [...deck, ...drawnCards]; // return all drawn cards to deck
    const newDrawn = [];

    for (let i = 0; i < n && currentDeck.length > 0; i++) {
      const { selectedCard, newDeck } = pickRandomCard(currentDeck);
      currentDeck = newDeck;
      newDrawn.push(selectedCard);
    }

    setDeck(currentDeck);
    setDrawnCards(newDrawn);
    setPickedCardId(null);
  };

  // === Updated: handle card click for swapping ===
  const handleCardClick = (cardId) => {
    if (pickedCardId === null) {
      setPickedCardId(cardId); // Pick card
    } else if (pickedCardId === cardId) {
      setPickedCardId(null); // Unpick same card
    } else {
      // Swap positions of pickedCardId and cardId
      const index1 = drawnCards.findIndex(card => card.id === pickedCardId);
      const index2 = drawnCards.findIndex(card => card.id === cardId);

      const newDrawn = [...drawnCards];
      [newDrawn[index1], newDrawn[index2]] = [newDrawn[index2], newDrawn[index1]];

      setDrawnCards(newDrawn);
      setPickedCardId(null); // Clear picked card after swap
    }
  };




  return (
    <div>
      <div className="deck-rectangle mx-auto my-4"
        onClick={handleDeckClick}>
          {deck.length ===0 && <span className="text-white">No cards remaining</span>} 
      </div>
      
      <div>
        <div>
  <button className="btn btn-primary mx-1" onClick={() => handleDeal(5)}>Deal 5</button>
  <button className="btn btn-primary mx-1" onClick={() => handleDeal(7)}>Deal 7</button>
  <button className="btn btn-secondary mx-1" onClick={handleReset}>Reset</button>
  <button className="btn btn-danger mx-1" onClick={handleToss}>Toss</button>
  <button className="btn btn-warning mx-1" onClick={handleWildcard}>Wildcard</button>
  <button className="btn btn-info mx-1" onClick={handleRegroup}>Regroup</button>
</div>

      </div>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {drawnCards.map((card) => (
          <div
      key={card.id}
      onClick={() => handleCardClick(card.id)}
      className={pickedCardId === card.id ? 'picked-card' : ''}
    >
      <Card suit={card.suit} value={card.value} />
    </div>

          
        ))}           
          </div>
    </div>
  );
}


export default DeckApp;
