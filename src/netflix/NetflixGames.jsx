import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixGames = () => {
    var games = [
        {
            id: 101,
            name: "Call of Duty",
        },
        {
            id: 102,
            name: "FIFA",
        },
        {
            id: 103,
            name: "PUBG",
        }
    ]
  return (
    <div>
        <h1>NETFLIX GAMES...</h1>
        <div>
            <ul>
                {
                    games.map((game)=>{
                        return(
                            <li><Link to ={`/playgame/${game.id}`}>{game.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
