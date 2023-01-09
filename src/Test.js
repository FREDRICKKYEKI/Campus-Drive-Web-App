import React from 'react'
import { database } from './Firebase'
import { useFirebasePosts } from './Hooks/useFirebasePosts'

export const Test = () => {
    const folderId = "bqKmXYnasOSvF99vy6NP"
    const {market_items,posts,classmates,mails}=useFirebasePosts(folderId)
    console.log(market_items)
  return (
    <ul>
        I am testing my useHook
        {market_items.map((item,index)=><li key={index}>
            {database.formatDoc(item).email}
        </li>)}
    </ul>
  )
}
