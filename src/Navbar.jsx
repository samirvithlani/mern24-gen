import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/netflixhome">
              Home 
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/netflixmovies">
              movies
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/netflixshows">
              shows
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/netflixgames">
            netflixgames
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/formhandling1">
            formhandling1
            </Link>
          </li>

          
          <li class="nav-item active">
            <Link class="nav-link" to="/formhandling2">
            formhandling2
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/formhandling3">
            formhandling3
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/useeffectdemo">
            useeffectdemo
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/depdrop">
            depdrop
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo1">
            API DEMO 1
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo2">
            API DEMO 2
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo3">
            API DEMO 3
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo4">
            API DEMO 4
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/movieapi">
            movieapi3
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
