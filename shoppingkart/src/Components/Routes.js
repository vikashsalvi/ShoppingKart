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
import Auth from "./Auth";
import AdminHome from "./AdminHome"
import CreateProduct from "./InsertProduct"
import DeleteProduct from "./DeleteProduct"
import UpdateProduct from "./UpdateProduct"


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = {(props) => (
        Auth.getAuth()
        ? (<Component {...props} />)
        : (<Redirect to={{pathname: "/login"}}/>)
        )} />
    )

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/admin' component={AdminHome}/>
                <Route exact path='/createProduct' component={CreateProduct}/>
                <Route exact path='/removeProduct' component={DeleteProduct}/>
                <Route exact path='/updateProduct' component={UpdateProduct}/>
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
