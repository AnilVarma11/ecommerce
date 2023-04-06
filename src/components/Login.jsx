import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../config/config';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(''); 

    const submitHandler = (e) =>{
        e.preventDefault();
       // console.log(email, password);
       auth.signInWithEmailAndPassword(email, password).then(()=>{
          setSuccessMsg('Login Successful');
          setEmail('');
          setPassword('');
          setErrorMsg('');
          setTimeout(()=>{
             setSuccessMsg('');
              navigate('/');
          }, 2000)
       }).catch((error)=>{errorMsg(error.message)})
    }

    return (
        <>
        <div className='navv'>
            <Link to='/'>Back To Home</Link>
         </div>
        <div className='login-container'>
             <h1>Login</h1>
             {successMsg&&<>
               <div>{successMsg}</div>
             </>}
            <form onSubmit={submitHandler}>
                <label>Email:</label> <br />
                <input type="email" onChange={(e)=> setEmail(e.target.value)} /> <br /> <br />
                <label>Password:</label> <br />
                <input type="password" onChange={(e)=> setPassword(e.target.value)} /> <br /><br />
                <button type='submit'>Login</button>
           
            <div className='bottom'>
                <span>Don't have an account yet? Signup</span>
                <Link to='/signup'>here</Link> &nbsp;  
            </div>
            </form>
            {errorMsg&&<>
              <div>{errorMsg}</div>
            </>}
        </div>
         
        </>
    );
}

export default Login;
