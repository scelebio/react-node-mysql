import React, {useState} from 'react';
import Axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Profile from "./pages/Profile";


function App2() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [LoginStatus, setLoginStatus] = useState('')
  
  

  const register = () =>{
    Axios.post('http://localhost:3001/register', {username: usernameReg, password: passwordReg,
  }).then((response) => {
    console.log(response);
  });
  };


  const login = () => {
    Axios.post('http://localhost:3001/login', 
    {username: username, 
      password: password,
  }).then((response) => {
    if (response.data.message) {
      setLoginStatus(response.data.message);
    } else {
      setLoginStatus(response.data[0].username)
  }
    
  });
  };


  const [IsAuth, setIsAuth] = useState(false);
  return(
    <div className="App">
      <div className="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input type='text' onChange={(e) => {
        setUsernameReg(e.target.value);
      }}
      />
      <label>password</label>
      <input type='text' onChange={(e) => {
        setPasswordReg(e.target.value);
      }}/>
      <button onClick={register}>Register</button>
      </div>



      <div className="login">
        <h1>login</h1>
        <input type="text" placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }} />
        <input type ="password" placeholder="Password..." 
        onChange={(e) => {
          setPassword(e.target.value);
        }} />
        
        <Router>
        <Route path="/" exact>
        <button onClick={()=> {
        Axios.post('http://localhost:3001/login', 
        {username: username, 
          password: password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username)
          setIsAuth(true)
      }
        
      });
    }}> login </button>



    <Link to='/profile'> Go to Profile</Link>
    </Route>
    <ProtectedRoute path="/profile" component={Profile} IsAuth={IsAuth} />
  </Router>
      </div>
      <h1>{LoginStatus}</h1>
    </div>
  );
}

export default App2;

