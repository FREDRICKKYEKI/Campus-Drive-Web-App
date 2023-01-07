import React,{useEffect, useReducer, useRef,useState} from 'react'
import '../Styles/notes.css'
import { Folder } from './Folder'
import { database } from '../Firebase'
import { File } from './File'
import { Link } from 'react-router-dom'
import { useFirebaseDB } from '../Hooks/useFirebaseDB'
import { CampusMail } from './CampusMail'
import { ClassMates } from './ClassMates'


export const CampusNotes = () => {
    const folderIdRef = useRef()

    const [isFolderOpen, setIsFolderOpen] = useState(false)
    const [fName,setfName] =useState("")
    const[fId,setfId] = useState("")
    const [loading,setLoading] = useState()
    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [isClassMatesOpen, setIsClassMatesOpen] = useState(false)
    const initId =localStorage.getItem('folderCode')


  const openClassFolder = (e)=>{
    e.preventDefault()
    setIsFolderOpen(false)
    setfId(folderIdRef.current.value)
    setfName("")   
    folders?setLoading(true):setLoading(false)
    setTimeout(()=>folders<=0&&setLoading(false),1000)
  } 


  const openNotesFolder =(folderName)=>{
    setIsFolderOpen(true)
    setfName(folderName)
    files?setLoading(true):setLoading(false)
    setTimeout(()=>files<=0&&setLoading(false),1000)
   }  
   const {files,folders,folder}=useFirebaseDB(initId?initId:fId,fName)

   useEffect(() => {
     localStorage.setItem('folderCode',`${fId}`)
   }, [fId])
   
   const clickHandler=(e)=>{
    setIsFolderOpen(false)
    setfName("")

   }

  return (
    <div className='main' style={{paddingTop:"5vh"}}>
        <center>       
            <form onSubmit={(e)=>openClassFolder(e)} className='caRd'>
                <span className='folder-code'>
                    <h5>Folder Code:</h5>
                    <input required ref={folderIdRef} type='text' />              
                    <button onSubmit={()=>openClassFolder()} className='button'>Open Folder</button>                 
                </span>
               
            </form>
            <div className='home-breadcrumb' >
                  <a style={{fontWeight:fName.length<=0&&"bold"}} onClick={(e)=>clickHandler(e)} href='#'>
                    {folder&&folder.id}</a>/<span style={{fontWeight:"bold"}}>{fName}</span>
              </div>

              <div className='files'>
                {!isFolderOpen&&<>{folders.length>0?
              folders.map((folder,index)=>              
                <div as={Link} to={{pathname:`/folder/${database.formatDoc(folder).name}`
                }} onClick={()=>openNotesFolder(database.formatDoc(folder).name)}>
                  <Folder isClicked={isFolderOpen} setClicked={setIsFolderOpen}  openFolder={openNotesFolder} folder={folder} index={index} />  
                </div>                     
              ):<i>{loading?
              <div class="spinner-border text-dark" role="status">
              <span class="sr-only"></span>
            </div>:<>No folders</>}</i>}</>}

            {isFolderOpen&&<>{files.length>0?
            files.map((file,index)=>
            <div><File file={file} index={index}/></div>             
            ):<i>{loading?<>
            <div class="spinner-border text-dark" role="status">
            <span class="sr-only"></span>
          </div></>:<>{<>No Folders</>}</>}</i>}</>}
            </div>
              
          
          
        </center>
        <div className='fabs'>
          <div onClick={()=>setIsMessageOpen(!isMessageOpen)}  className='fab1'>
            <i className='fa fa-envelope'/>
          </div>
          {isMessageOpen&&<CampusMail folderId={fId} setIsClicked={setIsMessageOpen} isClicked={isMessageOpen}/>}

          <div onClick={()=>setIsClassMatesOpen(!isClassMatesOpen)}   className='fab1'>
            <i className='fa fa-group'/>          
          </div>
          {isClassMatesOpen&&<ClassMates folderId={fId} setIsClicked={setIsClassMatesOpen} isClicked={isClassMatesOpen}/>}
        </div>
         
    </div>
  )
}
