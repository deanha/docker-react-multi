import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <Routes>
          <Route exact path="/" Component={Fib} />
          <Route path="/otherpage" Component={OtherPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
