import React, { useState, useEffect } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useLocation } from 'react-router-dom'
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'
import { storage, db } from '../firebase'
import { updateDoc, doc } from 'firebase/firestore'

const UpdateForm = () => {
  const [imageUpload, setImageUpload] = useState([])
  const imagesListRef = ref(storage, 'skinCare/')
  const [imagechange, setimagechange] = useState(false)
  const [imageUrls, setImageUrls] = useState([])
  const [newdescription, setDescription] = useState('')
  const [newprice, setPrice] = useState('')
  const [newtitle, setTitle] = useState('')
  const imageRef = ref(storage, `skinCare/${imageUpload.name}`)
  const uploadFile = () => {
    if (imageUpload == null) {
      return
    }
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url])
      })
    })
    console.log('uploaded')
  }
  const getImageUrls = () => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(url)
        })
      })
    })
  }
  useEffect(() => {
    getImageUrls()
  }, [])
  const location = useLocation()
  const image = imageUrls[imageUrls.length - 1]
  const updateImage = async (id, image) => {
    const userDoc = doc(db, 'Products', id)
    const newFields = { Image: image }
    await updateDoc(userDoc, newFields)
  }
  const updateDescription = async (id, desc) => {
    const userDoc = doc(db, 'Products', id)
    const newFields = { Description: desc }
    await updateDoc(userDoc, newFields)
  }
  const updatePrice = async (id, price) => {
    const userDoc = doc(db, 'Products', id)
    const newFields = { Price: price }
    await updateDoc(userDoc, newFields)
    console.log('updated price')
  }
  const updateTitle = async (id, price) => {
    const userDoc = doc(db, 'Products', id)
    const newFields = { Title: newtitle }
    await updateDoc(userDoc, newFields)
  }
  if (imagechange) {
    updateImage(location.state.id, image)
  }
  if (newdescription !== '') {
    updateDescription(location.state.id, newtitle)
  }
  if (newtitle !== '') {
    updateTitle(location.state.id, newtitle)
  }
  if (newprice !== '') {
    updatePrice(location.state.id, newprice)
  }
  return (
    <div>
      <EmployeeNavbar />
      <Form className='createForm' style={{ marginBottom: '15px' }}>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Product Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Product Title' onChange={(event) => setTitle(event.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Product Description</Form.Label>
          <Form.Control type='text' placeholder='Enter Product Description' onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='text' placeholder='Enter Price' onChange={(event) => setPrice(event.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type='file'
            placeholder='Enter Image' onChange={(event) => {
              setImageUpload(event.target.files[0])
              setimagechange(true)
            }}
          />
        </Form.Group>
        <Button variant='primary' style={{ marginBottom: '10px' }} onClick={uploadFile}>
          Upload Image
        </Button>
        <br />
      </Form>
    </div>
  )
}

export default UpdateForm
