import logo from './logo.svg';
import './App.css';
import {HomeComponent} from "./components/HomeComponent"
import HeaderComponent from './components/HeaderComponent';
import { MapDemo } from './components/MapDemo';
import { SubComponent } from './components/SubComponent';
import { Students } from './components/students/Students';
import { UseStateDemo } from './components/UseStateDemo';
import { Blog } from './components/blog/Blog';
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './netflix/NetflixHome';
import { NetflixMovies } from './netflix/NetflixMovies';
import { NetflixDashboard } from './netflix/NetflixDashboard';
import { NotFound } from './netflix/NotFound';
import { ActionMovies } from './netflix/ActionMovies';
import { ComedyMovies } from './netflix/ComedyMovies';
import { HorrorMovies } from './netflix/HorrorMovies';
import { NetflixShows } from './netflix/NetflixShows';
import { PlayShows } from './netflix/PlayShows';
import { NetflixGames } from './netflix/NetflixGames';
import { PLayGame } from './netflix/PLayGame';

function App() {

  var title = "REACT JS"
  var year = 2021

  var data  = {
    id:101,
    name:"Rajesh",
    age:25
  }



  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element = {<NetflixDashboard/>}></Route>
        <Route path ="/netflixhome" element = {<NetflixHome/>}></Route>
        <Route path = "/netflixmovies" element = {<NetflixMovies/>}></Route>
        <Route path = "/netflixmovies/action" element = {<ActionMovies/>}></Route>
        <Route path = "/netflixmovies/comedy" element = {<ComedyMovies/>}></Route>
        <Route path = "/netflixmovies/horror" element = {<HorrorMovies/>}></Route>
        <Route path ="/netflixshows" element = {<NetflixShows/>}></Route>
        <Route path = "/playshow/:id" element = {<PlayShows/>}></Route>
        <Route path = "/netflixgames" element = {<NetflixGames/>}></Route>
        <Route path  ="/playgame/:id" element = {<PLayGame/>}></Route>
        {/* <Route path = "/*" element = {<h1>NO PAGE FOUND</h1>}></Route> */}
        <Route path  ="/*" element = {<NotFound/>}></Route>
      </Routes>
      
    </div>
  );

}

export default App;
