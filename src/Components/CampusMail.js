import React, { useEffect,useState } from 'react'
import ReactDOM from "react-dom"
import '../Styles/mail.css'
import { MailItem } from './MailItem'
import { useFirebaseDB } from '../Hooks/useFirebaseDB'
import { database } from '../Firebase'

export const CampusMail = ({isClicked, setIsClicked,folderId}) => {
  const [mails, setMails] = useState([])
  useEffect(()=>{
    database.mails
    .where("folderCode","==",`${folderId}`)
    .orderBy("timestamp")
    .onSnapshot(snapshot=>{
      setMails(snapshot.docs)})
  },[folderId])

  console.log(mails.map(mail=>database.formatDoc(mail).mail))
  return (
    <>
    {ReactDOM.createPortal(
    <div  className='portal'>
        <i onClick={(prev)=>setIsClicked(!prev)} className ='fa fa-close'/>
        <center  className='mail-header'><i className='fa fa-envelope envelope'/>Campus Mail </center>
        {mails>0&&mails.map((mail, index)=>
          <MailItem /> 
        )}              
    </div>
  
    ,document.body)}   
    mnnjnkj 
    </>
  )
}
