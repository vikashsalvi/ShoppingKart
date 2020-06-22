import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Cart from "../CartManagement/Mycart";
import OrderConfirmation from "../CartManagement/Checkout/Checkout";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/mycart" component={Cart}/>
                <Route exact path='/orderConfirmation' component={OrderConfirmation}/>
            </Switch>
        );
    }
}

export default Routes;
