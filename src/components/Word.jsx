import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      { selectedWord.split('') // Split selected word into individual letters
          .map((letter, i) =>  { // Map through selectedWord's letters
              return ( 

                <span 
                  className="letter" // Styling to resemble a blank space or revealed letter
                  key={i}>

                    { // If letter is in correctLetters state, show it
                      correctLetters.includes(letter) ? letter : '' 
                    }  

                    {/*  Shows underscores or letters depending on what’s guessed. */}

                </span>

              )
       })}
    </div>
  )
}

export default Word