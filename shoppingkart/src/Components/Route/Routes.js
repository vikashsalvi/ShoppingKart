import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "../Home/Home";
import CreateProduct from '../Admin/Admin';
import Profile from "../UserProfile/UserProfile";
import Register from "../Signup/Signup";
import Login from "../Login/Login";
import Result from "../Search/SearchResults";
import ProductDetails from "../ProductDetails/ProductDetails";
import OrderHistory from "../Orders/Orders";
import Cart from "../CartManagement/Mycart";
import OrderConfirmation from "../CartManagement/Checkout/Checkout";
import Help from "../Help/Help";
import AddReview from "../ProductReviews/AddReview";
import Logout from "../Logout/Logout";
import Auth from "../Login/Auth";



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
                <Route exact path='/createProduct' component={CreateProduct}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path= '/login' component={Login}/>
                <Route exact path='/result' component={Result}/>
                <Route exact path='/product' component={ProductDetails} />
                <Route exact path='/order-history' component={OrderHistory} />
                <Route exact path="/mycart" component={Cart}/>
                <PrivateRoute exact path='/AddReview' component={AddReview}/>
                <Route exact path="/logout" component={Logout}/>
                <PrivateRoute exact path='/orderConfirmation' component={OrderConfirmation}/>
                <Route exact path='/help' component={Help}/>                
            </Switch>
        );
    }
}

export default Routes;
