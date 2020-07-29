import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import Profile from "./UserProfile";
import Register from "./Signup";
import Login from "./Login";
import Result from "./SearchResults";
import ProductDetails from "./ProductDetails";
import OrderHistory from "./Orders";
import Cart from "./Mycart";
import OrderConfirmation from "./Checkout";
import Help from "./Help";
import Logout from "./Logout";
import AdminHome from "./AdminHome"
import CreateProduct from "./InsertProduct"
import DeleteProduct from "./DeleteProduct"
import UpdateProduct from "./UpdateProduct"
import ManageDiscount from "./ManageDiscount"
import UpdateDiscount from "./UpdateDiscount"
import DeleteDiscount from "./DeleteDiscount"

const user = window.localStorage.getItem("username");
let status = false;

if(user !== null){
    status = true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render = {(props) => (
        status
        ? (<Component {...props} />)
        : (<Redirect to={{pathname: "/login"}}/>)
        )} />
    )

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <PrivateRoute exact path='/admin' component={AdminHome}/>
                <PrivateRoute exact path='/createProduct' component={CreateProduct}/>
                <PrivateRoute exact path='/removeProduct' component={DeleteProduct}/>
                <PrivateRoute exact path='/updateProduct' component={UpdateProduct}/>
                <PrivateRoute exact path='/manageDiscount' component={ManageDiscount}/>
                <PrivateRoute exact path='/updateDiscount' component={UpdateDiscount}/>
                <PrivateRoute exact path='/removeDiscount' component={DeleteDiscount}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path= '/login' component={Login}/>
                <Route exact path='/result' component={Result}/>
                <Route exact path='/product' component={ProductDetails} />
                <Route exact path='/order-history' component={OrderHistory} />
                <Route exact path="/mycart" component={Cart}/>
                <Route exact path="/logout" component={Logout}/>
                <PrivateRoute exact path='/orderConfirmation' component={OrderConfirmation}/>
                <Route exact path='/help' component={Help}/>
            </Switch>
        );
    }
}

export default Routes;
