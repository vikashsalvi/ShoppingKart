import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { FaUser, FaLock, FaShoppingCart } from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom'
import Navigation from "../NavBar/NavBar";
import Footer from '../Footer/Footer';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            username_error: "",
            password_error: "",
        }

        this.validate = this.validate.bind(this);
        this.login = this.login.bind(this);

    };

    validate(e){
        const { name, value } = e.target;
        let val = '';

        switch (name) {
            case 'username':
                val = value.length > 0 ? "" : "Username is required";
                this.setState({
                    username_error: val
                });
                break;
            case 'password':
                val = value.length > 0  ? "" : "Password is required";
                this.setState({
                    password_error: val
                });
                break;
            default:
                break;
        }
    };

    checkEmpty() {
        const username = document.getElementById('username');
        const pwd = document.getElementById('pwd');
        return !((username.value === "") || (pwd.value === ""));
    }

    login(){
        if (this.state.username_error.length === 0 && this.state.password_error.length === 0 && this.checkEmpty()) {
            alert("User can continue shopping");
            this.props.history.push('/');
        }
        else{
            alert("Please fill the empty fields");
        }
    }

    render() {
        return (
           <div className="wrapper">
               <Navigation/>
               <div className="form_area">
                   <Form onSubmit={this.handleSubmit}>
                       <Form.Group>
                           <div className="input-section">
                               <Form.Label> <FaUser /> Username </Form.Label>
                               <input id="username" type="text" name="username" placeholder="Enter your Email"
                                      defaultValue={this.state.username} onChange={this.validate}
                                      className="inp"/>
                               <div className = "err-text">{this.state.username_error}</div>
                           </div>
                       </Form.Group>

                       <Form.Group >
                           <div className="input-section">
                               <Form.Label> <FaLock /> Password</Form.Label>
                               <input id="pwd" type="password" name="password" placeholder="Enter your Password"
                                             defaultValue={this.state.password} onChange={this.validate}
                                             className="inp"/>
                               <div className="err-text">{this.state.password_error}</div>
                           </div>
                       </Form.Group>
                   </Form>
                   <button type="submit" className="submit" onClick={this.login} >
                       <span>Login</span>
                       <FaShoppingCart />
                   </button>

                   <div className="redirect">
                       <Link to={'/register'} className="linkRegister">New User?Register</Link>
                       {/*<br/><br/>*/}
                       {/*<Link className="linkRegister">Forgot Password?</Link>*/}
                   </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <Footer />
           </div>
        );
    }
}

export default withRouter(Login);
