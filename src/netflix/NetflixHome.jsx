import React from 'react'
import { MyButton } from '../components/MyButton'

export const NetflixHome = () => {
  const deleteMovie = ()=>{
    alert("delete movie")
  }
  return (
    <div>
        <h1>NETFLIX HOME</h1>
        
        <MyButton class = "btn btn-danger" name ="DELETE" funName={()=>{deleteMovie()}}></MyButton>
    </div>
  )
}
