import React, { useEffect,useState } from 'react'
import '../Styles/market.css'
import { Modal } from './Modal'

export const CampusMarket = () => {
  const [isBtnPressed, setIsBtnPressed] = useState(false)
  const [itemDetails,setItemDetails] = useState({name:"",phoneNo:"",index:1,price:""})
  
  const callHandler=()=>{
    alert("Copy phone number")
  }
useEffect(() => {
  document.body.style.background="linear-gradient(308deg,#D9AFD9 0%, #97D9E1 80%) "
  document.title="Campus Market"
  return () => {
    document.body.style.background=""
    document.title=""
  }
}, [])
//open modal function
const openModal = (Item,Index)=>{
  setIsBtnPressed(true)
  setItemDetails({...itemDetails, name:`${Item}`,index:Index})
}
//close modal function
const closeModal = ()=>{
  setIsBtnPressed(false)
}

const items =["Timberland Boots","Laptop","Isuzu D-Max","PS5","iPhone5","Smart Watch"]
const itemImgs=[""]
const itemPrices =[]
  return (
    <div className='main'>
      <div className='titlebg'>
        <h3 className='title'>Campus Market</h3>
      </div>
      <center>
        <div className='itemscard'>
          {items.map((item,index)=>
          <div key={index} className='item'>
            <div className='imgdiv'>
              <img src={`https://picsum.photos/id/${index}/300/300`} className='itemimage' alt='item'/>
            </div>
            <h4>{item}</h4>
            <p className=''>$100</p>
            <center className=''><div onClick={()=>openModal(item,index)} className='buybutton'><i className='fa fa-shopping-cart'/></div></center>
          </div>
          ,)}
        </div>
        
      </center>
     <Modal isPressed={isBtnPressed} closeModal={closeModal}>
        <div className='Modal'>
          <img src={`https://picsum.photos/id/${itemDetails.index}/300/300`} className='modal-img'/>
          <p>Name: {itemDetails.name} </p>
          <p>Price: {itemDetails.price}</p>
          <p>Number:{itemDetails.phoneNo}</p>
          <p>Description:</p>
          <p>Date:</p>
          <center><div onClick={()=>callHandler()} className='callbtn'><i className='fa fa-phone'/>Call</div></center>
        </div>
     </Modal>
    </div>
  )
}
