import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormHandling3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false);

  const submitHandler = (data) => {
    console.log("data...", data);
    setoutput(data);
    setisSubbmited(true);
  };
  const validationSchema = {
    phone: {
      required: {
        value: true,
        message: "Phone is Required*",
      },
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Phone should be 10 digits and should start with 6,7,8,9",
      },
    },
    name: {
      required: {
        value: true,
        message: "Name is Required*",
      },
      minLength: {
        value: 5,
        message: "Name should be greater than 5",
      },
    },
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Form Handling part 3</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name", validationSchema.name)}
            ></input>
            <span>{errors.name && errors.name.message}</span>
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              {...register("phone", validationSchema.phone)}
            ></input>
            <span>{errors.phone && errors.phone.message}</span>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
            <input type="button" value="Reset" onClick={() => reset()}></input>
          </div>
        </form>
      </div>
      <div>
        <br></br>
        <br></br>

        {isSubbmited == true && output && (
          <div>
            <h1>Name = {output.name}</h1>
            <h1>Phone = {output.phone}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
