import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { logIn, logOut, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Profile from './Profile';
// import { useAuthState } from 'react-firebase-hooks/auth';



function App() {
  // const[user,loading]=useAuthState(auth)
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user)
      if(user){
        dispatch(logIn({
          uid:user.uid,
          email:user.email
        }))
      }else{
        signOut(auth)
        dispatch(logOut)
      }
    })
  },[])
  return (
    <div className="App">
       <Router>
      <div>
        <Routes>
          <Route path="/" element={user ? <HomeScreen/> : <Login/>}>
          </Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
