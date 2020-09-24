import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Manu from './Component/Manu/Manu';
import Coxbazer from './Component/Coxbazer/Coxbazer';
import Sundorban from './Component/Sundorban/Sundorban';
import Sremongul from './Component/Sremongul/Sremongul';
import Login from './Component/Login/Login';
import Notfound from './Component/Notfound/Notfound';
import BookingDetails from './Component/BookingDetails/BookingDetails';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

import { createContext } from 'react';
import { useState } from 'react';
export const UserContext = createContext();

function App() {
  const [loggedInUser ,setloggedInUser] = useState({});
  return (
    <div className="App">
     
     {/* <Home></Home> */}

     <UserContext.Provider value={[loggedInUser, setloggedInUser]} >

     {/* <p> {logInUser.name} </p> */}
    <Router>
     <Manu></Manu>
      <Switch>
      <Route exact path="/Home">
          <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Coxbazer">
           <Coxbazer/>
          </Route>
          <Route path="/Sundorban">
           <Sundorban/>
          </Route>
          <Route path="/Sremongul">
          <Sremongul/>
          </Route>
          <Route path="/Login">
          <Login/>
          </Route>

          <PrivateRoute path="/BookingDetails">
          <BookingDetails></BookingDetails>
          </PrivateRoute>
         <Route path="*">
          <Notfound/>
          </Route>
      </Switch>
    </Router>




    </UserContext.Provider>

    </div>
  );
}

export default App;
