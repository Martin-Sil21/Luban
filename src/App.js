import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from  "./components/Home/home";
import "./App.css";
import AboutUs from "./components/About_Us/about_us";
import LogIn from "./components/LogIn/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      {/* Soy App */}
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} path="/" />
          <Route element={<Home />} path="/Home" />
          <Route element={<AboutUs />} path="/AboutUs" />
          <Route element={<LogIn />} path="/LogIn" />
          <Route element={<Register />} path="/Register" />
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
