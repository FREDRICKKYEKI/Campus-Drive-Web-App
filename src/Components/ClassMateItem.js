import React from 'react'
import { database } from '../Firebase'

export const ClassMateItem = ({mate, index}) => {
  const person = database.formatDoc(mate).name
  const imgUrl = database.formatDoc(mate).url
  const school = database.formatDoc(mate).school
  console.log()
  return (
    <div key={index} className='item'>
        <div className='user-details'>
            <div className='dp-div'>
                <img src='https://picsum.photos/seed/picsum/200/300' className='dp' alt='dp'/>
            </div>
            <div className='text-details'>
                <b>{person}</b>
                <p style={{textAlign:"start"}}>{school}</p>
            </div>       
        </div>      
    </div>
  )
}
