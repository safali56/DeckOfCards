import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container text-center py-4">
      <h1 className="mb-3">Deck of Cards</h1>

      <div className="mb-3">
        <div
          className="mx-auto bg-secondary text-white rounded d-flex justify-content-center align-items-center"
          style={{ width: "120px", height: "160px" }}
        >
          Deck (52)
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary mx-1">Deal 5</button>
        <button className="btn btn-primary mx-1">Deal 7</button>
        <button className="btn btn-secondary mx-1">Reset</button>
        <button className="btn btn-warning mx-1">Toss</button>
        <button className="btn btn-info mx-1">Wildcard</button>
        <button className="btn btn-success mx-1">Regroup</button>
      </div>

      <div className="mt-4">
        <h4>Dealt Cards (0)</h4>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="text-muted">No cards dealt — use Deal 5 / Deal 7</div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Discard Pile (0)</h5>
      </div>
    </div>
    
    
  )
}

export default App
