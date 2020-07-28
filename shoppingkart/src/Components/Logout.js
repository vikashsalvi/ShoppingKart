/**

 @author    Rashmika Ibrahimpatnam => B00832190

**/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Auth from './Auth';
import setAuthToken from './setAuthToken';
import Axios from "axios";


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedinstatus: ""
        }
    };

    handleLogout() {
        if (Auth.getAuth()) {
            this.setState({
                loggedinstatus: "User has logged out"

            });
            this.saveUserOrder();
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userid");
            localStorage.removeItem("location");
            setAuthToken(false);
            Auth.logout();
            alert("User has logged out");
            this.props.history.push("/")

        }
        else {
            this.setState({
                loggedinstatus: "User has not logged in yet"

            });
            console.log(this.state.loggedinstatus);
            alert("User did not login yet");
            this.props.history.push("/")

        }
    }

    /**

    @function author    Pallavi Desai => B00837405

    **/

    // save the cart items as unconfirmed order to dB after logout
    async saveUserOrder(){
        if(localStorage.getItem('tempCart') && JSON.parse(localStorage.getItem('tempCart')).length>0){
            const url = "https://csci-5709-web-24.herokuapp.com/orders/addToCart/";
            await Axios.post(url, {
                username: localStorage.getItem("username"),
                orderItems: JSON.parse(localStorage.getItem('tempCart')),
                grandTotal: 0,
                orderStatus: "unconfirmed"
            }).then(function (response) {

            });
            localStorage.removeItem('tempCart');
            localStorage.removeItem('id');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form_area">

                    <h5> Are you sure you want to log out?</h5>
                    <button type="submit" className="submit" onClick={() => this.handleLogout()} >
                        <span>Logout</span>
                    </button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default withRouter(Logout);
