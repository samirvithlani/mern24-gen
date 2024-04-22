import React from 'react'

export const StudentList = (props) => {
    //{students[],deleteStudent,addStudents}
    console.log("student list props..",props)

    


  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{props.addStudents({id:4,name:"kunal",marks:56})}}>ADD STUDENT</button>
        {/* {
            props.students.map((stu)=>{
                return(
                    <ul>
                        <li>{stu.id}  {stu.name}  {stu.marks}</li>
                    </ul>
                )
            })
        } */}
            
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MARKS</th>
                    <th>ACTION</th>
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
                                <td>
                                    <button onClick={()=>{props.deleteStudent(stu.id)}} className='btn btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}
