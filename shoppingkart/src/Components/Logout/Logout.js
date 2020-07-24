import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Auth from '../Login/Auth';
import setAuthToken from '../Login/setAuthToken';



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
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userid");
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
