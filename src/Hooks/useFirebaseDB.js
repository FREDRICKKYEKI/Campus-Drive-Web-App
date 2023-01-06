import { useEffect, useReducer } from "react";
import { database } from "../Firebase";

const ACTIONS= {
    SELECT_FOLDER:"set-folder",
    SET_FOLDER_ID:"set-folder-id",
    SET_FILES:"set-files",
    SET_FOLDERS:"set-folders",
    SET_MAILS:"",
    SET_CLASSMATES:"",
    // SET_POSTS:"",
    // SET_MARKET_ITEMS:""
  }

  const reducer = (state, {type,payload})=>{
    switch(type){
      case ACTIONS.SELECT_FOLDER:
        return{
          ...state,
          folder:payload.folder
        }
      case ACTIONS.SET_FOLDER_ID:
        return{
          ...state,
          folderId: payload.folderId
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
      case ACTIONS.SET_MAILS:
        return{
          ...state,
          mails: payload.mails
        }
        case ACTIONS.SET_CLASSMATES:
          return{
            ...state,
            classmates: payload.classmates
          }
    }
  }

export const useFirebaseDB =(folderId="",folderName="")=>{
    const [state, dispatch] = useReducer(reducer, {
        folderId: '',
        folders:[],
        files:[],
        mails:[],
        classmates:[],
        // posts:[],
        // marketItems:[]
      })      
      
    
  
    useEffect(()=>{
      if(folderId.length>0){
    database.folders.doc(folderId).get().then((doc)=>{
      dispatch({type:ACTIONS.SELECT_FOLDER,
                payload:{folder:database.formatDoc(doc)}})
    })  
    }
    database.folders
        .where("parentId", "==", `${folderId}`)
        // .orderBy("createdAt")
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
      
    useEffect(()=>{
      database.mails
        .where("folderCode","==",`${folderId}`)
        .onSnapshot(snapshot=>{
          dispatch({type:ACTIONS.SET_MAILS,
                      payload:{mails:snapshot.docs}})})
      
    },[folderId])
    
   
    return state
}
