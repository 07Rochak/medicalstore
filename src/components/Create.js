import React, { useState, useEffect } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../css/crud.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'
import { storage, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const Create = () => {
  const [imageUpload, setImageUpload] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [category, setCategory] = useState('')
  const [newdescription, setDescription] = useState('')
  const [newprice, setPrice] = useState('')
  const [newtitle, setTitle] = useState('')
  const imageRef = ref(storage, `skinCare/${imageUpload.name}`)
  const imagesListRef = ref(storage, 'skinCare/')
  const uploadFile = () => {
    if (imageUpload == null) {
      return
    }
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
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
  var currentImageUrl = ''
  useEffect(() => {
    getImageUrls()
  }, [])
  currentImageUrl = imageUrls[imageUrls.length - 1]
  const skinCareRef = collection(db, 'Products')
  const createSkinCareDoc = async () => {
    console.log(newdescription)
    console.log(currentImageUrl)
    console.log(newprice)
    console.log(newtitle)
    await addDoc(skinCareRef, { Description: newdescription, Image: currentImageUrl, Price: newprice, Title: newtitle, category: category })
    console.log('added')
  }
  return (
    <div>
      <EmployeeNavbar />
      <Form className='createForm'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Product Title</Form.Label>
            <Form.Control type='text' placeholder='Enter Product Title' onChange={(event) => setTitle(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Price</Form.Label>
            <Form.Control type='text' placeholder='Enter Price' onChange={(event) => setPrice(event.target.value)} />
          </Form.Group>
        </Row>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Product Description</Form.Label>
          <Form.Control type='text' placeholder='Enter Product Description' onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue='skinCare' onChange={(event) => { setCategory(event.target.value) }}>
            <option value='Products'>Skin Care</option>
            <option value='hairCare'>Hair Care</option>
            <option value='pharmaceutical'>Pharmaceutical</option>
            <option value='firstAid'>First Aid</option>
            <option value='surgery'>Surgical Equipments</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Product Image</Form.Label>
          <Form.Control type='file' placeholder='Choose Image' onChange={(event) => { setImageUpload(event.target.files[0]) }} />
        </Form.Group>
        <Button variant='primary' style={{ marginBottom: '10px' }} onClick={uploadFile}>
          Upload Image
        </Button>
        <br />
        <Button variant='primary' onClick={createSkinCareDoc}>
          Create
        </Button>
      </Form>
    </div>
  )
}

export default Create
