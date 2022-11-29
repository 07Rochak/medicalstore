import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const UpdateCard = (props) => {
  const id = props.id
  const text = props.text
  const price = props.price
  const img = props.img
  const title = props.title
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
        <Button><Link to='/UpdateForm' state={{ id, text, price, img, title }} style={{ textDecoration: 'none', color: 'white' }}>Update</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default UpdateCard
