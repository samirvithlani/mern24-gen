import React from 'react'

export const MapDemo = () => {
    var users = ["ram","shyam","hari","seeta","geeta"]
    var employees = [
        {
            id:1,
            name:"ram",
        },
        {
            id:2,
            name:"shyam",
        }
    ]
  return (
    <div>
        <h1>LOOP USING MAP FUNCTION</h1>
       
        {/* {
            users.map((user)=>{
                return (
                <h1>{user}</h1>
                )
            })
        } */}

            {

                employees.map((emp)=>{
                    return(
                        <ul>
                            <li>{emp.id}  {emp.name}</li>
                        </ul>
                    )
                })
            }


    </div>
  )
}
