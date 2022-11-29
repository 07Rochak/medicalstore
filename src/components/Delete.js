import React, { useState, useEffect } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import DeleteCard from './DeleteCard'

const Delete = () => {
  const [product, setProduct] = useState([])
  const productCollectionRef = collection(db, 'Products')
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])
  return (
    <div>
      <EmployeeNavbar />
      <div className='categoriesPage'>
        {product.map((product) => {
          return <DeleteCard key={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} id={product.id} />
        })}
      </div>
    </div>
  )
}

export default Delete
