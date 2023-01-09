import React, { useEffect,useState } from 'react'
import ReactDOM from "react-dom"
import '../Styles/mail.css'
import { MailItem } from './MailItem'
import { database } from '../Firebase'
import { useFirebasePosts } from '../Hooks/useFirebasePosts'

export const CampusMail = ({isClicked, setIsClicked,folderId}) => {
  const {mails} = useFirebasePosts(folderId)

  return (
    <>
    {ReactDOM.createPortal(
    <div  className='portal'>
        <i onClick={(prev)=>setIsClicked(!prev)} className ='fa fa-close'/>
        <center  className='mail-header'><i className='fa fa-envelope envelope'/>Campus Mail </center>
        {mails.map((mail, index)=>
          <MailItem mail={mail} index={index} /> 
        )}              
    </div>
  
    ,document.body)}   
   
    </>
  )
}
