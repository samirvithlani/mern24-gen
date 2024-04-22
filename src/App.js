import logo from './logo.svg';
import './App.css';
import {HomeComponent} from "./components/HomeComponent"
import HeaderComponent from './components/HeaderComponent';
import { MapDemo } from './components/MapDemo';
import { SubComponent } from './components/SubComponent';
import { Students } from './components/students/Students';
import { UseStateDemo } from './components/UseStateDemo';

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
      <HeaderComponent></HeaderComponent>
      {/* <HomeComponent title = {title} y = {year} data = {data}></HomeComponent> */}
      {/* <MapDemo/> */}
      {/* <SubComponent data = {data}></SubComponent> */}
      <Students></Students>
      {/* <UseStateDemo></UseStateDemo> */}
    </div>
  );

}

export default App;
