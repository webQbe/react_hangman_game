/* Display centered popup window when the game is over */
import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
   
  let finalMessage = ''
  let finalMessageRevealWord = ''
  let playable = true

  /* Set the messages to display */
  if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ){

    finalMessage = 'Congratulations! You won 😀'
    playable = false // stop accepting input

  } else if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {

      finalMessage = 'Unfortunately you lost! 😔'
      finalMessageRevealWord = `...the word was: ${selectedWord}`
      playable = false // stop accepting input

  }

  // Update the game state
  useEffect(() => setPlayable(playable))

  return (
    <div 
      className="popup-container" 
      style={ 
              // Override CSS (display: none) & make .popup-container visible
              finalMessage !== '' ? { display: 'flex' } : {}
            } 
    >
        <div className="popup">

            <h2>{ finalMessage }</h2>
            <h3>{ finalMessageRevealWord }</h3>
            <button>Play Again</button>

        </div>
    </div>
  )
}

export default Popup