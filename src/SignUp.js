import React from 'react'
import './SignUp.css'
// import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logIn } from './features/userSlice';

function SignUp() {
    const dispatch = useDispatch()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const registerIn = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
        .then((user)=>{
            alert("you are now register go sign In")
        }).catch((e)=>{
            alert(e.message,"Database Error")
        })
    }

    const signIn = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((user)=>{
           console.log("Sign In Success")
        }).catch((e)=>{
            alert(e.message,"signin error")
        })
    }

  return (
    <div className='signUp'>
            <form>
            <h1>Sign In</h1>
                <input ref={emailRef}  type="text" name='Email' placeholder='Enter Your Email'  />
                <input ref = {passwordRef} type="password" name='password' placeholder='Enter Your Password' />
                <button type='button' onClick={signIn}>Submit</button>
            <h2>New to Netflix? <span onClick={registerIn}>Sign up now</span></h2>
            </form>
    </div>
  )
}

export default SignUp