import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const navLinkStyles=({isActive})=>{
        return {
            color:isActive&&" #f1f1f1",
            fontWeight: isActive? 'bold':'normal',
        }
    }
   
    const [isOpen, setIsOpen] = useState(false)
    const openNav = ()=>{
        setIsOpen(true)
        document.getElementById('overlay').style.width="100%"
        document.getElementById('mySidenav').style.width= "250px";
        document.getElementById('itemName').style.animation="appear .1s 1 ease-out"
  }

    const closeNav = () =>{
        setIsOpen(false)
        document.getElementById('overlay').style.width=""
        document.getElementById('mySidenav').style.width= "";
        document.getElementById('itemName').style.animation="disappear .2s 1 ease-out"
    }

    const openSideBar = ()=>{
        setTimeout(()=>isOpen?closeNav():openNav(),150)        
    }
  return (
    <div >
        <div id='overlay'  className='overLay'>
           <div id="mySidenav"  className="sidenav">     
            {!isOpen&&<center><i className='fa fa-graduation-cap logo2 fa-3x'/></center>}
            {isOpen&&<h2 className='item-name cd-header'><div><i className='fa fa-graduation-cap  fa-3x'/></div>Campus Drive</h2>}
            <center onClick={()=>{isOpen&&closeNav()}} className='items'><hr/>
                <NavLink style={navLinkStyles}  to='/'>
                 <i className='fa fa-book fa-md'/>
                {isOpen&&<div id='itemName' className='item-name'>Campus Notes</div>}   
                </NavLink><hr/>

                <NavLink style={navLinkStyles} to='campusmeet'>
                <i className='fa fa-compass fa-md'/>
                {isOpen&&<div id='itemName' className='item-name'>Campus Meet</div>}
                </NavLink><hr/>

                <NavLink style={navLinkStyles} to='campusmarket'>
                <i class="fas fa-store fa-md"></i>
                {isOpen&&<div id='itemName' className='item-name'>Campus Market</div>}
                </NavLink><hr/>

                <NavLink style={navLinkStyles} to='campusprofile'>
                    <i class="fa fa-user fa-md"/>
                    {isOpen&&<div id='itemName' className='item-name'>Campus Profile</div>}
                </NavLink><hr/>                
            </center>
            <a onClick={()=>openSideBar()}>
                {isOpen?<i class="fa fa-angle-left open-nav" style={{fontSize:"36px"}}></i>:<i class="fa fa-angle-right open-nav" style={{fontSize:"36px"}}></i>}
            </a><div className='sideN'></div><div className='sideN2'></div> 
        </div> 
        </div>
       
        <span className='menu-btn' style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>openSideBar()}>&#9776; 
        </span>
        
    </div>
  )
}
