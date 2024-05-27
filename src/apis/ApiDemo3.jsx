import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo3 = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    console.log(data);
    const userObj = Object.assign(data, {
      isActive: data.isActive == "true" ? true : false,
    });
    // const userObj = {
    //     name: data.name,
    //     email: data.email,
    //     age: data.age,
    //     isActive: data.isActive == "true" ? true : false
    // }
    console.log(userObj);

    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    if (res.status === 201) {
      //navigate...
      toast.success("User Added Successfully..", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setTimeout(() => {
        navigate("/apidemo1");
      }, 3200);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type="text" {...register("name")}></input>
          </div>
          <div>
            <label>AGE</label>
            <input type="text" {...register("age")}></input>
          </div>
          <div>
            <label>Email</label>
            <input type="text" {...register("email")}></input>
          </div>
          <div>
            <label>ok</label>
            <br /> YES{" "}
            <input
              type="radio"
              {...register("isActive")}
              name="isActive"
              value="true"
            ></input>
            <br /> NO{" "}
            <input
              type="radio"
              {...register("isActive")}
              name="isActive"
              value="false"
            ></input>
          </div>
          <div>
            <input type="submit" value="Add User"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
