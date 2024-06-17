import React, { useState } from 'react'
import { Android } from './Android'
import { AppContext } from '../context'
import { Ios } from './Ios'
import { ThemeContext } from '../themeContext'

export const Google = () => {
    const [company, setcompany] = useState("Alphabet")
    const pingGoogle = () => {
        alert("Google is pinged....")
    }
  return (
    <div>
        <h1>GOOGLE COMP....</h1>
        <AppContext.Provider value={{company,pingGoogle}}>
            <ThemeContext.Provider value={{theme:"light"}}>
                <Android></Android>
            </ThemeContext.Provider>
        </AppContext.Provider>
        <ThemeContext.Provider value={{theme:"dark"}}>
            <Ios></Ios>
        </ThemeContext.Provider>
    </div>
  )
}
