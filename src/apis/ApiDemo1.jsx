import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState()
    const getUsers = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axis res",res)
        console.log("api actual res",res.data)
        console.log("api actual res",res.data.message)
        console.log("api actual res",res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data) //set data array to users


    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getUsers()}}>Get Users</button>
        <h1>{message}</h1>
        <ul>
            {
                users?.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
        </ul>
       
    </div>
  )
}
