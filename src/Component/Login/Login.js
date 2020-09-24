
import React, { useContext } from 'react';
import  {useState} from 'react';
import './Login.css';


import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);



const Login = () => {



    const [newUser ,setNewUser] =useState(false);
    const [user, setUser] = useState(
      {
        isSignedIn: false,
      
        name: '',
        email: '',
        password:'',
      
         
                         
    });
  
    const [loggedInUser , setloggedInUser] = useContext(UserContext);
    const history =useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();


// auth.... with google

    const handlesignIn = () => {
      firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const {displayName, email,photoURL} =res.user;
        const signedInUser ={
          isSignedIn:true,
          name: displayName ,
          email: email,
             
        }
        setUser(signedInUser);
        setloggedInUser(signedInUser);
        history.replace(from);
        
  console.log(displayName, email,'goooooooooo');
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
    }
  

    // auth... with facebook 

    const handleFbSignIn = () => {
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        
        var token = result.credential.accessToken;
      
        const {displayName, email}= result.user;
        const signedInUser ={
          isSignedIn:true,
          name: displayName ,
          email: email,
           
        }
        setUser(signedInUser);
        setloggedInUser(signedInUser);
        history.replace(from);
        console.log('fb userrrr', user);
        
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
  
  
  
    // const handlesignOut = () => {
    //   firebase.auth().signOut()
    //   .then(res => {
    //    const signOutUser ={
    //      isSignedIn: false,
    //      name: '',
    //      email: '',
         
    //      error: '',  
    //      success: false,     
    //    } 
    //    setUser(signOutUser);
    //    console.log(res);
    //   })
    //   .catch(err => {
  
    //   })
    //   console.log('Sign out clicked');
    // }
    const handleSubmit = (e) => 
    {
     if (newUser && user.email && user.password)
         {
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res =>{
            const newUserInfo={...user};
            newUserInfo.error='';
            newUserInfo.success=true;
            setUser(newUserInfo);
            UpdateUserName(user.name);
            console.log(res);
          })
          .catch(error => {
           
            const newUserInfo={...user};
            newUserInfo.error =error.message;
            newUserInfo.success=false;
            setUser(newUserInfo);
           
          });
         }
         if (!newUser && user.email && user.password)
         {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res =>{
            const newUserInfo={...user};
            newUserInfo.error='';
            newUserInfo.success=true;
            setUser(newUserInfo);
            setloggedInUser(newUserInfo);
            history.replace(from);
            console.log(res.user ,'sign in user');
          })
          .catch(function(error) {
           
            const newUserInfo={...user};
            newUserInfo.error =error.message;
            newUserInfo.success=false;
            setUser(newUserInfo);
            // ...
          });
         }
          e.preventDefault();
  
    }
    const handleBlur = (e) => {
  // console.log(e.target.value, e.target.name);
  let isFiledValid =  true;
  if(e.target.name === 'email')
  {
    isFiledValid = /\S+@\S+\.\S+/.test(e.target.value);
  // console.log(isEmailValid);
  }
  
  if(e.target.name === 'password')
  {
    const isPasswordValid =e.target.value.length > 6;
    const passwordHasNumber =/\d{1}/.test(e.target.value);
    isFiledValid =isPasswordValid && passwordHasNumber;
   }
  
  
  if(isFiledValid)
  {
     const newUserInfo = {...user};
     newUserInfo[e.target.name] = e.target.value;
     setUser(newUserInfo);
  }
  
  
    }
  
  const UpdateUserName = name => {
  
    const  user = firebase.auth().currentUser;
  
    user.updateProfile({
      displayName: name 
      
    }).then(function() {
      console.log("update successfully")
    }).catch(function(error) {
      console.log("error successfully")
    });     
  
      }



    return (
        


        <div style ={{textAlign:'center'}}>
       
      
       
        
       
   <div className="loginClass">
     
   <form className='CustomfromDesing' onSubmit={handleSubmit}>
   
   {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder=" Enter Your First Name "/>}
   <br/>
   {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder=" Enter Your Last Name "/>}
   <br/>
   <input type="text" name="email" onBlur={handleBlur} placeholder=" Enter Your Email " required/>
   <br/>
   <input type="password" name="password" onBlur={handleBlur} placeholder="Enter Your Password" id="" required/>
   <br/>
   <input className="submitButtom" type="submit" value={newUser ? 'Create an account' : 'LogIn'}/>
   <br/>
  
   
  
   <p  onClick={() => setNewUser(!newUser)} name="newUser" id="">{!newUser ? "Don't have an account ? " : 'Already have an account ? '}<span className='newAccount'>{!newUser?'Create an account' : 'Login'}</span> </p>
   

   <p>or</p>
  
   <button className='submitButtom' onClick={handlesignIn} >Continue with Google</button>
 
   
   <br/>
   <button className='submitButtom' onClick={handleFbSignIn} >Continue with facebook</button>
   
   </form>
   
   
  
   
   <p style={{color: 'red'}}>{user.error}</p>
   {user.success &&  <p style={{color: 'green'}}>user {newUser ? 'created' : 'Loged in'} successfully</p>
   }
   </div>
       </div>
    );
};

export default Login;