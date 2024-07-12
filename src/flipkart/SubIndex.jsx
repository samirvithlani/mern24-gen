import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const SubIndex = () => {
    

    const product = useSelector((state)=>state.product.products)
    console.log("product",product)
    
  return (
    <div>
        <h1>SUB INDEX</h1>
    </div>
  )
}
