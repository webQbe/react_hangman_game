import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">

        <div>

          { /* Show "Wrong" if there are any letter in wrongLetters */
            wrongLetters.length > 0 && <p>Wrong</p> 
          }

          { /* Show wrong letters, separated by commas */
            wrongLetters
              .map((letter, i) => <span key={i}>{ letter }</span>)
              // combine each letter into a single array
              // inserting a comma between each letter
              .reduce((prev, curr) => prev === null 
                                      ? [curr] // Set on first letter
                                      : [prev, ', ' , curr], // Build on subsequent letters
                       null // Init with null
                     )
          }

        </div>
        
    </div>
  )
}

export default WrongLetters