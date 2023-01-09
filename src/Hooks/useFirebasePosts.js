import { useEffect, useReducer } from "react"
import { database } from "../Firebase"

const ACTIONS ={
    SET_MAILS:"set-mails",
    SET_CLASSMATES:"set-classmates",
}

const reducer = (state,{type,payload})=>{
    switch(type){
        case ACTIONS.SET_MAILS:
            return{
                ...state,
                mails:payload.mails
            }
        case ACTIONS.SET_CLASSMATES:
            return{
                ...state,
                classmates:payload.classmates
            }
    }
}

export const useFirebasePosts = (folderId='')=>{
    
    const [state, dispatch] = useReducer(reducer,
        {mails:[],
        classmates:[]})
    
    useEffect(()=>{
        database.mails
            .where("folderCode","==",folderId)
            .onSnapshot(snapshot=>{
                dispatch({
                    type:ACTIONS.SET_MAILS,
                    payload:{mails:snapshot.docs}
                })
            })
        database.classmates
            .where("folderCode","==",folderId)
            .onSnapshot(snapshot=>{
                dispatch({
                    type:ACTIONS.SET_CLASSMATES,
                    payload:{classmates:snapshot.docs}
                })               
            })
    },[folderId])    

    return state
}