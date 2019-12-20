import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import Header from './Header';


const Login = props => {
    console.log('LOGIN', props);
 const [input, setInput] = useState({ username: '', password: '' })
 
 const handleChange = event => {
    setInput({
   ...input,
   [event.target.name]: event.target.value
    })
  }


const login = event => {
    event.preventDefault();

    axiosWithAuth()
    .post(`/login`, input)
    .then(res => { 
        console.log('DATA',res.data);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/')
    })
     
      .catch(err => console.log(err.reponse))
    };

    if (localStorage.getItem('token')) {
        return <Redirect to='/' />
    }
    
    return (
    <> 
    <Header />
     <div className="login-form-div"> 
     
      <h1 className="login-title">Log In</h1>

        <form onSubmit={login}>
        
        

        <input 
        type= 'text'
        value={input.username}
        name='username'
        placeholder='...enter username'
        onChange={handleChange}
        />
      
        <input 
        type='password'
        value={input.password}
        name='password'
        placeholder='...enter password'
        onChange={handleChange}
        />
        <button className="login-button">LOG IN</button>
        </form> 
        </div>
        </>  
       )
}
export default Login;
