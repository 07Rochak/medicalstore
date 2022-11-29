import React from 'react'
import { Button } from 'react-bootstrap'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

const ComplaintsCard = (props) => {
  const deleteComplaint = async (id) => {
    const userDoc = doc(db, 'Complaints', id)
    await deleteDoc(userDoc)
  }
  const addressComplaint = (loc) => {
    console.log('go')
    const url = `http://localhost:5000/chat.html?email=employee@gmail.com.com&username=employee&room=${loc}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='complaintCard'>
      <div><b>Complaint by: </b>{props.email}</div>
      <div><b>Complaint Type: </b>{props.type}</div>
      <Button style={{ marginLeft: '10px', marginTop: '5px' }} onClick={() => { addressComplaint(props.type) }}>Complaint</Button>
      <Button style={{ marginLeft: '10px', marginTop: '5px' }} onClick={() => { deleteComplaint(props.id) }}>Delete</Button>
    </div>
  )
}

export default ComplaintsCard
