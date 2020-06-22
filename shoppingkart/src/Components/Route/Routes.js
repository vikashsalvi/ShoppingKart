import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import OrderHistory from "../Orders/Orders";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/product' component={ProductDetails} />
                <Route exact path='/order-history' component={OrderHistory} />
            </Switch>
        );
    }
}

export default Routes;
