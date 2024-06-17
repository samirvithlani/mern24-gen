import React, { useContext } from 'react'
import { AppContext } from '../context'

export const Os11 = () => {
    const {company,pingGoogle} = useContext(AppContext)
    console.log("os11.....",company)
  return (
    <div>
        <button onClick={()=>{pingGoogle()}}>ping....</button>
    </div>
  )
}
