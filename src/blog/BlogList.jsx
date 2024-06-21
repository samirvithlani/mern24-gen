import React, { useContext } from 'react'
import { DisplayBlog } from './DisplayBlog'
import { BlogContext } from './bloagcontext'

export const BlogList = () => {
    const {blogs} = useContext(BlogContext)
  return (
    <div>
        <h1>Blog List</h1>
        <ul>
            {
                blogs?.map((b)=>{
                    return(
                        <li>
                            {b.author} - {b.title}
                        </li>
                    )
                })
            }
        </ul>
        <DisplayBlog></DisplayBlog>
    </div>
  )
}
