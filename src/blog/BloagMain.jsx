import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BlogContext } from './bloagcontext'
import { PublishBlog } from './PublishBlog'

export const BloagMain = () => {
    
    const [blogs, setblogs] = useState([])

    
  return (
    <div>
         <h1>Blog Main</h1>
         <BlogContext.Provider value={{blogs,setblogs}}>
            <PublishBlog></PublishBlog>
         </BlogContext.Provider>
        
    </div>
  )
}
