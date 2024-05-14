import React from 'react'
import { useForm } from 'react-hook-form'

export const FormHandling2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()

    console.log("errors...",errors) //error object
    
    const submitHandler = (data)=>{
        console.log("data...",data)
    }

    const validationSchema ={
        age1:
        {
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"Age should be greater than 18"
            } ,
            max:{
                value:60,
                message:"Age should be less than 60"
            }  
        },
        address:{
            required:{
                value:true,
                message:"Address is Required*"
            },
            minLength:{
                value:10,
                message:"Address should be greater than 10"
            },
            maxLength:{
                value:100,
                message:"Address should be less than 100"
            }
        }
    }

  return (
    <div>
        <h1>Form Handling part 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
                <span>
                    {
                      errors.name && errors.name.message
                    }
                </span>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age",validationSchema.age1)}></input>
                <span>
                    {
                        errors.age && errors.age.message
                    }
                </span>
            </div>
            <div>
                <label>Address</label>
                <input type="text" {...register("add",validationSchema.address)}></input>
                <span>
                    {
                        errors.add && errors.add.message
                    }
                </span>
            </div>
            <div>
                <input type="submit" value="SUBMIT"></input>
            </div>
        </form>
    </div>
  )
}
