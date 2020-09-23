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

function App() {
  return (
    <div className="App">
     
     {/* <Home></Home> */}



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

          <Route path="/BookingDetails">
          <BookingDetails></BookingDetails>
          </Route>
          {/* <PrivateRoute path="/hotel/:id">
           <Hotel/>
         </PrivateRoute> */}
         <Route path="*">
          <Notfound/>
          </Route>
      </Switch>
    </Router>






    </div>
  );
}

export default App;
