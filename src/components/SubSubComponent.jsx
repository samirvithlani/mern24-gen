import React from 'react'

export const SubSubComponent = (props) => {
    console.log("sub sub component props..",props) 
    //data //homeStyle
  return (
    <div>
        <h1>SUB SUB COMPONENT OF APP JS</h1>
        <h4 style={{color:props.homeStyle.color}}>{props.data.id}</h4>
    </div>
  )
}
