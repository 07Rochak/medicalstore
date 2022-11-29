import React from 'react'
import '../css/frontPage.css'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import cartImg from '../assets/cart.png'

const FrontPageHeader = () => {
  const { logout, user } = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }
  const goToCart = () => {
    navigate('/Cart')
  }
  return (
    <div className='LoggedInHeader'>
      <Link to='/LogInCustomer' style={{ textDecoration: 'none ', color: 'black' }}>
        <div className='mainHead'>24/7<span className='highlight'> Medicines</span></div>
      </Link>
      <ul className='loginUl'>
        <li><span style={{ marginRight: '15px' }}><b>{user && user.email}</b></span></li>
        <li><button className='cartBtn' onClick={goToCart}><img src={cartImg} alt='cart' className='cartIcon' /></button></li>
        <li><button className='logout' onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default FrontPageHeader
