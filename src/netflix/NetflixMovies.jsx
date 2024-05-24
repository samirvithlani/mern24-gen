import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../components/MyButton'

export const NetflixMovies = () => {
  const ok = ()=>{
    alert("delete movie")
  }
  return (
    <div>
        <h1>NetflixMovies</h1>
        <ul>
          
          <li><Link to ="/netflixmovies/action">Action Movies</Link></li>
          <li><Link to ="/netflixmovies/comedy">Comedy Movies</Link></li>
          <li><Link to ="/netflixmovies/horror">Horror Movies</Link></li>
          
        </ul>
        <MyButton class = "btn btn-info" name ="OK" funName={()=>{ok()}}></MyButton>
    </div>
  )
}
