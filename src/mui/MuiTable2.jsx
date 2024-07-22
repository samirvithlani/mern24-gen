import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MuiTable2 = () => {

    const [users, setusers] = useState([])
    const deleteUser = async (id) => {
        //delete api....
        alert(id)
    }
    const columns = [
        {
            field:"_id",
            headerName:"ID",
            width:250
        },
        {
            field:"name",
            headerName:"Name",
            width:250
        },
        {
            field:"email",
            headerName:"Email",
            width:250
        },
        {
            field:"age",
            headerName:"age",
            width:90
        },
        {
            field:"isActive",
            headerName:"status",
            width:150
        },
        {
            field:"Action",
            headerName:"Action",
            width:250,
            sortable:false,
            renderCell:(params)=>{
                return(
                    <div>
                        <Button variant="contained" color="primary">Edit</Button>
                        <Button onClick={()=>{
                            //alert(params?.row?._id)
                            deleteUser(params?.row?._id)
                        }} variant="contained" color="secondary">Delete</Button>
                    </div>
                )
            }
        }
    ]

    const getUserData = async () => {

        const res = await axios.get("https://node5.onrender.com/user/user")
        setusers(res.data.data)
    }
    useEffect(() => {
      
        getUserData()
      
    }, [])
    
  return (
    <div>
        <h1>MUI TABLE 2</h1>
        <DataGrid 
        rows={users}
        columns={columns}
        getRowId={(row)=>row._id}
        ></DataGrid>
    </div>
  )
}
