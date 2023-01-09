import React,{useState,useEffect} from 'react'
import { database } from '../Firebase'

export const MailItem = ({mail,index}) => {
  const userEmail = database.formatDoc(mail).email
  const timestamp = database.formatDoc(mail).timestamp
  const Mail = database.formatDoc(mail).mail
  const [name, setName] = useState("")
  
  useEffect(() => {
    database.classmates.doc(userEmail).get().then((doc)=>{
      setName(database.formatDoc(doc))
    })
  }, [mail])

  return (
    <div style={{background:`${'#'+Math.floor(Math.random()*16777215).toString(16)}`+'70'}} className='item'>      
      <div className='user-details'>
        <div className='dp-div'>
          <img src={name.url} className='dp' alt='dp'/>
        </div>
        <div className='text-details'>
          <b>{name.name}</b>
          <i style={{color:"gray"}}>{timestamp}</i>
        </div>       
      </div>
        <p style={{textAlign:"start", color:"black"}}>{Mail}</p>
    </div>
  )
}
