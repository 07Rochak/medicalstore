import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

const DeleteCard = (props) => {
  const deleteProduct = async (id) => {
    const userDoc = doc(db, 'Products', id)
    await deleteDoc(userDoc)
  }
  return (
    <Card style={{ width: '237px', marginLeft: '15px', marginTop: '15px', height: '470px', marginBottom: '50px' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body className='CategoryText'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text>
          $ {props.price}
        </Card.Text>
        <Button onClick={() => { deleteProduct(props.id) }}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default DeleteCard
