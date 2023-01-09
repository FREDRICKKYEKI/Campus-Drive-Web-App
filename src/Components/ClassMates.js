import React,{useEffect,useState} from 'react'
import  ReactDOM  from 'react-dom'
import { database } from '../Firebase'
import { useFirebasePosts } from '../Hooks/useFirebasePosts'
import { ClassMateItem } from './ClassMateItem'

export const ClassMates = ({isClicked, setIsClicked,folderId}) => {
  const {classmates} = useFirebasePosts(folderId)    
    
  return (
    <>  
        {ReactDOM.createPortal(
            <div className='portal'>
                <i onClick={(prev)=>setIsClicked(!prev)} className ='fa fa-close'/>
                <center  className='mail-header'><i className='fa fa-group envelope'/>ClassMates </center>
                <div className='items'>
                {classmates.map((classmate,index)=><ClassMateItem index={index} mate={classmate}/>)}
                </div>
            </div>
        ,document.body)} 
    </>
  )
}
