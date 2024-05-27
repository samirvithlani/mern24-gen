import axios from "axios";
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  const addUser = async () => {
    const userObj = {
      name: "virat",
      age: 36,
      email: "virat@gmail.com",
      isActive: true,
    };

    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log("res", res);
    if (res.status === 201) {
      //alert("user added successfully")
      toast.success("User Added Successfully..", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log(res.data);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>POST API PART-1</h1>
      <button
        onClick={() => {
          addUser();
        }}
        className="btn btn-info"
      >
        POST DATA
      </button>
    </div>
  );
};
