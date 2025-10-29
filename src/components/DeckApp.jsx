import React from 'react';



function DeckApp() {
  return (
    <div>
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
