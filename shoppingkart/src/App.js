import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Components/Route/Routes";

function App() {
  return (
      <Router>
        <div className="App">

            <Routes/>

        </div>
      </Router>
  );
}

export default App;
