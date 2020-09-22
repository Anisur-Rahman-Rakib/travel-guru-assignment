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
               <Link to="/Coxbazer">Coxbazer</Link>
               <Link to="Sundorban">Sundorban</Link>
               <Link to="Sremongul">Sremongul</Link>
               {/* <button onClick={() => setloggedInUser({})}>sign out</button> */}
           </nav> 
          </div>
        </div>
    );
};

export default Manu;