import React from 'react'
import { database } from '../Firebase'

export const MailItem = ({mail,index}) => {
  // const userName = database.formatDoc(mail).email
  // const timestamp = database.formatDoc(mail).timestamp
  // const Mail = database.formatDoc(mail).mail
  return (
    <div className='item'>
      <div className='user-details'>
        <div className='dp-div'>
        <img src='https://picsum.photos/id/58/300/300' className='dp' alt='dp'/>
        </div>
        <div className='text-details'>
          <b>....</b>
          <i style={{color:"gray"}}>....</i>
        </div>       
      </div>
      <p>mail</p>
        <p style={{textAlign:"start"}}>...</p>
    </div>
  )
}
