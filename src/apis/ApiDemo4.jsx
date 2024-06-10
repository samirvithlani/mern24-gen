import axios from "axios";
import React from "react";

export const ApiDemo4 = () => {
  const postData = async () => {
    const data = {
      name: "Amit",
      email: "amit@gmail.com",
      gender: "male",
      status: "active",
    };

    try {
      const res = await axios.post(
        "https://gorest.co.in/public/v2/users",
        data,
        {
          headers: {
            Authorization:
              "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5",
          },
        }
      );
      console.log(res.data);
    } catch (e) {
      console.log("error...",e);
    }
  };
  return (<div>ApiDemo4

    <button onClick={()=>{postData()}}>POST</button>

  </div>);
};
