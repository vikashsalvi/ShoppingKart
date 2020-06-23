import React, {Component} from "react";
import './NavBar.css';
import {Link, withRouter} from "react-router-dom";
import Suggestion from "./suggestion/suggestion";

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
            {'name': 'Admin', 'url': 'createProduct', cname: 'item', linkClass: 'link'}
        ];

        this.navigate = [
            {'name': 'Cart', 'url': 'mycart', cname: 'link'},
            {'name': 'Login', 'url': 'login', cname: 'link'},
            {'name': 'Register', 'url': 'register', cname: 'link'}
        ];

        this.products = [
            {'id': 1, 'name': 'Spring Onions'}, {'id': 2, 'name': 'Onions'}, {'id': 3, 'name': 'Yellow Potato'},
            {'id': 4, 'name': 'White Potato'}, {'id': 5, 'name': 'Sweet Potato'}, {'id': 6, 'name': 'Green Pepper'},
            {'id': 7, 'name': 'Yellow Pepper'}, {'id': 8, 'name': 'Red Onions'}, {'id': 9, 'name': 'Pink Cabbage'},
            {'id': 10, 'name': 'Green Cabbage'}, {'id': 11, 'name': 'Broccoli'}, {'id': 12, 'name': 'Apple'},
            {'id': 13, 'name': 'Pineapple'}, {'id': 14, 'name': 'Banana'}, {'id': 15, 'name': 'Kiwi'},
            {'id': 16, 'name': 'Watermelon'}, {'id': 1, 'name': 'Straw Berry'}, {'id': 18, 'name': 'Black Berry'},
            {'id': 19, 'name': 'Mushrooms'}, {'id': 20, 'name': 'Tomato'}, {'id': 21, 'name': 'Cherry Tomato'}
        ]

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

    validate(e){
        if((e.type === "keydown" && e.keyCode === 13) || e.type === "click"){
            const val = document.getElementById("search").value;
            console.log(val);
            if(val === ""){
                alert("Please enter a search string")
            }else{
                this.props.history.push(
                    '/result', {'id': val}
                );
            }
        }
    }

    showList(e){
        const userInp = e.target.value;
        let suggestion = [];
        if(userInp.length > 0){
            suggestion = this.products.filter(item => {
                return item.name.toLowerCase().includes(userInp.toLowerCase());
            });
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
                        return <Suggestion key={index} name={item.name} onClick={this.itemClick}/>
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
