import React, { useState, useEffect } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import UpdateCard from './UpdateCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Update = () => {
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
          return <UpdateCard key={product.id} id={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} />
        })}
      </div>
    </div>
  )
}

export default Update
