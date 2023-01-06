import React from 'react'

export const ClassMateItem = () => {
  return (
    <div className='item'>
        <div className='user-details'>
            <div className='dp-div'>
                <img src='https://picsum.photos/id/58/300/300' className='dp' alt='dp'/>
            </div>
            <div className='text-details'>
                <b>UserName</b>
                <p style={{textAlign:"start"}}>School</p>
            </div>       
        </div>      
    </div>
  )
}
