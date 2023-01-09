import React from 'react'
import ReactDOM from "react-dom"
import { database } from '../Firebase'

export const Modal = ({isPressed,closeModal,callHandler,item}) => {
  return (
    <div>
        { ReactDOM.createPortal(isPressed&&
        <div onClick={()=>closeModal()} className='OverlayM'>
          <div className='Modal'>
            <img src={`${database.formatDoc(item).url}`} className='modal-img'/>
            <p>Name:  {database.formatDoc(item).item_name}</p>
            <p>Price: {database.formatDoc(item).price}</p>
            <p>Number:{database.formatDoc(item).phonenumber}</p>
            <p>Description: {database.formatDoc(item).desc}</p>
            <p>Date: {database.formatDoc(item).timestamp}</p>
            <center><div onClick={()=>callHandler()} className='callbtn'><i className='fa fa-phone'/>Call</div></center>
          </div>
        </div>
        ,document.body)}
    </div>
  )
}
