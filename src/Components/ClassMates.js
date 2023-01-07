import React,{useEffect,useState} from 'react'
import  ReactDOM  from 'react-dom'
import { database } from '../Firebase'
import { ClassMateItem } from './ClassMateItem'

export const ClassMates = ({isClicked, setIsClicked,folderId}) => {
  const [classMates, setClassMates] = useState([])
  useEffect(()=>{
    
    database.mails
    .where("folderCode","==",`${folderId}`)
    .orderBy("name")
    .onSnapshot(snapshot=>{
      setClassMates(snapshot.docs)})
  },[folderId])
console.log(classMates.map(classmate=>classmate))

  return (
    <>  
        {ReactDOM.createPortal(
            <div className='portal'>
                <i onClick={(prev)=>setIsClicked(!prev)} className ='fa fa-close'/>
                <center  className='mail-header'><i className='fa fa-group envelope'/>ClassMates </center>
                {classMates.map((classmate,index)=><ClassMateItem index={index} mate={classmate}/>)}
            </div>
        ,document.body)} 
    </>
  )
}
