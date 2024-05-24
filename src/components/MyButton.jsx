import React from 'react'

export const MyButton = (props) => {
  return (
    <button className={props.class} onClick={props.funName}>{props.name}</button>
  )
}
