import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img1 from '../assets/skinCare.jpg'
const Product = () => {
  return (
    <Card style={{ width: '18rem', marginLeft: '15px', height: '30rem' }}>
      <Card.Img variant='top' src={img1} />
      <Card.Body>
        <Card.Title>Bandaid</Card.Title>
        <Card.Text>
          Bandaid
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
