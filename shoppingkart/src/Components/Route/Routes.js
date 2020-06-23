import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Signup/Signup";
import Login from "../Login/Login";
import CreateProduct from '../Admin/Admin';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path= '/login' component={Login}/>
                <Route exact path='/createProduct' component={CreateProduct}/>
            </Switch>
        );
    }
}

export default Routes;
