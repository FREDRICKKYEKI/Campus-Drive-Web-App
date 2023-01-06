import React,{useEffect} from 'react'
import { database } from '../Firebase'
import docIcon from '../media/doc_icon.png'

export const File = ({file,index}) => {

        
    
  return (
    <div style={{textAlign:"start"}} key={index} className='folder-item'>
        <h5>{index+1}. </h5>
        <img src={docIcon} alt='folder'/>
        <a href={database.formatDoc(file).url}><h5>{database.formatDoc(file).name}</h5></a>
    </div>
  )
}
