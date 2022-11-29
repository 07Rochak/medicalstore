import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const OrdersCard = (props) => {
  const navigate = useNavigate()
  const typeofComplaint = () => {
    navigate('/TypeofComplaint')
  }
  return (
    <div className='ordersContainer'>
      <b>Order Details:</b>{props.details}<br />
      <b>Address: </b>{props.address}<br />
      <b>Price: </b>{props.price}<br />
      <b>Payment Method: </b>Cash on Delivery<br />
      <Button style={{ marginTop: '10px' }} onClick={typeofComplaint}>Complaint</Button>
    </div>
  )
}

export default OrdersCard
