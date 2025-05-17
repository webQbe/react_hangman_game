import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    
    <div /* When showNotification is true, the .show class is added */
      className={`notification-container ${ showNotification ? 'show' : '' }`}
    >
        <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification