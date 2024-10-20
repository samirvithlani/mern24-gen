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
import { Formhandling1 } from './forms/Formhandling1';
import { FormHandling2 } from './forms/FormHandling2';
import { FormHandling3 } from './forms/FormHandling3';
import { ApiDemo1 } from './apis/ApiDemo1';
import { UseEffectDemo } from './UseEffectDemo';
import { DepedentDropdown } from './components/DepedentDropdown';
import { ApiDemo2 } from './apis/ApiDemo2';
import { ApiDemo3 } from './apis/ApiDemo3';
import { UserUpdate } from './apis/UserUpdate';
import { MovieApi } from './apis/MovieApi';
import { ApiDemo4 } from './apis/ApiDemo4';
import { Movie1Api } from './apis/Movie1Api';
import { Google } from './contextDemo/Google';
import { AppContext } from './context';
import { PostTwwit } from './twitter/PostTwwit';
import { BloagMain } from './blog/BloagMain';
import { BookComponent } from './components/BookComponent';
import { BankComponent } from './components/bank/BankComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContent } from './redux/ContentSlice';
import { Index } from './flipkart/Index';
import { SubIndex } from './flipkart/SubIndex';
import { MuiButton } from './mui/MuiButton';
import { Muitable1 } from './mui/Muitable1';
import { MuiTable2 } from './mui/MuiTable2';
import { MuiLayout } from './mui/MuiLayout';
import { ChartDemo1 } from './charts/ChartDemo1';
import { ChartDemo2 } from './charts/ChartDemo2';
import { NodeUsers } from './components/NodeUsers';
import { UploadFile } from './components/UploadFile';

function App() {

  var title = "REACT JS"
  var year = 2021

  var data  = {
    id:101,
    name:"Rajesh",
    age:25
  }

  const themeState = useSelector((state)=>state.theme.theme)
  console.log("themeState",themeState)

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(fetchContent())
        
  }, [])
  

  return (
    <div className="App" style={{backgroundColor:themeState == "light"?"white":"black"}}>
      <Navbar></Navbar>
      <AppContext.Provider value = {{title}}>
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
        <Route path = "/formhandling1" element = {<Formhandling1/>}></Route>
        <Route path = "/formhandling2" element = {<FormHandling2/>}></Route>
        <Route path = "/formhandling3" element = {<FormHandling3/>}></Route>
        <Route path = "/useeffectdemo" element = {<UseEffectDemo/>}></Route>
        <Route path = "/apidemo1" element = {<ApiDemo1/>}></Route>
        <Route path = "/apidemo2" element = {<ApiDemo2/>}></Route>
        <Route path = "/apidemo3" element = {<ApiDemo3/>}></Route>
        <Route path = "/apidemo4" element = {<ApiDemo4/>}></Route>
        <Route path ="/depdrop" element = {<DepedentDropdown/>}></Route>
        <Route path = "/userupdate/:id" element = {<UserUpdate/>}></Route>
        <Route path = "/movieapi" element = {<Movie1Api/>}></Route>
        <Route path = "/google" element = {<Google/>}></Route>
        <Route path = "/postTweet" element = {<PostTwwit/>}></Route>
        <Route path='/blogmain' element = {<BloagMain/>}></Route>
        <Route path  ="/books" element = {<BookComponent/>}></Route>
        <Route path= '/bank' element  ={<BankComponent/>}></Route>
        <Route path='/flipkart' element = {<Index/>}></Route>
        <Route path='/flipkart/prod' element = {<SubIndex/>}></Route>
        <Route path='/mui/button' element = {<MuiButton/>}></Route>
        <Route path='/mui/table' element = {<MuiTable2/>}></Route>
        <Route path = "/mui/layout" element = {<MuiLayout/>}></Route>
        <Route path = "/chartdemo" element ={<ChartDemo2/>}></Route>
        <Route path ="/nodeuser"element ={<UploadFile/>}></Route>
        {/* <Route path = "/*" element = {<h1>NO PAGE FOUND</h1>}></Route> */}
        <Route path  ="/*" element = {<NotFound/>}></Route>
      </Routes>
      </AppContext.Provider>
      
    </div>
  );

}

export default App;
