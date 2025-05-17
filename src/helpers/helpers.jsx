
export const showNotification = (setter) => {

  /* Temporarily set the notification to visible for 2 seconds */
  setter(true)  

  setTimeout(() => {
    /* After 2 seconds (2000 ms), hide it again */
    setter(false) 
  }, 2000)

}

export const checkWin = (correct, wrong, word) => {

  // If all letters in the word are guessed, return 'win'
  let status = 'win'

  // Loop through each letter 
  word.split('').forEach(letter => {
    
    // If at least one letter is missing, reset status to ''
    if(!correct.includes(letter)) status = ''

  })

  // Check if 6 wrong letters were guessed
  if (wrong.length === 6) status = 'lose' 

  return status

}