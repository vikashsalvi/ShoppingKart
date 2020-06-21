import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../UserProfile/UserProfile";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
            </Switch>
        );
    }
}

export default Routes;
