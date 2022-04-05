import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './nav.css'
function Nav() {
    const [show,setShow] = useState(false)
    const navigate = useNavigate()
    const logMeOut =(e)=>{
        e.preventDefault()
        navigate('/profile')
        
    }
    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return ()=>window.removeEventListener("scroll",transitionNavBar)
    },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav_contents">
            <img 
            className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="Logo" /> 
            <img 
            className="nav_avatar" 
            onClick={logMeOut}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Avatar" />
        </div>
    </div>
  )
}

export default Nav