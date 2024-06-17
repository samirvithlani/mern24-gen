import axios from "axios";
import React, { useState } from "react";

export const Movie1Api = () => {
  const [movie, setmovie] = useState();
  const [movieinput, setmovieinput] = useState("");
  const search = async () => {
    const res = await axios.get(
      "https://moviedatabase8.p.rapidapi.com/Search/" + movieinput,
      {
        headers: {
          "x-rapidapi-key":
            "add yours",
          "x-rapidapi-host": "add yours",
        },
      }
    );
    console.log(res.data);
    setmovie(res.data[0]);
  };
  return (
    <div>
      <h1>MOVIE API</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setmovieinput(e.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          search();
        }}
      >
        Search
      </button>

      {movie && (
        <div>
          <h1>output</h1>
          <h2>TTTLE :-- {movie.title}</h2>
          <h2>STATUS : - {movie.status}</h2>
          <img height="200px" width="200px" src={movie.poster_path}></img>
        </div>
      )}
    </div>
  );
};
