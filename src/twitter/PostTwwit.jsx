import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TweetContext } from "./tweetContext";
import { DisplayUser } from "./DisplayUser";

export const PostTwwit = () => {
  const { register, handleSubmit } = useForm();
  const [tweets, settweets] = useState([]); //[userName.message]
  const [user, setuser] = useState({}) //ajay


  const submitHandler = (data) => {
    console.log(data);
    settweets([...tweets, data]); //spread operator
  };

  const twwetHandler = (tweetObj)=>{
    setuser(tweetObj)
    console.log("tw.......",tweetObj)
  }

  return (
    <div>
      <h1>POST</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>USER NAME</label>
          <input type="text" {...register("username")}></input>
        </div>
        <div>
          <label>MESSAGE</label>
          <input type="text" {...register("message")}></input>
        </div>
        <div>
          <input type="submit" value="POST"></input>
        </div>
      </form>
      <div
        style={{
          marginTop: 20,
          backgroundColor: "GrayText",
          minHeight: "200px",
          height: "auto",
        }}
      >
        <TweetContext.Provider value={{ tweets,twwetHandler,user }}>
          <DisplayUser />
        </TweetContext.Provider>
      </div>
    </div>
  );
};
