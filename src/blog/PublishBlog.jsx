import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BlogList } from './BlogList'
import { BlogContext } from './bloagcontext'

export const PublishBlog = () => {
    const {register,handleSubmit} = useForm()
    const {blogs,setblogs} = useContext(BlogContext)
    const submitHandler = (data) => {
        setblogs([...blogs,data])
    }
  return (
    <div>
        <h1>PUBLISH BLOG</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>AUTHOR NAME</label>
                <input type="text" {...register('author')} />
            </div>
            <div>
                <label>TITLE</label>
                <input type="text" {...register('title')} />
            </div>
            <div>
                <label>CONTENT</label>
                <textarea {...register('content')} />
            </div>
            <div>
                <button type="submit">PUBLISH</button>
            </div>
        </form>

        <BlogList></BlogList>
    </div>
  )
}
