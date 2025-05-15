/* Main Entry Point */
import { useState } from 'react'
import Header from './components/Header' 
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import './App.css'

const words = ['application', 'programming', 'interface', 'wizard']
// Pick a random word from the list 
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  /* Maintain state */
  const [playable, setPlayable] = useState(true)
  // Track letters the player guessed correctly
  const [correctLetters, setCorrectLetters] = useState([])
  // Track letters guessed incorrectly
  const [wrongLetters, setWrongLetters] = useState([])

  // Render child components
  return (
   <> {/* Wrap in React fragment */}
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />

        <Word  // Pass selectedWord and correctLetters as props
          selectedWord={selectedWord} 
          correctLetters={correctLetters} 
        />

      </div>
   </>
  )
}

export default App
