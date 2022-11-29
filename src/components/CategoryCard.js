import React from 'react'
import Card from 'react-bootstrap/Card'

const CategoryCard = (props) => {
  return (
    <Card style={{ width: '237px', marginLeft: '15px', marginTop: '15px', height: '300px' }}>
      <Card.Body className='CategoryText'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Img variant='bottom' src={props.img} />
    </Card>
  )
}

export default CategoryCard
