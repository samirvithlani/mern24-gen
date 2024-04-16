import React from 'react'

export const StudentList = (props) => {
    console.log("student list props..",props)
  return (
    <div>
        {/* {
            props.students.map((stu)=>{
                return(
                    <ul>
                        <li>{stu.id}  {stu.name}  {stu.marks}</li>
                    </ul>
                )
            })
        } */}

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map((stu)=>{
                        return(
                            <tr>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.marks}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
