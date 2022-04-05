import React from 'react'
import { useState } from 'react'
import  './Login.css'
import SignUp from './SignUp'

function Login() {
    const [signUp,setSignUp] = useState(false)
  return (
    <div className='login'>
        <div className="login_background">
            <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" alt="" />  
            <button className='login_button' onClick={()=>setSignUp(true)}>Sign In</button>  
            <div className="logo_gradiant"/>
        </div>
        <div className="login_body">
            {signUp?
            <SignUp/> :
            <>
            <h1>Unlimited flims,TV programmes and more.</h1>
            <h2>Watch anywhere.cancel at any time</h2>
            <h3>ready to watch? Enter your email to create or restart your membership</h3>
            <div className="login_input">
            <form>
                <input type="text" className="login_input" placeholder='Enter Your Email.' />
                <button className='login_input_button' type='button' onClick={(e)=>setSignUp(true)}>Get Started</button>
            </form>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Login