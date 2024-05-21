import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomeLoader } from '../components/CustomeLoader'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState()
    const [isLoading, setisLoading] = useState(false)
    const getUsers = async()=>{
        //apicall start
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axis res",res)
        console.log("api actual res",res.data)
        console.log("api actual res",res.data.message)
        console.log("api actual res",res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data) //set data array to users
        //api call end
        setisLoading(false)

    }
    useEffect(() => {
        getUsers()
    
    }, [])
    
  return (
    <div>
        <h1>API DEMO 1</h1>
        {
            isLoading && <CustomeLoader/>
        }
        <h1>{message}</h1>
        {/* <ul>
            {
                users?.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
        </ul> */}
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive == "true"?"Active":"Not Active"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
       
    </div>
  )
}
