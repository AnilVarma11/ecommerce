import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import {auth} from '../config/config';
import { useNavigate } from 'react-router-dom';
import shop from '../img/shopping.png';
import {Icon} from 'react-icons-kit';
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';

const Navbar = ({user}) => {

   const navigate = useNavigate();

   const handleLogout = () =>{
      auth.signOut().then(()=>{
        navigate('/login');
      })
   }


    return (
        <>
          <div className=' nav'>
               <div className='title'>
                 <img src={shop} alt="shopping icon" />
                 <h1>vBuy</h1>
               </div>

              <div>
            {!user&& <>
                <div className='options'>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                </div>
            </>}

            {user&& <>
               
               <div className='left'>
                 <Link className='user' to='/'>{user}</Link>
                 <Link to='/cart'> <Icon icon={shoppingCart} size={30} /> </Link> 
                 <div className='btn' onClick={handleLogout}>Logout</div>
               </div>
              
            </>}

            </div>
          </div>
        </>
    );
}

export default Navbar;
