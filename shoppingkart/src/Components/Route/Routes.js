import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Signup/Signup";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
            </Switch>
        );
    }
}

export default Routes;
