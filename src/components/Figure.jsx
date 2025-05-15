import React from 'react'

const Figure = ({ wrongLetters }) => {

    // Determine how many mistakes player has made
    const errors = wrongLetters.length

  return (
            /* Render Hangman figure using SVG */
            <svg height="250" width="200" class="figure-container">

                {/* Rod */}
                <line x1="60" y1="20" x2="140" y2="20" />   {/* Top horizontal bar */}
                <line x1="140" y1="20" x2="140" y2="50" />  {/* Short vertical drop */}
                <line x1="60" y1="20" x2="60" y2="230" />   {/* Tall vertical support */}
                <line x1="20" y1="230" x2="100" y2="230" /> {/* Base/floor line */}

                {/* Only the Rod (the top frame and base) are always visible */}

                {/*  Head (Show if Mistake Count is 1 ) */}
                { errors > 0 && <circle cx="140" cy="70" r="20" /> }

                {/* Body (Show if Mistake Count is 2 ) */}
                { errors > 1 && <line x1="140" y1="90" x2="140" y2="150" /> }

                { /* Arms */}
                  {/* Left Arm (Show if Mistake Count is 3)  */}
                  { errors > 2 && <line x1="140" y1="120" x2="120" y2="100" /> }
                  {/* Right Arm (Show if Mistake Count is 4) */}
                  { errors > 3 && <line x1="140" y1="120" x2="160" y2="100" /> }

                {/* Legs */}
                  {/* Left Leg (Show if Mistake Count is 5) */}
                  { errors > 4 && <line x1="140" y1="150" x2="120" y2="180" /> }
                  {/* Right Leg (Show if Mistake Count is 6) */}
                  { errors > 5 && <line x1="140" y1="150" x2="160" y2="180" /> }

                {/* 'figure-part' class is applied to body parts (head, body, arms, legs), these are hidden by default (display: none; in CSS) */}
              
            </svg>
  )
}

export default Figure