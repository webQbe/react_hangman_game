
export const showNotification = (setter) => {

  /* Temporarily set the notification to visible for 2 seconds */
  setter(true)  

  setTimeout(() => {
    /* After 2 seconds (2000 ms), hide it again */
    setter(false) 
  }, 2000)

}

