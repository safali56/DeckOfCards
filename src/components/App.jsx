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
