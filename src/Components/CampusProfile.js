import React from 'react'
import '../Styles/profile.css'
import { useRef,useState } from 'react'
import { Modal } from './Modal'

export const CampusProfile = () => {
  const [isPostOpen, setPostOpen] = useState(true)
  const [postState, setPostState] = useState({clicked:false,index:1})
  const posts =['1','2','3','4','5','6']
  const marketitems =["Timberland Boots","Laptop","Isuzu D-Max","PS5","iPhone5","Smart Watch"]

  const campusPosts = useRef()
  const campusMarketPosts = useRef()

  const openPostTab = ()=>{
    setPostOpen(true)
  } 
  const openMarketPostTab= ()=>{
    setPostOpen(false)
  }

  const openPost=(Index)=>{
    setPostState({clicked:true,index:Index})
  }
  const closeModal=()=>{
    setPostState({...postState, clicked:false})
  }
  return (
    <div className='main'>
      <center className='profile'>
        <img className='prof-img' src={`https://picsum.photos/id/28/300/300`}/>
        <div className='details'>
          <h4>Name:</h4>
          <p>Email:</p>
          <p>School:</p>
          <p>Course:</p>
        </div>
      </center>
      {/* tab */}
      <hr/>
      <div className='taB' >
        <div onClick={()=>openPostTab()} className='postTab'><h6>Posts</h6></div>
        <div onClick={()=>openMarketPostTab()} className='marketTab'><h6>Market Items</h6></div>
      </div>
      
      <div className='postsBg'>
        {isPostOpen?<>
          {posts.map((post,index)=>
          <div ref={campusPosts} onClick={()=>openPost(index)} className='posts' key={index}>
              <img className='postImg' src={`https://picsum.photos/id/${index+35}/300/300`}/>
          </div>
          )}</>
:
         <>{marketitems.map((item,index)=>
          <div ref={campusMarketPosts} className='marketposts' key={index}>
            <img className='marketpostImg' src={`https://picsum.photos/id/${index+50}/300/300`}/>
            <div className='text-overlay'>
              <div className='marketItemName'>{item}</div>
            </div>
          </div>
          )}</>}
      </div>
      <Modal isPressed={postState.clicked} closeModal={closeModal}>
        <img src={`https://picsum.photos/id/${postState.index+35}/300/300`}/>
      </Modal>
      <style>
        {`
        .postTab:after{
          content: "";
          position : absolute;
          width : 100%;
          height :  ${isPostOpen?"1px;":"0px;"}
          background-color: rgb(0, 0, 0);
          top: -9px; 
          left: 0;
          border-radius: 5px 5px 0 0;
      }
      .marketTab:after{
          content: "";
          position : absolute;
          width : 100%;
          height :   ${isPostOpen?"0px;":"1px;"}
          background-color: rgb(0, 0, 0);
          top: -9px; 
          left: 0;
          border-radius: 5px 5px 0 0;
      }
        `}
      </style>
    </div>
  )
}
