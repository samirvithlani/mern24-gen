import React, { useContext } from "react";
import { TweetContext } from "./tweetContext";

export const DisplayTwitt = () => {
  const { tweets, user } = useContext(TweetContext);
  //{}{}{}{}{} {username,message}
  return (
    <div>
      <h1>DISPLAY TWEET :::

        {
          tweets?.find((t)=>t.username === user)?.message
        }
      </h1>
    </div>
  );
};
