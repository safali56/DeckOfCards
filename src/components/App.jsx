/**StAuth10244: I Safali BC Senchuri, 000931218, certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else." */
import React from 'react';
import DeckApp from './components/DeckApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/deck.css';

function App() {
  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4 text-light">🎴 Deck of Cards</h1>
      <DeckApp />
    </div>
  );
}

export default App;
