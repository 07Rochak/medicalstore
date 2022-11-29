import React from 'react'
import '../css/frontPage.css'
import { useNavigate } from 'react-router-dom'

const EmployeePageHeader = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    navigate('/')
  }
  return (
    <div className='LoggedInHeader'>
      <div className='mainHead'>24/7<span className='highlight'> Medicines</span></div>
      <ul className='loginUl'>
        <li><button className='logout' onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default EmployeePageHeader
