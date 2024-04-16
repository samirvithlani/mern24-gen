import React from 'react'
import { SubSubComponent } from './SubSubComponent'

export const SubComponent = (props) => {

    var homeStyle ={
        color:"red",
        backgroundColor:"yellow",
    }

  return (
    <div>
        <h1>SUB COMPONENT this is child of app</h1>
        <h1>{props.data.id}  {props.data.name}</h1>

        <SubSubComponent data = {props.data} homeStyle = {homeStyle}></SubSubComponent>
    </div>
  )
}
