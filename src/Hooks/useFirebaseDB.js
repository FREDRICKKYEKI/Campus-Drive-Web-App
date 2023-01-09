import { useEffect, useReducer } from "react";
import { database } from "../Firebase";

const ACTIONS= {
    SET_FOLDER:"set-folder",
    SET_FILES:"set-files",
    SET_FOLDERS:"set-folders",
  }

  const reducer = (state, {type,payload})=>{
    switch(type){
    
      case ACTIONS.SET_FOLDER:
        return{
          ...state,
          folder:payload.folder
        }

      case ACTIONS.SET_FILES:
        return{
          ...state,
          files:payload.files
        }
        
      case ACTIONS.SET_FOLDERS:
        return{
          ...state,
          folders:payload.folders
        }
      
    }
  }

export const useFirebaseDB =(folderId="",folderName="")=>{
    const [state, dispatch] = useReducer(reducer, {
        folder:"",
        folders:[],
        files:[],
      
      })         
  
    useEffect(()=>{
      if(folderId.length>0){
    database.folders.doc(folderId).get().then((doc)=>{
      dispatch({type:ACTIONS.SET_FOLDER,
                payload:{folder:database.formatDoc(doc)}})
    })  
    }
    
    database.folders
        .where("parentId", "==", `${folderId}`)
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
        dispatch({type:ACTIONS.SET_FOLDERS,
                    payload:{folders:snapshot.docs}
                })
        })   
    },[folderId])


    useEffect(()=>{
    database.files
        .where("parentFolder", "==", `${folderName}`)
        .orderBy("createdAt")
        .onSnapshot(snapshot => {
            dispatch({type:ACTIONS.SET_FILES,
                        payload:{files:snapshot.docs}})
            })
    },[folderName])
      
  
    return state
}
