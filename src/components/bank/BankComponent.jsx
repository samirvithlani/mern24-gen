import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from '../../redux/BankSlice'

export const BankComponent = () => {
//dispatch
  const dispatch = useDispatch()
  const [depamount, setdepamount] = useState(0)
  const withdrawHandler = ()=>{
    dispatch(withdraw(parseInt(depamount)))
  }
  const depositHandeler = ()=>{
    console.log("deposit",depamount)
    dispatch(deposit(parseInt(depamount)))
  }
 
  return (
    <div>
      <div>
          <h1>DEPOSIT</h1>
          <div>
            <label>AMOUNT</label>
            <input onChange={(e)=>{setdepamount(e.target.value)}} type="text"></input>
            <button onClick={()=>depositHandeler()} class="btn btn-primary">DEPOSIT</button>
          </div>
      </div>
      <div>
          <h1>withdraw</h1>
          <div>
            <label>AMOUNT</label>
            <input onChange={(e)=>{setdepamount(e.target.value)}} type="text"></input>
            <button onClick={()=>withdrawHandler()} class="btn btn-primary">DEPOSIT</button>
          </div>
      </div>
    </div>
  )
}
