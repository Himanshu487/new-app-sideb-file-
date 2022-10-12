// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import {BrowserRouter as Route,Routes} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Dash from './pages/Dash';
import Pay from './Pay';

function App() {
  return (
    <>
    {/* <div className={props.toggle}> */}
    <div className="App" >
    <Navbar/>
    <Routes>
  
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dash" element={<Dash/>} />
          <Route exact path='/pay' element={<Pay/>} />
   </Routes>
    </div>
    {/* </div> */}
    </>
  );
}

export default App;
