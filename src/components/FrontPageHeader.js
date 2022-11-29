import React from 'react'
import '../css/frontPage.css'
import { useNavigate } from 'react-router-dom'

const FrontPageHeader = () => {
  const navigate = useNavigate()
  const handleSignup = () => {
    navigate('/SignUp')
  }
  const handleLogin = () => {
    navigate('/Login')
  }
  return (
    <div className='header'>
      <div className='mainHead'>24/7<span className='highlight'> Medicines</span></div>
      <ul style={{ marginTop: '10px' }}>
        <li><button className='login' onClick={handleLogin}>Log in</button></li>
        <li><button className='signup' onClick={handleSignup}>Sign up</button></li>
      </ul>
    </div>
  )
}

export default FrontPageHeader
