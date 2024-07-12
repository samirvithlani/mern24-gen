import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/ProductSlice'

export const Index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      
        dispatch(fetchProduct())
      
    }, [])

    const products = useSelector((state)=>state.product.products)
    
  return (
    <div>
        <h1>FLIPKART HOME PAGE</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((product)=>{
                        return(
                            <tr>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
