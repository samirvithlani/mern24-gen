import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BlogContext } from './bloagcontext'
import { PublishBlog } from './PublishBlog'
import { useSelector } from 'react-redux'

export const BloagMain = () => {
    
    const [blogs, setblogs] = useState([])
    const cartState = useSelector((state)=>state.cart.cart)
    console.log("state",cartState)

    
  return (
    <div>
         <h1>Blog Main</h1>
         <BlogContext.Provider value={{blogs,setblogs}}>
            <PublishBlog></PublishBlog>
         </BlogContext.Provider>
        
    </div>
  )
}
