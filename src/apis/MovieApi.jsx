import axios from "axios";
import React, { useState } from "react";

export const MovieApi = () => {
  const [movie, setmovie] = useState();
  const fetchMovie = async () => {
    const res = await axios.get(
      "https://moviedatabase8.p.rapidapi.com/Search/Titanic/",
      {
        headers: {
          "x-rapidapi-key":
            "add yours",
          "x-rapidapi-host": "a.p.rapidapi.com",
        },
      }
    );

    console.log(res.data);
    setmovie(res.data[0]);
  };

  return (
    <div>
      <h1>MOVIE API</h1>
      <button
        onClick={() => {
          fetchMovie();
        }}
      >
        Fetch Movie
      </button>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img height="300px" width="300px" src={movie.poster_path}></img>
        </div>
      )}
    </div>
  );
};
