import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { database } from '../Firebase'
import folderIcon from '../media/folder_icon.png'

export const Folder = ({folder,index,openFolder,isClicked}) => {


  return (
        <div as={Link} to={{
          pathname:`folder/${database.formatDoc(folder).id}`,
          state:{folder:folder}
          }}
           key={index} className='folder-item'>
            <h5>{index+1}. </h5>
            <img src={folderIcon} alt='folder'/>
            <h5>{database.formatDoc(folder).name}</h5>
        </div>
  )
}
