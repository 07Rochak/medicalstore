import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import Form from 'react-bootstrap/Form'

const CartCard = (props) => {
  const [newQuantity, setNewQuantity] = useState(props.quantity)
  const { user } = UserAuth()
  const deleteProduct = async (id) => {
    const userDoc = doc(db, 'Cart ' + user.id, id)
    await deleteDoc(userDoc)
  }
  const updateQuantity = async (id, quantity) => {
    const userDoc = doc(db, 'Cart ' + user.id, id)
    const newFields = { quantity: newQuantity }
    await updateDoc(userDoc, newFields)
  }
  if (newQuantity !== props.quantity) {
    updateQuantity(props.id, newQuantity)
  }
  return (
    <Card style={{ width: '237px', marginLeft: '15px', marginTop: '15px', height: '490px', marginBottom: '20px' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body className='CategoryText'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Form.Control type='number' placeholder={`Current quantity is ${props.quantity}`} onChange={(event) => { setNewQuantity(event.target.value) }} />
        <Card.Text>
          $ {props.price}
        </Card.Text>
        <Button onClick={() => { deleteProduct(props.id) }}>Remove from Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default CartCard
