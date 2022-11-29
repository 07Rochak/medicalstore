import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import Form from 'react-bootstrap/Form'

const ProductCard = (props) => {
  const [Quantity, setQuantity] = useState(0)
  const { user } = UserAuth()
  const Product = {}
  const addtoCart = async () => {
    if (user && user.email) {
      Product.image = props.img
      Product.title = props.title
      Product.text = props.text
      Product.quantity = Quantity
      Product.price = props.price
      const collnRef = collection(db, 'Cart ' + user.id)
      await addDoc(collnRef, Product)
    }
  }
  return (
    <Card style={{ width: '237px', marginLeft: '15px', marginTop: '15px', height: '480px', marginBottom: '50px' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body className='CategoryText'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Form.Control type='number' placeholder='Enter quantity' onChange={(event) => { setQuantity(event.target.value) }} />
        <Card.Text>
          $ {props.price}
        </Card.Text>
        <Button onClick={addtoCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
