import axios from 'axios'
import React, { useEffect } from 'react'

export const NodeUsers = () => {
    const getUsers = async()=>{
        const res = await axios.get("http://localhost:3001/user/users")
        console.log(res.data)
    }
    useEffect(()=>{
        getUsers()
    })
  return (
    <div>
    <h1>NODE USER DATA</h1>
    </div>
  )
}
