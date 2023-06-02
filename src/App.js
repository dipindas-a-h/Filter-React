// import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import Login from './components/Login';
// import Cookies from 'js-cookie';
// import Nav from './components/Nav';
import {   Route, Routes } from 'react-router-dom';

function App() {
  // const authToken = Cookies.get('authToken');
  // console.log(authToken)

  return (
    
    <div className="App">
     
      <Routes>


      <Route path="/" element={<Login/>} />
     <Route path="/home" element={<Index/>} />
    
     </Routes>
    </div>
  );
}

export default App;
