import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';



import './style.css'

function Nav() {


   const navigate= useNavigate();

   var logout1=() =>{
    
    localStorage.removeItem('authToken');

    

    navigate('/')
   }


  return (
    <div className='body'>

        <Link to='/home'>
        
        <span className='home'>Home</span></Link>
        <span onClick={logout1} className='logout'>Logout</span>




    </div>
  )
}

export default Nav