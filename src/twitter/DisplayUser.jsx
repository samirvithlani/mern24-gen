import React, { useContext } from 'react'
import { TweetContext } from './tweetContext'
import { DisplayTwitt } from './DisplayTwitt'

export const DisplayUser = () => {
    const {tweets,twwetHandler} = useContext(TweetContext)
  return (
    <div>
        <h1>DisplayUser</h1>
        <ul>
        {
            tweets?.map((tw)=>{
                return(
                    <li>
                        <button onClick={()=>{twwetHandler(tw.username)}} className='btn btn-info'>{tw.username}</button>
                    </li>
                )
            })
        }
        </ul>
        <DisplayTwitt/>
    </div>
  )
}
