import React from 'react'

export const HomeComponent = (props) => {

    const homeStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        height: '400px',
        width: '100%'
    }
    console.log("home component props..",props)

  return (
    <div style={homeStyle}>
        <h1 style={{color:"blue"}}>HOME COMPONENT</h1>
        <h2>{props.title}</h2>
        <h2>{props.ye}</h2>
        <h3>{props.data.id}</h3>
    </div>
  )
}
