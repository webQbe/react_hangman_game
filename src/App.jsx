/* Main Entry Point */
import { useEffect, useState } from 'react'
import Header from './components/Header' 
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import './App.css'

const words = ['application', 'programming', 'interface', 'wizard']
// Pick a random word from the list 
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {

  /* Maintain states */
  const [playable, setPlayable] = useState(true)
  // Track letters the player guessed correctly
  const [correctLetters, setCorrectLetters] = useState([])
  // Track letters guessed incorrectly
  const [wrongLetters, setWrongLetters] = useState([])

  useEffect(() => { // Run everytime the states change

    const handleKeydown = event => {
      const { key, keyCode } = event

        // Check if the game is still playable & the key is a letter
        if (playable && keyCode >= 65 && keyCode <= 90) {

          const letter = key.toLowerCase()

          // Check if the letter is in the word
          if (selectedWord.includes(letter)){

            // Add letter to correctLetters (if not already present)
            if (!correctLetters.includes(letter)){

              setCorrectLetters(currentLetters => [...currentLetters, letter])

            } else {
              /* Show notification: already guessed */
            }
          } else {

             // Add letter to wrongLetters (if not already present)
             if (!wrongLetters.includes(letter)) { 

                setWrongLetters(wrongLetters => [...wrongLetters, letter])

             } else {
                /* Show notification: already guessed */
             }
          }
        }
    }

    // Listen for keydown events
    window.addEventListener('keydown', handleKeydown)

    // Cleanup Function to prevent duplicate handlers 
    return () => window.removeEventListener('keydown', handleKeydown)

  }, [correctLetters, wrongLetters, playable]) 

  // Render child components
  return (
   <> {/* Wrap in React fragment */}
      <Header />
      <div className="game-container">
        
        <Figure />

        <WrongLetters 
          // Pass wrongLetters as a prop
          wrongLetters={wrongLetters} 
        />

        <Word  
          // Pass selectedWord and correctLetters as props
          selectedWord={selectedWord} 
          correctLetters={correctLetters} 
        />

      </div>
   </>
  )
}

export default App
