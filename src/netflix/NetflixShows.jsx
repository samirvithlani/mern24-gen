import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context'

export const NetflixShows = () => {
  const {title} = useContext(AppContext)
  return (
    <div>
        <h1>NETFLIX SHOWS -- {title}</h1>
        <div>
            <ul>
            
                <li><Link to ="/playshow/101">Money Heist</Link></li>
                <li><Link to ="/playshow/102">Stranger Things</Link></li>
                <li><Link to ="/playshow/103">Dark</Link></li>
                <li><Link to ="/playshow/104">The Crown</Link></li>
                <li><Link to ="/playshow/105">The Witcher</Link></li>
            </ul>
        </div>
    </div>
  )
}
