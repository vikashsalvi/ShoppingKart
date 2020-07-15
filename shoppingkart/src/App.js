import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Route/Routes";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Routes/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
