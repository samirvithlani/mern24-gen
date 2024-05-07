import React from 'react'
import { useForm } from 'react-hook-form'

export const Formhandling1 = () => {

    //useForm()
    //register --> object
    //handleSubmit --> function
    //{formState} --> object


      const {register,handleSubmit} = useForm()  

      const submitHandler = (data)=>{

        console.log("data...",data)
      }

  return (
    <div>
        <h1>FORM HANDLING 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type="text" {...register("email")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE : <input type="radio" value="male" name ="gender" {...register("gender")}></input><br></br>
                FEMALE : <input type="radio" value="female" name ="gender" {...register("gender")}></input>
            </div>
            <div>
                <label>SKILLS</label>
                <br></br>
                HTML : <input type="checkbox" value="html" {...register("skills")} name ="skills"></input><br></br>
                CSS : <input type="checkbox" value="css" {...register("skills")} name ="skills"></input><br></br>
                JAVASCRIPT : <input type="checkbox" value="javascript" {...register("skills")} name ="skills"></input>
            </div>
            <div>
                <label>DOB</label>
                <input type="date" {...register("dob")}></input>
            </div>
            <div>
                <label>CITY</label>
                <select {...register("city")}>
                    <option value="hyderabad">HYDERABAD</option>
                    <option value="bangalore">BANGALORE</option>
                    <option value="chennai">CHENNAI</option>
                </select>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </div>
  )
}
