import React, { useContext } from 'react'
import { AppContext } from '../context'
import { Os11 } from './Os11'
import { ThemeContext } from '../themeContext'

export const Android = () => {
    const {company} = useContext(AppContext)
    const {theme} = useContext(ThemeContext)
    console.log("android.....",company)
  return (
    <div>
        <h1>ANDROiD..</h1>
        {theme}
        <Os11></Os11>
    </div>
  )
}
