import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';



function Login() {
  const [Username, setUsername] = useState("");
  const [pswd,SetPswd]=useState("");
  const navigate= useNavigate()


  const checkuname = (e) => {
    setUsername(e.target.value);
    console.log(Username);
  }

  const checkpswd = (e) => {
    SetPswd(e.target.value);
    console.log(pswd);
  }

  const passdata = async () => {
    try {
      console.log(Username);
      console.log(pswd);
      const response = await axios.post("http://localhost:7000", {
        Username,
        pswd
      });
    //   console.log(response.data);


      if(response.data.token){
        // console.log(response.data.token)
        // After receiving the token from the server in the login process
        localStorage.setItem('authToken', response.data.token);
        navigate('/home')

       }

       

    





       } catch (error) {
      console.error(error);
    }


    
};

useEffect(() => {

    const storedToken = localStorage.getItem('authToken');
    console.log(storedToken)
   if(storedToken){
    
    navigate('/home')
    

   }else{
     
   navigate('/')
   }
  },[ navigate])



  return (
    <div >
        
      <h1 className='heading'>Login Page</h1>
      <input type='text' className='uname' value={Username} onChange={checkuname} placeholder='Username' /><br />
      <input type='password' className='pswd' value={pswd} onChange={checkpswd} placeholder='Password' /><br/>
      <button className='btn' onClick={passdata}>Login</button>
      
    </div>
  )
}

export default Login;

