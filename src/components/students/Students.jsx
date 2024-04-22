import React, { useState } from "react";
import { StudentList } from "./StudentList";

export const Students = () => {
  // var students = [
  //     {
  //         id:1,
  //         name:"ram",
  //         marks:90
  //     },
  //     {
  //         id:2,
  //         name:"shyam",
  //         marks:80
  //     },
  //     {
  //         id:3,
  //         name:"hari",
  //         marks:70
  //     }
  // ]

  var [students, setstudents] = useState([
    {
      id: 1,
      name: "ram",
      marks: 90,
    },
    {
      id: 2,
      name: "shyam",
      marks: 80,
    },
    {
      id: 3,
      name: "hari",
      marks: 70,
    },
  ]);

  //1
  const deleteStudent = (id)=>{

        //alert("delete student with id = "+id)
        //id =2
        students = students.filter((stu)=>{
            //stu.id =1  1!= 2 true
            //stu.id =2  2!= 2 false
            //stu.id =3  3!= 2 true
            return stu.id != id
        })
        console.log("students after delete..",students)
        setstudents(students) // updating students state

  }

  const addStudents = (stu)=>{

    //console.log("student to be added..",stu)
    //students.push(stu) using push we cant update the state
    //spread operator --> open ,copy and close
    students = [...students,stu]
    console.log("students after add..",students)
    //update useState
    setstudents(students)

  }


  return (
    <div>
      <h1>STUDENTS</h1>
      <StudentList students={students} deleteStudent = {deleteStudent} addStudents = {addStudents}></StudentList>
    </div>
  );
};
