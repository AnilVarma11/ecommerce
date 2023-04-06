import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth, fs} from '../config/config';
import {useNavigate} from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const submitHandler = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((credentials)=>{
             console.log(credentials);
             fs.collection('users').doc(credentials.user.uid).set({
                Fullname: fullName,
                Email: email,
                Password: password, 
             }).then(()=>{
                setSuccessMsg('SignUp Successful');
                setFullName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    navigate('/login');
                }, 2500)
             }).catch((error)=>setErrorMsg(error.message))
        }).catch((error)=>{
            setErrorMsg(error.message);
        })
    }


    return (
        <>
        <div className='navv'>
            <Link to='/'>Back To Home</Link>
         </div>
        <div className='signup-container'>
            <h1>Create an account </h1>
            {successMsg&&<>
               <div>{successMsg}</div>
            </>} <br /> 
            <form onSubmit={submitHandler}>

                <label>Full Name :</label> <br />
                <input type="text" onChange={(e)=>setFullName(e.target.value)} /> <br /> <br />
                <label>Email :</label> <br />
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/> <br /> <br />
                <label>Password :</label> <br />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
               <div className='btn'><button type='submit'>Sign Up</button></div> 
           
            <div className='bottom'>
                <span>Already have an account ? Login</span>
                <Link to='/login'>here</Link> &nbsp;
            </div>
            </form>
            {errorMsg&&<>
              <div>{errorMsg}</div>
            </>}
        </div>
        </>
    );
}

export default Signup;
