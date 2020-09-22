import React from 'react';
import { Link } from 'react-router-dom';
import './Manu.css';
import logo from '../../Image/Logo.png';

const Manu = () => {
    return (
        <div className='Header d-flex'>
           <div className='imgstyle'>  <img src={logo} alt=""/></div>
          <div>
          <nav>
               <Link to="/shop">shop</Link>
               <Link to="/review">order Review</Link>
               <Link to="Inventory">manage inventory</Link>
               {/* <button onClick={() => setloggedInUser({})}>sign out</button> */}
           </nav> 
          </div>
        </div>
    );
};

export default Manu;