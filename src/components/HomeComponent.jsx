import React from 'react'

export const HomeComponent = () => {

    const homeStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        height: '400px',
        width: '100%'
    }

  return (
    <div style={homeStyle}>
        <h1 style={{color:"blue"}}>HOME COMPONENT</h1>
    </div>
  )
}
