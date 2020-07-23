import React, {Component} from "react";
import './NavBar.css';
import {Link, withRouter} from "react-router-dom";
import Suggestion from "./suggestion/suggestion";
import Axios from "axios";

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showing: false,
            suggestion: [],
            selectedTup: []
        }

        this.side_panel = [
            {'name': 'Home', 'url': '', cname: 'item', linkClass: 'link'},
            {'name': 'Cart', 'url': 'mycart', cname: 'item hide-nav', linkClass: 'link'},
            {'name': 'Login', 'url': 'login', cname: 'item hide-nav', linkClass: 'link'},
            {'name': 'Register', 'url': 'register', cname: 'item hide-nav', linkClass: 'link'},
            {'name': 'Profile', 'url': 'profile', cname: 'item', linkClass: 'link'},
            {'name': 'Admin', 'url': 'createProduct', cname: 'item', linkClass: 'link'},
            {'name': 'Orders', 'url': 'order-history', cname: 'item', linkClass: 'link'},
            {'name': 'Help', 'url': 'help', cname: 'item', linkClass: 'link'}
        ];

        this.navigate = [
            {'name': 'Cart', 'url': 'mycart', cname: 'link'},
            {'name': 'Login', 'url': 'login', cname: 'link'},
            {'name': 'Register', 'url': 'register', cname: 'link'}
        ];

        this.toggle = this.toggle.bind(this);
        this.validate = this.validate.bind(this);
        this.showList = this.showList.bind(this);
        this.itemClick = this.itemClick.bind(this);

    }

    toggle(){
        const isShowing = this.state.showing;
        this.setState({
            showing: !isShowing
        })
    }

     async validate(e) {
         if ((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
             const val = document.getElementById("search").value;
             if (val === "") {
                 alert("Please enter a search string")
             } else {
                 const data = await Axios.get("http://localhost:5000/product/getSearchedProduct/" + val);

                 this.setState({
                     suggestion: []
                 });

                 this.props.history.push(
                     '/result', {
                         'query': val,
                         'data': data.data.data,
                         'check': false
                     }
                 );
             }
         }
     }

    async showList(e){
        const userInp = e.target.value;
        let suggestion = [];

        if(userInp.length > 0){
            const data = await Axios.get("http://localhost:5000/product/getSuggestion/" + userInp);
            suggestion = data.data.data;
        }
        this.setState({
            suggestion: suggestion
        })
    }

    suggestionList(){
        if(this.state.suggestion.length === 0){
            return null;
        }
        return(
            <div className="suggestion">
                {
                    this.state.suggestion.map((item, index) => {
                        return <Suggestion key={index} name={item} onClick={this.itemClick}/>
                    })
                }
            </div>
        );
    }

    itemClick(e) {
        document.getElementById("search").value = e.target.innerText;

        const tup = this.state.suggestion.filter((t) => {
            return t.name === e.target.innerText;
        });

        this.setState({
            suggestion : [],
            selectedTup: tup
        });
    }

    render() {
        return (
            <nav className="bar">
                <div className="menu" onClick={this.toggle}/>
                <div className={this.state.showing ? "search-bar search-move" : "search-bar"}>
                    <div className="search">
                        <input type="text" id="search" placeholder="Search"
                               onKeyDown={this.validate} onChange={this.showList}/>
                    </div>
                    <div className="search-icon" onClick={this.validate}/>
                    {this.suggestionList()}
                </div>
                <ul className="right">
                    {
                        this.navigate.map((item, index) => {
                            return(
                                <li key={index}>
                                    <div className="label">{item.name}</div>
                                    <Link to={item.url} className={item.cname}/>
                                </li>
                            );
                        })
                    }
                </ul>
                <Link to={'/'}><div className="logo"/></Link>
                <div className={this.state.showing ? "side-panel show-panel" : "side-panel"}>
                    <ul>
                        {
                            this.side_panel.map((item,index) => {
                                return(
                                    <li className={item.cname} key={index}>
                                        <div className="label">{item.name}</div>
                                        <div className="arrow"/>
                                        <Link to={item.url} className={item.linkClass}/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navigation);
