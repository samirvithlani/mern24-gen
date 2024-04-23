import React, { useState } from 'react'

export const AddBlog = (props) => {

    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const titlehandler = (event)=>{

     //   console.log(event.target.value)
        settitle(event.target.value)
    }

    const descriptionHandler = (event)=>{
        setdescription(event.target.value)
    }

    const submitHandler = ()=>{

        // console.log("title  = ",title)
        // console.log("description",description)

        var blogObj = {
            title:title,
            description:description,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString(),
            id:Math.floor(Math.random()*1000)
        }
        //console.log(blogObj)
        props.addBlogToArray(blogObj)


    }


  return (
    <div>
        <h1 style={{color:"green"}}>ADD BLOG JS</h1>
        <div>
            <input onChange={(event)=>{titlehandler(event)}} type="text" placeholder='Title'></input>
            {title}
        </div>
        <div>
            <input onChange={(event)=>{descriptionHandler(event)}} type="text" placeholder='Description'></input>
            {description}
        </div>
        <div>
            <button onClick={()=>{submitHandler()}} className='btn btn-info'>ADD BLOG</button>
        </div>

    </div>
  )
}
