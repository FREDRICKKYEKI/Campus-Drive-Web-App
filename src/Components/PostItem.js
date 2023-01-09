import React,{useState,useEffect} from 'react'
import { database } from '../Firebase'

export const PostItem = ({post,index}) => {
    const [userDetails, setUserDetails] = useState()
    const [loading, setLoading] =useState(false)
    useEffect(() => {
     database.classmates.doc(database.formatDoc(post).email).get().then(doc=>{setUserDetails(database.formatDoc(doc))})
    }, [])   
  return (
   <>{userDetails&& 
    <div key={index} className='post'>
        <div className='post-details'>
            <img className='profilePic' src={`${userDetails.url}`} alt='post'/>
            <div className='names'>
                <div style={{fontWeight:"bold"}}>{userDetails.name}</div>
                <div style={{color:"gray"}}>{userDetails.school}</div>
            </div>
        </div>
        {database.formatDoc(post).post_url&&
        <div className='img-div'>
            <img className='img-post' src={`${database.formatDoc(post).post_url}`} alt='post'/>      
        </div>}
        <div className='date'>
            <i>{database.formatDoc(post).timestamp}</i>
        </div>
        <div className='caption'>
           {database.formatDoc(post).caption}
        </div>
  </div> }
   </> 
   
  )
}
