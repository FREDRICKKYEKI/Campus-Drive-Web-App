import React from 'react'
import ReactDOM from "react-dom"

export const Modal = ({isPressed,children,closeModal}) => {
  return (
    <div>
        { ReactDOM.createPortal(isPressed&&
        <div onClick={()=>closeModal()} className='OverlayM'>
          {children}
        </div>
        ,document.body)}
    </div>
  )
}
