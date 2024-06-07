import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserUpdate = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      //return res.data.data //cotains : id also
      return {
        name: res.data.data.name,
        email: res.data.data.email,
        age: res.data.data.age,
        isActive: res.data.data.isActive,
      };
    },
  });
  const submitHandler = async (data) => {
    const userObj = Object.assign(data, {
      isActive: data.isActive === "true" ? true : false,
    });
    //const res = await axios.put("https://node5.onrender.com/user/user/"+id,userObj)
    const res = await toast.promise(
      axios.put("https://node5.onrender.com/user/user/" + id, userObj),
      {
        pending: "Updating User...",
        success: "User Updated Successfully...",
        error: "Failed to Update User...",
      }
    );
    console.log(res);
    //toster
    //navigate to userlist page
    navigate("/apidemo1");
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
            <input type="text" name="name" {...register("name")} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" {...register("email")} />
          </div>
          <div>
            <label>Age</label>
            <input type="text" name="age" {...register("age")} />
          </div>
          <div>
            <label>STATUS</label>
            <input type="text" name="status" {...register("isActive")} />
          </div>
          <div>
            <input type="submit" value="Update User" className="btn btn-info" />
          </div>
        </form>
      </div>
    </div>
  );
};
