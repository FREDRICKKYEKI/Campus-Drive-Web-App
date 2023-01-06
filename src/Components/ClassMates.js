import React from 'react'
import  ReactDOM  from 'react-dom'
import { ClassMateItem } from './ClassMateItem'

export const ClassMates = ({isClicked, setIsClicked}) => {
  return (
    <>  
        {ReactDOM.createPortal(
            <div className='portal'>
                <i onClick={(prev)=>setIsClicked(!prev)} className ='fa fa-close'/>
                <center  className='mail-header'><i className='fa fa-group envelope'/>ClassMates </center>
                <ClassMateItem/>
            </div>
        ,document.body)} 
    </>
  )
}
