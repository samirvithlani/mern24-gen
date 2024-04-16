import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {

    var students = [
        {
            id:1,
            name:"ram",
            marks:90
        },
        {
            id:2,
            name:"shyam",
            marks:80
        },
        {
            id:3,
            name:"hari",
            marks:70
        }
    ]



  return (
    <div>
        <h1>STUDENTS</h1>
        <StudentList students = {students}></StudentList>
    </div>
  )
}
