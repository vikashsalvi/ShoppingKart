import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Result from "../Search/SearchResults";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/result' component={Result}/>
            </Switch>
        );
    }
}

export default Routes;
