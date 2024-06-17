import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

export const Ios = () => {
    const {theme}  = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor:theme =="dark"?"black":"pink"}}>
        <h1>IOS .......</h1>
    </div>
  )
}
