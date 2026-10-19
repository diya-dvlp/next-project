"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Productdetails() {
    const {id}= useParams()
    const[product,setProduct]=useState([]) 

    const router = useRouter()
    const handlenavigate =()=>{
      router.back()
    }

    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then((response)=>response.json())
       .then((data)=>{
          setProduct(data)
       })
       .catch((error)=>{
          error.message
       })
      
    },[id])

    
  return (
    <div>
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title}/>
      <button onClick={handlenavigate}>Go Back</button>
    </div>
  )
}
