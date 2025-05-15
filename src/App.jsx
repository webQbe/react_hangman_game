/* Main Entry Point */
import { useState } from 'react'
import Header from './components/Header' 
import Figure from './components/Figure'
import './App.css'

function App() {

  // Render child components
  return (
   <> {/* Wrap in React fragment */}
      <Header />
      <div className="game-container">
        <Figure />
      </div>
   </>
  )
}

export default App
