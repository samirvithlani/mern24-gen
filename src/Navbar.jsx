import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "./redux/ThemeSlice";

export const Navbar = () => {

  // const state = useSelector((state)=>state)
  // console.log("state",state)
  const cartState  = useSelector((state)=>state.cart.cart)
  console.log("state",cartState)

  const bankState = useSelector((state)=>state.bank.balance)
  console.log("bankState",bankState)


  const dispatch = useDispatch()
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button onClick={()=>{dispatch(setTheme("dark"))}}>change theme</button>
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {/* <li class="nav-item active">
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
          </li> */}
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

          {/* <li class="nav-item active">
            <Link class="nav-link" to="/movieapi">
              movieapi3
            </Link>
          </li>

          <li class="nav-item active">
            <Link class="nav-link" to="/google">
              google
            </Link>
          </li>

          <li class="nav-item active">
            <Link class="nav-link" to="/postTweet">
              postTweet
            </Link>
          </li> */}

          <li class="nav-item active">
            <Link class="nav-link" to="/blogmain">
              blogmain
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/books">
              books
            </Link>
            {
              cartState?.length
            }
          </li>
          <li class="nav-item active">
            {
              bankState
            }
            <Link class="nav-link" to="/bank">
              bank
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};
