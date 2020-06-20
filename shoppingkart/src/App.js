import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Components/Route/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

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
