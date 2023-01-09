import React,{useState} from 'react'
import { database } from '../Firebase'
import { useFirebasePosts } from '../Hooks/useFirebasePosts'
import '../Styles/meet.css'
import { PostItem } from './PostItem'

export const CampusMeet = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  database.posts
  .onSnapshot(snapshot=>{
      setPosts(snapshot.docs)
      setLoading(false)                    
  })
  return (
    <div className='main'> 
      <center>      
        <h4>Campus Meet🤝</h4>
        {posts.map((post,index)=>loading?
        <div class="spinner-border text-dark" role="status">
            <span class="sr-only"></span>
          </div>:
          <PostItem post={post} index={index}/>)}
      </center>
    </div>
  )
}
 