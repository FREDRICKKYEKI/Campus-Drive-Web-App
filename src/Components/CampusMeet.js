import React,{useState} from 'react'
import '../Styles/meet.css'

export const CampusMeet = () => {
  const [documents, setDocuments] = useState([]);
  // const postCollectionRef = collection(database, 'images');
  return (
    <div className='main'> 
      <center>      
        <h4>Campus Meet🤝</h4>
        <div className='post'>
          <div className='post-details'>
            <img className='profilePic' src='https://imageio.forbes.com/specials-images/imageserve/5ceec355142c500008f42068/Rihanna-Diamond-Ball-Forbes-Women/0x0.jpg?format=jpg&crop=1950,1950,x32,y257,safe&height=1950&width=1950' alt='post'/>
            <div className='names'>
              <div style={{fontWeight:"bold"}}>UserName</div>
              <div style={{color:"gray"}}>school</div>
            </div>
          </div>
          
          <img className='img-post' src='https://phantom-marca.unidadeditorial.es/75ea42275707a2213aa0c3426dbdb76c/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/25/16641347052668.jpg' alt='post'/>
          <div className='date'>
              <i>5/10/2022 20:31</i>
          </div>
          <div className='caption'>
            Looking good, feeling better...
          </div>
        </div>  
      </center>
    </div>
  )
}
 