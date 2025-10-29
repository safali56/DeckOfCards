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

  // Pick a card from drawnCards
  const handleCardClick = (cardID) => {
    if (pickedCardId === cardID) {
      setPickedCardId(null); //Deselect if already picked
    } else {
      setPickedCardId(cardID);
    } 
  };

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
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {drawnCards.map((card) => (
          <Card key={card.id} suit={card.suit} value={card.value} />
        ))}           
          </div>
    </div>
  );
}


export default DeckApp;
