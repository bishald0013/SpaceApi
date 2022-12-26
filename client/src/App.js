import './App.css';
import Navbar from './component/Navbar';
import AllEvents from "./component/AllEvents"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './component/MainPage';
import Address from "./component/Address"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={< MainPage/>} />
          <Route path='/allevents' element={<AllEvents/>} />
          <Route path='/address' element={<Address/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
