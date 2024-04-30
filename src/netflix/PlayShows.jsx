import React from "react";
import { useParams } from "react-router-dom";

export const PlayShows = () => {
  const id = useParams().id;
  console.log("useParams...",useParams());
  return (
    <div>
      <h1>PLAYING SHOW WITH id = {id}</h1>
    </div>
  );
};
