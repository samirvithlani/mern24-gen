import React, { useState } from 'react'

export const UseStateDemo = () => {
    
    //var count = 0; 

    //var name = "amit"

    //[count,setCount]
    //count = variable
    //setCount = function to update the value of count
    ////0 inital value of count
    var [count,setCount] = useState(0)
    // const [name, setname] = useState("")
    // const [user, setuser] = useState({})
    // const [users, setusers] = useState([])
    // const [isActive, setisActive] = useState(false)


    const increseCount = () =>{
        count = count + 1; //1
        setCount(count); //1
        console.log("after increse in count...",count);
    }


  return (
    <div>
        <h1 style={{color:"blue"}}>USE STATE DEMO</h1>
        <h2>count = {count}</h2>

        <button onClick={()=>{increseCount()}}>increse +</button>
    </div>
  )
}
