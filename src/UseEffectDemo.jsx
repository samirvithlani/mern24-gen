import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called")
    },[count])

    //1st parameter is a function
    //2nd parameter is an array : dependency array
  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        <button onClick={()=>setcount(count+1)}>Click me</button>
        {count}
    </div>
  )
}
