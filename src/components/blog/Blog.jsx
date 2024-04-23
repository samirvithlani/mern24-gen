import React, { useState } from 'react'
import { AddBlog } from './AddBlog'
import { BlogList } from './BlogList'

export const Blog = () => {
    var [blogs, setblogs] = useState([])

    const addBlogToArray = (blogObj)=>{

        blogs = [...blogs,blogObj]
        setblogs(blogs) //update the state
        //console.log("blogs = after add blog...",blogs)
    }


  return (
    <div>
        <h1 style={{color:"blue"}}>BLOG JS</h1>
        <AddBlog addBlogToArray ={addBlogToArray}></AddBlog>
        <BlogList blogs = {blogs}></BlogList>
    </div>
  )
}
