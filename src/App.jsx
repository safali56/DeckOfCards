import React from 'react';
import DeckApp from './components/DeckApp';

import './styles/deck.css';

function App() {
  

  return (
    <div className="container text-center py-4">
      <h1 className="mb-3 text-light">Deck of Cards</h1>
   
      <DeckApp />
      
      </div>

   )
}

export default App
