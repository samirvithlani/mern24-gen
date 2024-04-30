import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div>
        <h1>NetflixMovies</h1>
        <ul>
          
          <li><Link to ="/netflixmovies/action">Action Movies</Link></li>
          <li><Link to ="/netflixmovies/comedy">Comedy Movies</Link></li>
          <li><Link to ="/netflixmovies/horror">Horror Movies</Link></li>
          
        </ul>
    </div>
  )
}
