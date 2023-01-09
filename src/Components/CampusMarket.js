import React, { useEffect,useState } from 'react'
import { database } from '../Firebase'
import '../Styles/market.css'
import { Modal } from './Modal'

export const CampusMarket = () => {
  const [isBtnPressed, setIsBtnPressed] = useState(false)
  const [itemDetails,setItemDetails] = useState()
  
  const callHandler=()=>{
  }
useEffect(() => {
  document.body.style.background="linear-gradient(308deg,#D9AFD9 0%, #97D9E1 80%) "
  document.title="Campus Market"

  database.marketItems.onSnapshot(snapshot=>setItemDetails(snapshot.docs))
  console.log(itemDetails)
  return () => {
    document.body.style.background=""
    document.title=""
  }
}, [])
//open modal function
const openModal = (Item,Index)=>{
  setIsBtnPressed(true)
}
//close modal function
const closeModal = ()=>{
  setIsBtnPressed(false)
}


  return (
    <div className='main'>
      <div className='titlebg'>
        <h3 className='title'>Campus Market</h3>
      </div>
      <center>
        <div className='itemscard'>
          {itemDetails&&itemDetails.map((item,index)=>
          <div key={index} className='item'>
            <div className='imgdiv'>
              <img src={`${database.formatDoc(item).url}`} className='itemimage' alt='item'/>
            </div>
            <h4>{database.formatDoc(item).item_name}</h4>
            <p className=''>{database.formatDoc(item).price}</p>
            <center className=''><div onClick={()=>openModal(database.formatDoc(item),index)} className='buybutton'><i className='fa fa-shopping-cart'/></div></center>
            <Modal callHandler={callHandler} item={item} isPressed={isBtnPressed} closeModal={closeModal}/>
          </div>
          ,)
          }
        </div>
        
      </center>
    </div>
  )
}
