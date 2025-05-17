/* Main Entry Point */
import { useEffect, useState } from 'react'
import Header from './components/Header' 
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'
import { showNotification as show } from './helpers/helpers'
import './App.css'

const words = ['application', 'programming', 'interface', 'wizard']

function App() {

  /* Maintain states */
  const [playable, setPlayable] = useState(true)
  // Track letters the player guessed correctly
  const [correctLetters, setCorrectLetters] = useState([])
  // Track letters guessed incorrectly
  const [wrongLetters, setWrongLetters] = useState([])
  // Track whether notification is displayed
  const [showNotification, setShowNotification] = useState(false)
  // Select & Store word by default
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)])

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

              /* Show notification: already entered */
              show(setShowNotification) 

              /* Call helper function showNotification() (aliased as show) and passing in the setShowNotification() setter function. 
              This toggles the state to briefly show the notification, and then hide it again after 2 seconds.
              */
            }
          } else {

             // Add letter to wrongLetters (if not already present)
             if (!wrongLetters.includes(letter)) { 

                setWrongLetters(wrongLetters => [...wrongLetters, letter])

             } else {
                /* Show notification: already entered */
                show(setShowNotification)  
             }
          }
        }
    }

    // Listen for keydown events
    window.addEventListener('keydown', handleKeydown)

    // Cleanup Function to prevent duplicate handlers 
    return () => window.removeEventListener('keydown', handleKeydown)

  }, [correctLetters, wrongLetters, playable]) 

  const playAgain = () => {

    setPlayable(true)     // Allow the game to accept new input
    setCorrectLetters([]) // Clear correct guesses
    setWrongLetters([])   // Clear wrong guesses

    // Pick a new word & update state
    setSelectedWord(words[Math.floor(Math.random() * words.length)])
  }

  // Render child components
  return (
   <> {/* Wrap in React fragment */}
      <Header />
      <div className="game-container">

        <Figure 
           // Pass wrongLetters as a prop
          wrongLetters={wrongLetters} 
        />

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

      <Popup 
        correctLetters={correctLetters} 
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />

      <Notification showNotification={showNotification} />
   </>
  )
}

export default App
