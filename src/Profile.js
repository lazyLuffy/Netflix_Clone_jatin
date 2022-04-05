// import userEvent from '@testing-library/user-event'
import React from 'react'
import Nav from './Nav'
import './profile.css'
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectUser } from './features/userSlice'
import {  useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'


function Profile() {
  const user = useSelector(selectUser)
  console.log(user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const profleSignOut = (e)=>{
    e.preventDefault()
    signOut(auth)
    dispatch(logOut())
    navigate('/')
  }
  console.log(user,"profile user")
  return (
    <div className='profile'>
        <Nav/>
        <div className="profile_body">
            <h1>Edit Info</h1>
            <div className="profile_info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Logo" />
            <div className="profile_details">
              <h2>{user.email}</h2>
              <div className="profile_plans">
                <h3>Plans</h3>
                <button
                className='profileSignOut'
                onClick={profleSignOut}
                >
                  SignOut
                </button>
              </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Profile