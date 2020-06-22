import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { FaUser, FaLock, FaShoppingCart } from 'react-icons/fa';
import { Redirect,Link } from 'react-router-dom'

const verifyemail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validation = (errors) => {
    let verify = true;
    Object.values(errors).forEach((value) => { value.length > 0 && (verify = false) });
    return verify;
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {
                username_error: "",
                password_error: "",
            },
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        //destructuring
        const { name, value } = e.target;
        const errors = this.state.errors;

        switch (name) {
            case 'username':
                errors.username_error = verifyemail.test(value) ? "" : "Email is not valid";
                break;
            case 'password':
                errors.password_error = value.length < 8 ? "Password length must be atleast 8" : "";
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => console.log(this.state));
    };

    checkEmpty() {
        const email = document.getElementById('email');
        const pwd = document.getElementById('pwd');
        console.log(email);
        console.log(pwd);
        
            if ((email.value === "") && (pwd.value === "")) {
                return false;
            }
        
        return true;
    } 

    handleSubmit = e => {
        e.preventDefault();
        if (validation(this.state.errors) && (this.checkEmpty())) {
            alert("User can continue shopping")

        }
        else{
            alert("Please fill the empty fields")
        }


    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">

                        <Form className="form-container" onSubmit={this.handleSubmit}>
                            <div className = "h1">Login </div>

                            <Form.Group>

                                <Form.Label> <FaUser /> Username </Form.Label>
                                
                                <Form.Control id = "email" type="email" name="username" placeholder="Enter your Email" defaultValue={this.state.username} onChange={this.handleChange} />
                                <div className = "err-text">{this.state.errors.username_error}</div>
                            </Form.Group>

                            <Form.Group >

                                <Form.Label> <FaLock /> Password</Form.Label>
                                <Form.Control id = "pwd" type="password" name="password" placeholder="Enter your Password" defaultValue={this.state.password} onChange={this.handleChange} />
                                <div className = "err-text">{this.state.errors.password_error}</div>
                            </Form.Group>

                            <Form.Group >
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="btn-btn-success btn-block" onSubmit= {this.handleSubmit} >
                                <label>Login  </label>
                                <FaShoppingCart />
                            </Button>
                            
                            <div className="redirect">
                                    <Link className="linkRegister">New User?Register</Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link className="linkRegister">Forgot Password?</Link>
                            </div>
                            

                        </Form>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                </div>
            </div>

        );

    }
}

export default Login;


